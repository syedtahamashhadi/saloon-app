import React from 'react'
import {View , Text , Image , TouchableOpacity , StyleSheet , ScrollView, Dimensions} from 'react-native'
import { useFonts } from '@use-expo/font'
import Chat from '../component/Chat'
import Button from '../component/Button'
import AsyncStorage from '@react-native-community/async-storage'
import { guestUserSuccess } from '../redux/authenticate/actions'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import Helpers from '../Helpers'
import Constants from 'expo-constants';
import { Notifications } from 'expo'
// import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//       shouldShowAlert: true,
//       shouldPlaySound: false,
//       shouldSetBadge: false,
//     }),
//   });


const Welcome = (props) =>{

    const [expoPushToken,setExpoPushToken] = React.useState('')
    console.log('Welcome Props >>',props)

    Helpers.test('Testing328')

    const handleSignIn = () =>{
        console.log('SignIn is Clicked...')
        props.guestUser(false)
        props.navigation.navigate('SignIn')
        // props.token ? props.navigation.navigate('Map') : props.navigation.navigate('SignIn')
    }

    const handleGuest = () =>{
        console.log('SignIn is Clicked...')
        props.guestUser(true)
        props.navigation.replace('GuestMap')
        // props.navigation.replace('GuestSlider')
    }

   
   
    return(
        <ScrollView style={styles.container}>
            <View style={{marginHorizontal:20}}>
                <View style={{marginTop:60}}>
                    <Text style={{fontSize:24,color:'#1D194D',fontFamily:'ExoRegular'}}>WELCOME TO</Text>
                    <Text style={{fontSize:66  ,color:'#FFA800',fontFamily:'AbrilFatFace'}}>
                        Slough
                    </Text>
                </View>

                <View style={{marginTop:30}}>
                    <Chat 
                        desc='Hey its me Salah , I am your personal digital stylist...'
                    />
                </View>

                <View style={{marginTop:90,width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Button title='Sign In' handleButton={handleSignIn}/>
                    <Text style={{fontSize:20,color:'grey' }}>
                        or
                    </Text>
                    <Button title='Guest' btnColor='#1D194D' handleButton={handleGuest}/> 
                       {/* {oldColor:'#19479c'} */}

                </View>
            </View>
        </ScrollView>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        guestUser : (data) => dispatch(guestUserSuccess(data))
    }
}

const mapStateToProps = state =>{
    return{
        signIn: state.loginReducer ,
        token: state.mfaReducer.token ,

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Welcome);

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            height: 300
            // marginHorizontal:20
        }
    }
)
