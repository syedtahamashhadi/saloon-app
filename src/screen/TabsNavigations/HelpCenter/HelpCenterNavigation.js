import React from 'react';
import {View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import WhatsTrending from "../screens/discover/WhatsTrending";
// import ForYou from "../screens/discover/ForYou";
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import HelpCenterHeader from "./HelpCenterHeader";
import Faq from './Faq'
import RegisterComplaint from './RegisterComplaint'
// import TransactionHistory from '../Payment/TransactionHistory'
// import PaymentSetting from '../Payment/PaymentSetting'



const Tab = createMaterialTopTabNavigator();

const HelpCenterNavigation = (props) =>{
    console.log('Props Nav>>>' , props)

    // React.useEffect(()=>{
    //     console.log('I am Inam >>>>' )
    //     props.header('Transaction history')
    //     if(!props.route.state || props.route.state.index == 0){
    //         console.log('Transasction History')
    //         props.header('Transaction history')
    //     }else if(props.route.state.index == 1){
    //         console.log('Payment Settings')
    //         props.header('Payment settings')
    //     }
    // },[props.route])

    return (
        // <SafeAreaProvider>
        <View style={{flex:1}}>
            <HelpCenterHeader nav={props.navigation} navProps={props}/>
            {/* <Text>Test</Text> */}
            <Tab.Navigator
                initialRouteName="TransactionHistory"
                tabBarOptions={{
                    animationEnabled: 'false',
                    activeTintColor: '#49d3ce',
                inactiveTintColor: 'gray',
                indicatorStyle: {
                    backgroundColor: '#49d3ce',
                },
                labelStyle: {
                    textTransform: 'none',
                    fontSize: 14,
                    margin: 0,
                    fontFamily:'ExoBold'



                    // paddingVertical: 10,
                },
                }}>
                <Tab.Screen options={{ tabBarLabel: 'Register complaint'}}
                            name="RegisterComplaint"
                            component={RegisterComplaint} />

                <Tab.Screen options={{ tabBarLabel: `FAQ's` }}
                            name="Faq"
                            component={Faq} />
                            
            </Tab.Navigator>
        </View>
        // {/* </SafeAreaProvider>  */}
        
    );
}

// const mapDispatchToProps =(dispatch) =>{
//     return{
//         header : (data) => dispatch(setTabHeaderSuccess(data))
//     }
// }

export default HelpCenterNavigation ;