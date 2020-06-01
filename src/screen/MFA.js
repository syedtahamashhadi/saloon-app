import React from 'react'
import {View , Text , TextInput ,StyleSheet , ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../component/Button'
import {connect} from 'react-redux'
import { mfaSuccess } from '../redux/authenticate/actions'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const OTP_SIGNIN = gql `
    mutation abc($email: String! , $code: String! , $deviceId: String!){
        verifyCode(email: $email, code: $code, deviceId: $deviceId) 
        {
        email
        jwtToken {
            token
            createdAt
        }
        password 
        }
    }
`

const MFA = (props) =>{

    const [otp,setOtp] = React.useState(null)
    console.log('Props Signin >>>' , props.signIn )
    console.log('Props SignUp >>>>',props.signUp)


    const checkOtpCall = props.signIn.isLogin ? OTP_SIGNIN : OTP_SIGNIN

    const [verifyOtp , { data , loading , error}] = useMutation(checkOtpCall)

    // props.mfaState.isAuthenticate == true ? props.navigation.replace('Map') : null

    const handleButton=()=>{
        // console.log('Button is Pressed...',props.mfaState)

        loading !== true && props.signUp.isSignUp && verifyOtp(
            {
                variables:{
                    email: props.signUp.data.signupUser.email , code: `${otp}` , deviceId: props.signUp.data.signupUser.email     //mutaion required email and device id
                }
            }
        )

        loading !== true && props.signIn.isLogin && verifyOtp(
            {
                variables:{
                    email: props.signUp.data.loginUser.email , code: `${otp}` , deviceId: 'abcd1234'     //mutaion required email and device id
                }
            }
        )
    }
    console.log('Errorr >>>>>>>>>>',error)

    React.useEffect(()=>{
        if(data){
            props.mfa(data)
            props.navigation.replace('Map') 
        }
    },[data])
    return(
        <View style={styles.container}>
            <View style={{width:120,height:100,marginTop:120,alignItems:'center'}}>
                <Icon name='onepassword' size={100} color='#49D3CE'/>
            </View>
            <View style={{marginTop:30}}>
                <Text style={{fontSize:35 , fontWeight:'bold'}}>OTP</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{fontSize:15 , fontWeight:'bold'}}>Please enter the 4 digit code!</Text>
            </View>

            <ScrollView >
                <View style={{alignItems:'center'}}>
                    <TextInput 
                        style={styles.inputContainer}
                        onChangeText= {val=>setOtp(val)}
                        value={otp}
                        placeholder='Enter Code'
                        textAlign={'center'}
                        keyboardType={'numeric'}
                    />
                </View>
                
                <View style={{marginTop:50}}>
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
        mfa: (data) => dispatch(mfaSuccess(data))
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
