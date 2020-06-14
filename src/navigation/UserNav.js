import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
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
import SaloonInfo from '../component/SaloonInfo'
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
// import GuestSlider from '../screen/guest/GuestSlider'



const Stack = createStackNavigator();

const UserNav = () =>{

    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" 
            screenOptions={{                            //https://reactnavigation.org/docs/screen-options
                headerShown: false, 
                // headerBackground:'#fff'
            }}          
        >   
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='MFA' component={MFA}/>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
            <Stack.Screen name='Map' component={Map}/>
            <Stack.Screen name='Saloon' component={Saloon}/>
            <Stack.Screen name='Stylist' component={Stylist}/>
            <Stack.Screen name='SelectStylist' component={SelectStylist}/>
            <Stack.Screen name='StylistProfile' component={StylistProfile}/>
            <Stack.Screen name='SaloonInfo' component={SaloonInfo}/>
            <Stack.Screen name='BookingSelectStylist' component={BookingSelectStylist} />
            <Stack.Screen name='BookingSelectServices' component={BookingSelectServices} />
            <Stack.Screen name='SaloonList' component={SaloonList}/>
            <Stack.Screen name='PickDate' component={PickDate}/>
            <Stack.Screen name='PickDateTime' component={PickDateTime}/>
            <Stack.Screen name='EmailConfirm' component={EmailConfirm}/>
            <Stack.Screen name='Congragulation' component={Congragulation}/>
            <Stack.Screen name='GuestMap' component={GuestMap}/>
            <Stack.Screen name='GuestSaloonList' component={GuestSaloonList}/> 
            <Stack.Screen name='GuestSaloon' component={GuestSaloon}/>
            <Stack.Screen name='GuestStylistProfile' component={GuestStylistProfile}/>
            <Stack.Screen name='GuestPickDateTime' component={GuestPickDateTime}/>
            <Stack.Screen name='GuestPaymentMethods' component={GuestPaymentMethods}/>
            <Stack.Screen name='GuestConfirmBooking' component={GuestConfirmBooking}/>
            <Stack.Screen name='SetProfileInfo' component={SetProfileInfo}/>
            <Stack.Screen name='PaymentMethods' component={PaymentMethods}/>
            <Stack.Screen name='SetBillingDetail' component={SetBillingDetail}/>
            <Stack.Screen name='UserDetail' component={UserDetail}/>
            <Stack.Screen name='ConfirmBooking' component={ConfirmBooking}/>
            <Stack.Screen name='EditProfile' component={EditProfile}/>

            {/* <Stack.screen name='GuestSlider' component={GuestSlider} /> */}
            {/* <Stack.Screen name='SetProfileInfo' component={SetProfileInfo}/> */}




           

        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default UserNav;