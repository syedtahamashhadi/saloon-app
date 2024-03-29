import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage'
import { setIsLogin } from '../redux/authenticate/actions'
import { connect } from 'react-redux'
import Welcome from '../screen/Welcome'
import SignIn from '../screen/SignIn'
import Map from '../screen/Map'
import Saloon from '../screen/Saloon'
import Stylist from '../screen/Stylist'
import SaloonList from '../screen/SaloonList'
import PickDate from '../screen/PickDate'
import SelectStylist from '../screen/SelectStylist'
import CurrentBookings from '../screen/CurrentBookings'
import SignUp from '../screen/SignUp'
import ForgotPassword from '../screen/ForgotPassword'
import Congratgulation from '../screen/Congratgulation'
import MFA from '../screen/MFA'
import StylistProfile from '../screen/StylistProfile'
// import SaloonInfo from '../component/SaloonInfo'
import BookingSelectStylist from '../screen/BookingSelectStylist'
import BookingSelectServices from '../screen/BookingSelectServices'
import PickDateTime from '../screen/PickDateTime'
import EmailConfirm  from '../screen/EmailConfirmation' 
import Congragulation from '../screen/Congratgulation'
import GuestMap from '../screen/guest/GuestMap'
import GuestSaloonList from '../screen/guest/GuestSaloonList'
import GuestSaloon from '../screen/guest/GuestSaloon'
import GuestStylistProfile from '../screen/guest/GuestStylistProfile'
import GuestPickDateTime from '../screen/guest/GuestPickDateTime'
import SetProfileInfo from '../screen/SetProfileInfo'
import PaymentMethods from '../screen/PaymentMethods'
import SetBillingDetail from '../screen/SetBillingDetail'
import UserDetail from '../screen/UserDetail'
import ConfirmBooking from '../screen/ConfirmBooking'
import GuestConfirmBooking from '../screen/guest/GuestConfirmBooking'
import GuestPaymentMethods from '../screen/guest/GuestPaymentMethods'
import EditProfile from '../screen/EditProfile'
import ReferToFriends from '../screen/ReferToFriends'
import Favourites from '../screen/Favourites'
import UpdatePasswords from '../screen/UpdatePasswords'
import BookingDetail from '../screen/BookingDetail'
import WhatsNew from '../screen/WhatsNew'
import FaqsDescription from '../screen/FaqsDescription'
import GuestBookingSelectStylist from '../screen/guest/GuestBookingSelectStylist'
import GuestBookingSelectServices from '../screen/guest/GuestBookingSelectServices'
import PaymentNavigation from '../screen/TabsNavigations/Payment/PaymentNavigation'
import HelpCenterNavigation from '../screen/TabsNavigations/HelpCenter/HelpCenterNavigation'
import PromoCode from '../screen/PromoCode'
import PostpondPickDate from '../screen/PostpondPickDate'
import RewardsNavigation from '../screen/TabsNavigations/Rewards/RewardsNavigation'
import Moments from '../screen/Moments'
import SaloonNavigation from '../screen/TabsNavigations/Saloon/SaloonNavigation'
import FooterBar from '../component/FooterBar'
import TosPpNavigation from '../screen/TabsNavigations/TOS_PP/TosPpNavigation'
import NotificationSettings from '../screen/NotificationSettings'
import Notifications from '../screen/Notifications'
import CameraScreen from '../screen/CameraScreen'
import BookingsNavigation from '../screen/TabsNavigations/Bookings/BookingsNavigation'
import SettingsNavigation from '../screen/TabsNavigations/Settings/SettingsNavigation'
import FaqSearch from '../screen/FaqSearch'
// import Testing from '../screen/Testing'
import {NotificationNavSuccess} from '../redux/authenticate/actions'
import UpdateUserProfile from '../screen/UpdateUserProfile'




const Stack = createStackNavigator();

