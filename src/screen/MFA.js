import React from 'react'
import {View , Text , TextInput ,StyleSheet , ScrollView , ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../component/Button'
import {connect} from 'react-redux'
import { mfaSuccess , loginSuccess } from '../redux/authenticate/actions'
import AsyncStorage from '@react-native-community/async-storage'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const OTP = gql `
    mutation abc($email: String! , $code: String! , $deviceId: String!){
        verifyCode(email: $email, code: $code, deviceId: $deviceId) 
        {
            
            _id
            email
            jwtToken {
              token
              createdAt
            }
            password
            userName
            firstName
            lastName
            profileImageURL
        }
    }
`

const MFA = (props) =>{

    const [otp,setOtp] = React.useState(null)
    const [fieldErr,setFieldErr] = React.useState(null)

    console.log('Props Signin >>>' , props.signIn )
    console.log('Props SignUp >>>>',props.signUp)

    const { screen } = props.route.params

    // const checkOtpCall = props.signIn.isLogin ? OTP_SIGNIN : OTP_SIGNIN

    const [verifyOtp , { data , loading , error}] = useMutation(OTP)
    console.log('MFA Data >>>>>>>>>>' , data)

    // props.mfaState.isAuthenticate == true ? props.navigation.replace('Map') : null

    let email = screen == 'signUp' ? props.signUp.data.signupUser.email  : props.signIn.data.loginUser.email 
    const handleButton=()=>{
        // console.log('Button is Pressed...',props.mfaState)
        if(otp == null || otp.length < 6 ){
            setFieldErr('Enter 6 digit Code !')
        }else{
            console.log('Credentials >>>>' , email ,' >> ' , otp , ' >> ' , email)
            setFieldErr(null)

            loading !== true && verifyOtp(
                {
                    variables:{
                        email: email , code: `${otp}` , deviceId: email     //mutaion required email and device id
                    }
                }
            )
        }
        
    }

    console.log('Errorr >>>>>>>>>>',error)

    const setNotification = async (val) =>{
        console.log('I am Fired >>')
        try {
            await AsyncStorage.setItem('@KOMB_NOTIFICATION',val)
        } catch (error) {
            // null
            console.log('TEsting Error',error)
        }
    }

    const checkKey = async ()=>{
        let keys=[]
        try {
            keys = await AsyncStorage.getAllKeys()
            console.log('Keys >>',keys)
            keys.includes('@KOMB_NOTIFICATION')== false ? setNotification('allowed') : null
        } catch (error) {
            null
        }
    }
    React.useEffect(()=>{
        console.log('Check >>>')
        checkKey()
    },[] )

    const storeData = async (value) =>{
        console.log('Store Data Fired >>' , value)
        try {
            await AsyncStorage.setItem('@KOMB_JWT_TOKEN',value)
            // await AsyncStorage.setItem('@KOMB_NOTIFICATIONS','')
        } catch (error) {
            console.log('Error AsyncStorage >>' , error)
        }
    }

    React.useEffect(()=>{
        if(data){
            // setFiledErr(null)
            storeData(data.verifyCode.jwtToken.token)
            props.mfa(data)
            // props.login(data)
            screen == 'signUp' ? props.navigation.replace('Congragulation') : props.navigation.replace('Map')
        }else if(error && error.message){
            setFieldErr(error.message.slice(15))
        }else if(error){
            setFieldErr('Something Went Wrong! TryAgain')
        }
    },[data,error])

    let myBorder= fieldErr ? 'red' : '#fafafa'
    // let myErr = (error && error.message) ? error.message.slice(15) : null
    
    return(
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                <View style={{width:120,height:100,marginTop:120 ,backgroundColor:'#fff', alignItems:'center'}}>
                    <Icon name='onepassword' size={100} color='#49D3CE' />
                    {/* <Text>Test</Text> */}
                </View>
            </View>
           
            <View style={{marginTop:30 , alignItems:'center'}}>
                <Text style={{fontSize:35 , fontFamily:'AbrilFatFace'}}>OTP</Text>
            </View>
            <View style={{marginTop:20, alignItems:'center'}}>
                <Text style={{fontSize:15 , fontFamily:'ExoBold'}}>Please enter the 6 digit code!</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems:'center'}}>
                    <TextInput 
                        style={{
                            width:120,
                            height:40,
                            borderRadius:6,
                            borderWidth:1,
                            marginTop:35,
                            fontSize:20,
                            backgroundColor:'#fafafa',
                            borderColor: myBorder
                        }}
                        onChangeText= {val=>setOtp(val)}
                        value={otp}
                        placeholder='Enter Code'
                        textAlign={'center'}
                        keyboardType={'numeric'}
                    />
                </View>

                <View style={{width:'100%',justifyContent:'center',marginTop:'10%' , alignItems:'center'}}>
                    {fieldErr && <Text style={{textAlign:'center', color:'red'}}>
                        {fieldErr}
                        </Text>}
                    {loading && <ActivityIndicator size={20} color='#00ff00'/>}
                    
                </View>
                
                <View style={{marginTop:20, marginHorizontal:20}}>
                    <Button title='Submit' handleButton={handleButton}/>
                </View>
            </ScrollView>
           
        </View>
    )
} 

mapStateToProps = (state) =>{
    return{
        signIn: state.loginReducer ,
        signUp: state.signUpReducer
        // mfaState: state.mfaReducer
    }
}

mapDispatchToProps = (dispatch) =>{
    return{
        mfa: (data) => dispatch(mfaSuccess(data)) ,
        // login: (data) => dispatch(loginSuccess(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MFA);

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            // alignItems:'center',
        },
        inputContainer:{
            width:120,
            height:40,
            borderRadius:6,
            borderWidth:1,
            marginTop:35,
            fontSize:20,
            backgroundColor:'#fafafa',
        },
    }
)
