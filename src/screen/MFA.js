import React from 'react'
import {View , Text , TextInput ,StyleSheet , ScrollView , ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../component/Button'
import {connect} from 'react-redux'
import { mfaSuccess , loginSuccess } from '../redux/authenticate/actions'
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
            profileImageURL
        }
    }
`

const MFA = (props) =>{

    const [otp,setOtp] = React.useState(null)
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

        loading !== true && verifyOtp(
            {
                variables:{
                    email: email , code: `${otp}` , deviceId: email     //mutaion required email and device id
                }
            }
        )

        // loading !== true && props.signIn.isLogin && verifyOtp(
        //     {
        //         variables:{
        //             email: props.signUp.data.loginUser.email , code: `${otp}` , deviceId: 'abcd1234'     //mutaion required email and device id
        //         }
        //     }
        // )
    }
    console.log('Errorr >>>>>>>>>>',error)

    React.useEffect(()=>{
        if(data){
            props.mfa(data)
            // props.login(data)
            screen == 'signUp' ? props.navigation.replace('Congragulation') : props.navigation.replace('Map')
        }
    },[data])

    let myBorder= error ? 'red' : '#fafafa'
    
    return(
        <View style={styles.container}>
            <View style={{width:120,height:100,marginTop:120,alignItems:'center'}}>
                <Icon name='onepassword' size={100} color='#49D3CE'/>
            </View>
            <View style={{marginTop:30}}>
                <Text style={{fontSize:35 , fontWeight:'bold'}}>OTP</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{fontSize:15 , fontWeight:'bold'}}>Please enter the 6 digit code!</Text>
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

                <View style={{width:'100%',justifyContent:'center',marginTop:'10%'}}>
                    {error && <Text style={{textAlign:'center', color:'red'}}>Something Went Wrong! TryAgain</Text>}
                    {loading && <ActivityIndicator size={20} color='#00ff00'/>}
                    
                </View>
                
                <View style={{marginTop:20}}>
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
            alignItems:'center',
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
