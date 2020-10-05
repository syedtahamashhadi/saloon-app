import React , {useEffect, version} from 'react'
import {View , Text , StyleSheet , TextInput, 
            TouchableOpacity ,Image , ScrollView , ActivityIndicator , Platform} from 'react-native'
    
import Button from '../component/Button'
import AntIcon from 'react-native-vector-icons/AntDesign'
import {connect} from 'react-redux'
import { loginSuccess } from '../redux/authenticate/actions'
import gql from 'graphql-tag' 
import { useMutation, useQuery } from '@apollo/react-hooks'
import SvgSignInIcon from '../../MySvg/SvgSignInIcon'
import Mutations from '../appolo/mutations'
import * as Device from 'expo-device';
import * as Facebook from 'expo-facebook'


// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//       shouldShowAlert: true,
//       shouldPlaySound: false,
//       shouldSetBadge: false,
//     }),
//   });



const facebookLogin = async () =>{
    console.log('Facebook Login ')
    try {
        await Facebook.initializeAsync({
          appId: '1369340263270360',
        //   status     : true,
        //   xfbml      : true,
        // version    : 'v2.7'
        });
        const {
          type,
          token,
          expirationDate,
          permissions,
          declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile','email'],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          console.log('facebook login response >>> ' , response)
          Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        console.log('facebook login error >>> ' , message)

        alert(`Facebook Login Error: ${message}`);
      }
}



const SignIn = (props) =>{

    const [loginUser , {data , loading , error}] = useMutation(Mutations.SIGNIN)

    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [fieldErr,setFieldErr] = React.useState(null)
    
    data ? props.navigation.replace('Welcome') : null

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    const handleSignIn = () =>{
        console.log('SignIn is Pressed' , email , password )

        // facebookLogin()

        if(email == '' && password == ''){
            setFieldErr('Enter Your Email and Password !')
        }else if(email == ''){
            setFieldErr('Enter Your Email !')
        }else if(password == ''){
            setFieldErr('Enter Your Password !')
        }else{
            setFieldErr(null)
            loading !== true && loginUser(
                {
                    variables: {
                        email:  `${email}`, password: `${password}` , deviceId: `${Device.osBuildId}_${Device.osInternalBuildId}`
                    },
                } 
            )
        }
        
       
    }

    React.useEffect(()=>{
        fieldErr && console.log('Field Err is  >>>' , fieldErr.slice(23))

        if(fieldErr && fieldErr.slice(23) == ' Please verify your code sent to your email first'){
            props.navigation.navigate('MFA' , 
                                        {
                                            screen: 'reSignUp',
                                            reSignUpEmail:email
                                        }
                                    )
        }
    },[fieldErr])


    useEffect(()=>{
        if(data){
            // setFieldErr(null)
            props.signIn(data)
            props.navigation.replace('MFA' , 
                {
                    screen: 'signIn',
                    name:'taha'
                }
            )
        }else if(error && error.message){
            // let reqErr = (error && error.message) ? error.message.slice(15)  : null
            setFieldErr(error.message.slice(15))
        }else if(error){
            setFieldErr('Something Went Wrong! TryAgain')
        }
    },[data,error])
    





    const errorBorderColor = fieldErr ? 'red' : 'black'
    let reqErr = (error && error.message) ? error.message.slice(15)  : null

    return(

        
        <View style={styles.container}>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}

            <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:20 }}>

                <View style={{marginTop:35}}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <AntIcon name="arrowleft" size={25} />
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:15,justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:120 , height:140 , backgroundColor:'#fff'}}>
                        {/* <Image source={require('../../assets/signIn-avatar.png')} style={styles.image} /> */}
                        <SvgSignInIcon/>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:25 ,fontFamily:'AbrilFatFace'}}>Sign In</Text>
                    </View>
                </View>
                <View style={{width:'100%',marginTop:15}}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={{width:'80%',height:40,borderRadius:6,borderWidth:1 ,
                                borderColor:errorBorderColor , padding:5}}
                            onChangeText= {val=>setEmail(val)}
                            value={email}
                            // autoFocus={true}
                            placeholder='Email'
                            returnKeyType='next'
                            onFocus={()=>console.log('Focused..')}
                            onSubmitEditing={()=>console.log('TEst>>>')}
                            onEndEditing={()=>console.log('Editing is done...')}
                            fontSize={16}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={{width:'80%',height:40,borderRadius:6,borderWidth:1,
                                borderColor:errorBorderColor, padding:5}}
                            onChangeText= {val=>setPassword(val)}
                            value={password}
                            placeholder='Password'
                            secureTextEntry={true}
                            fontSize={16}
                            // onSubmitEditing={handleSignIn}
                        />
                    </View>
                    <View style={{marginTop:'3%' , width:'100%' }}>
                        {fieldErr && <Text style={{color:'red' , textAlign:'center'}}>
                                {fieldErr}
                            </Text>}
                        {/* {error && <Text style={{color:'red' , textAlign:'center'}}>
                            
                            {reqErr ? reqErr : 'Something Went Wrong! TryAgain'}
                        </Text> } */}
                        {loading && <ActivityIndicator size={20} color='#00ff00'/>}
                    </View>
                    <View style={{marginTop:15}}>
                        <Button title='Sign In' btnColor='#1D194D' handleButton={handleSignIn}/>
                    </View>
                    <View style={{marginTop:15,flexDirection:'row',justifyContent:'center'}}>  
                        
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ForgotPassword')}>
                            <Text style={{fontSize:15,fontFamily:'ExoBold'}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:15,flexDirection:'row',justifyContent:'center'}}>  
                        <Text style={{fontSize:15 , color:'grey',fontFamily:'ExoRegular'}}>
                            Don't have an Account ? </Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
                            <Text style={{fontSize:15,fontFamily:'ExoBold'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
            {/* </ScrollView> */}

        </View>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn : (data)=> dispatch(loginSuccess(data))
    }
}

export default connect(null,mapDispatchToProps)(SignIn);


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            // marginHorizontal:20
        },
        inputContainer:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:20
        },
        image:{
            resizeMode:'cover',
            height:'100%',
            width:'100%'
        }
    }
)