const UserNav = (props) =>{
    const [isLogin,setIsLogin] = React.useState(false)



    console.log('props in userNAV', props)
    const {notificationData} = props

    const getToken = async () =>{
        console.log('Get Token is Fired >>>>>>>>>>>')
        try {
            let token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
            if(token !== null){
                console.log('Token is >>>>>>>>' , token)
                props.setIsLogin(true)
            }else{
                props.setIsLogin(false)
            }
        } catch (error) {
            props.setIsLogin(false)
        }
    }

    React.useEffect(()=>{
        
        if(notificationData){
        
            notificationData.origin == 'selected' && props.notificationNav(notificationData)
        }

        getToken()
    } )

    // console.log('Initial Route Props >>>' , props.isLogin)
    return(
        <NavigationContainer>
        <Stack.Navigator 
            // initialRouteName={props.initialRoute}
            screenOptions={{                            //https://reactnavigation.org/docs/screen-options
                headerShown: false, 
                // headerBackground:'#fff'
            }}          
        >   
            {
                props.isLogin ? (
                    <React.Fragment>
                        <Stack.Screen name='Map' component={Map}/>
                        <Stack.Screen name='Saloon' component={Saloon}/>
                        <Stack.Screen name='Stylist' component={Stylist}/>
                        <Stack.Screen name='SelectStylist' component={SelectStylist}/>
                        <Stack.Screen name='StylistProfile' component={StylistProfile}/>
                        <Stack.Screen name='BookingSelectStylist' component={BookingSelectStylist} />
                        <Stack.Screen name='BookingSelectServices' component={BookingSelectServices} />
                        <Stack.Screen name='SaloonList' component={SaloonList}/>
                        <Stack.Screen name='PickDate' component={PickDate}/>
                        <Stack.Screen name='PickDateTime' component={PickDateTime}/>
                        <Stack.Screen name='Congragulation' component={Congragulation}/>
                        
                        <Stack.Screen name='SetProfileInfo' component={SetProfileInfo}/>
                        <Stack.Screen name='PaymentMethods' component={PaymentMethods}/>
                        <Stack.Screen name='SetBillingDetail' component={SetBillingDetail}/>
                        <Stack.Screen name='UserDetail' component={UserDetail}/>
                        <Stack.Screen name='ConfirmBooking' component={ConfirmBooking}/>
                        <Stack.Screen name='EditProfile' component={EditProfile}/>
                        <Stack.Screen name='ReferToFriends' component={ReferToFriends}/>
                        <Stack.Screen name='Favourites' component={Favourites}/>
                        <Stack.Screen name='CurrentBookings' component={CurrentBookings}/>
                        <Stack.Screen name='BookingDetail' component={BookingDetail}/>
                        <Stack.Screen name='WhatsNew' component={WhatsNew}/>
                        <Stack.Screen name='FaqsDescription' component={FaqsDescription}/>
                       
                        <Stack.Screen name='PaymentNavigation' component={PaymentNavigation}/>
                        <Stack.Screen name='HelpCenterNavigation' component={HelpCenterNavigation}/>
                        <Stack.Screen name='PromoCode' component={PromoCode}/>
                        <Stack.Screen name='PostpondPickDate' component={PostpondPickDate}/>
                        <Stack.Screen name='RewardsNavigation' component={RewardsNavigation}/>
                        <Stack.Screen name='Moments' component={Moments}/>
                        <Stack.Screen name='SaloonNavigation' component={SaloonNavigation}/>
                        <Stack.Screen name='FooterBar' component={FooterBar}/>         
                        <Stack.Screen name= 'TosPpNavigation' component={TosPpNavigation}/>
                        <Stack.Screen name='NotificationSettings' component={NotificationSettings}/>
                        <Stack.Screen name='Notifications' component={Notifications}/>
                        <Stack.Screen name='CameraScreen' component={CameraScreen}/>
                        <Stack.Screen name='BookingsNavigation' component={BookingsNavigation}/>
                        <Stack.Screen name='SettingsNavigation' component={SettingsNavigation}/>
                        <Stack.Screen name='FaqSearch' component={FaqSearch}/>
                        <Stack.Screen name='UpdateUserProfile' component={UpdateUserProfile}/>

                    </React.Fragment>

                ) : (
                    <React.Fragment>
                        <Stack.Screen name='Welcome' component={Welcome} />
                        <Stack.Screen name='SignIn' component={SignIn}
                            options={
                                {
                                    title: 'Sign in' ,
                                    animationTypeForReplace: props.isLogin ? "push" : "pop"
                                }
                            }
                        />
                        <Stack.Screen name='SignUp' component={SignUp}/>
                        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
                        <Stack.Screen name='UpdatePasswords' component={UpdatePasswords}/>
                        <Stack.Screen name='MFA' component={MFA}/>
                        <Stack.Screen name='EmailConfirm' component={EmailConfirm}/>

                        <Stack.Screen name='GuestMap' component={GuestMap}/>
                        <Stack.Screen name='GuestSaloonList' component={GuestSaloonList}/> 
                        <Stack.Screen name='GuestSaloon' component={GuestSaloon}/>
                        <Stack.Screen name='GuestStylistProfile' component={GuestStylistProfile}/>
                        <Stack.Screen name='GuestPickDateTime' component={GuestPickDateTime}/>
                        <Stack.Screen name='GuestPaymentMethods' component={GuestPaymentMethods}/>
                        <Stack.Screen name='GuestConfirmBooking' component={GuestConfirmBooking}/>
                        <Stack.Screen name='GuestBookingSelectServices' component={GuestBookingSelectServices}/>
                        <Stack.Screen name='GuestBookingSelectStylist' component={GuestBookingSelectStylist}/>
                    </React.Fragment>
                )
            }
            

        </Stack.Navigator>
        </NavigationContainer>
    );
}

const mapStateToProps = (state) =>{
    return{
        isLogin : state.setIsLoginReducer.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setIsLogin : (data) => dispatch(setIsLogin(data)),
        notificationNav: (data) => dispatch(NotificationNavSuccess(data)) 

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserNav);
