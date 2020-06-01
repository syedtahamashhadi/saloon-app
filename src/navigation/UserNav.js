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



            {/* <Stack.Screen name='MFA' component={MFA}/>
            <Stack.Screen name='Map' component={Map}/>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
            <Stack.Screen name='Congragulation' component={Congratgulation}/>
            <Stack.Screen name='Saloon' component={Saloon}/>
            <Stack.Screen name='Stylist' component={Stylist}/>
            <Stack.Screen name='SaloonList' component={SaloonList}/>
            <Stack.Screen name='PickDate' component={PickDate}/>
            <Stack.Screen name='SelectStylist' component={SelectStylist}/>
            <Stack.Screen name='CurrentBookings' component={CurrentBookings}/> */}

        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default UserNav;