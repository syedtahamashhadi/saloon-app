import React from 'react'
import {View , Text , TextInput ,StyleSheet , ScrollView , ActivityIndicator , Platform} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../component/Button'
import {connect} from 'react-redux'
import { mfaSuccess , loginSuccess , setIsLogin } from '../redux/authenticate/actions'
import AsyncStorage from '@react-native-community/async-storage'
import { useMutation } from '@apollo/react-hooks'
import Mutations from '../appolo/mutations'
import Constants from 'expo-constants';
import { Notifications } from 'expo'
// import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import * as Device from 'expo-device';
// import * as Device from 'expo-device';

// ${Device.osBuildId}_${Device.osInternalBuildId}


const MFA = (props) =>{

    const [otp,setOtp] = React.useState(null)
    const [fieldErr,setFieldErr] = React.useState(null)
    const [email,setEmail] = React.useState(null)
    const [expoPushToken,setExpoPushToken] = React.useState('')

    // console.log('Props SignUp >>>>',props.signUp)

    const { screen } = props.route.params

    // const checkOtpCall = props.signIn.isLogin ? OTP_SIGNIN : OTP_SIGNIN

    const [verifyOtp , { data , loading , error}] = useMutation(Mutations.OTP)

    // props.mfaState.isAuthenticate == true ? props.navigation.replace('Map') : null

    // let email = screen == 'signUp' ? props.signUp.data.signupUser.email  : props.signIn.data.loginUser.email 
    const handleButton=()=>{
        // console.log('Button is Pressed...',props.mfaState)
        if(otp == null || otp.length < 6 ){
            setFieldErr('Enter 6 digit Code !')
        }else{
            alert(expoPushToken)
            setFieldErr(null)

            loading !== true && verifyOtp(
                {
                    variables:{
                        email: email , code: `${otp}` , deviceId: `${Device.osBuildId}_${Device.osInternalBuildId}`  , notificationToken: expoPushToken    //mutaion required email and device id
                    }
                }
            )
        }
        
    }

    const setNotification = async (val) =>{
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
            keys.includes('@KOMB_NOTIFICATION') == false ? setNotification('allowed') : null
        } catch (error) {
            null
        }
    }
    React.useEffect(()=>{
        checkKey()
    },[] )

    React.useEffect(()=>{
        console.log('MFA Mounted >>>',props.signIn )
        if(screen == 'signUp'){
            setEmail(props.signUp.data.signupUser.email)
         }else if(screen == 'signIn'){
            setEmail(props.signIn.data.loginUser.email) 
         }else if( screen == 'reSignUp'){
            setEmail(props.route.params.reSignUpEmail)
         }
    },[])

    const storeData = async (value) =>{
        try {
            await AsyncStorage.setItem('@KOMB_JWT_TOKEN',value , ()=>{
                props.setIsLogin(true)
                props.mfa(data)
                // props.navigation.navigate('Map')
                // screen == 'signUp' ? props.navigation.replace('Congragulation') : props.navigation.navigate('Map')
                if(screen == 'signUp' || screen == 'reSignUp'){
                    props.navigation.replace('Congragulation')
                }else{
                    props.navigation.navigate('Map')
                }
            })
        } catch (error) {
            console.log('Error AsyncStorage >>' , error)
        }
    }

    React.useEffect(()=>{
        if(data){
            storeData(data.verifyCode.jwtToken.token)
        }else if(error && error.message){
            setFieldErr(error.message.slice(15))
        }else if(error){
            setFieldErr('Something Went Wrong! TryAgain')
        }
    },[data,error])

    /***************************** Expo Push Notifications  ************************/

    async function registerForPushNotificationsAsync() {
        let token;
        if (Constants.isDevice) {
          const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = await Notifications.getExpoPushTokenAsync();
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        // if (Platform.OS === 'android') {
        //   Notifications.setNotificationChannelAsync('default', {
        //     name: 'default',
        //     importance: Notifications.AndroidImportance.MAX,
        //     vibrationPattern: [0, 250, 250, 250],
        //     lightColor: '#FF231F7C',
        //   });
        // }
        return token;
      }

      React.useEffect(()=>{
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token))
      },[])


    /******************************************************************************/

    let myBorder= fieldErr ? 'red' : '#fafafa'
    // let myErr = (error && error.message) ? error.message.slice(15) : null
    
    return(
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                <View style={{width:120,height:100,marginTop:120 ,backgroundColor:'#fff', alignItems:'center'}}>
                    <Icon name='onepassword' size={100} color='#49D3CE' />
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
        signUp: state.signUpReducer ,
        isLogin: state.setIsLoginReducer
        // mfaState: state.mfaReducer
    }
}

mapDispatchToProps = (dispatch) =>{
    return{
        mfa: (data) => dispatch(mfaSuccess(data)) ,
        setIsLogin : (data) => dispatch(setIsLogin(data)) ,

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
