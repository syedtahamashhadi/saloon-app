import React from 'react';
import {View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import WhatsTrending from "../screens/discover/WhatsTrending";
// import ForYou from "../screens/discover/ForYou";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TransactionHeader from "./TransactionHeader";
import TransactionHistory from './TransactionHistory'
import PaymentSetting from './PaymentSetting'
import { connect } from 'react-redux'
import { setTabHeaderSuccess } from '../../../redux/authenticate/actions'


const Tab = createMaterialTopTabNavigator();

const PaymentNavigation = (props) =>{
    console.log('Props Nav>>>' , props)

    React.useEffect(()=>{
        console.log('I am Inam >>>>' )
        props.header('Transaction history')
        if(!props.route.state || props.route.state.index == 0){
            console.log('Transasction History')
            props.header('Transaction history')
        }else if(props.route.state.index == 1){
            console.log('Payment Settings')
            props.header('Payment settings')
        }
    },[props.route])

    return (
        // <SafeAreaProvider>
        <View style={{flex:1}}>
            <TransactionHeader nav={props.navigation}/>

            <Tab.Navigator
                initialRouteName={props.route.params.currentScreen}
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
                <Tab.Screen options={{ tabBarLabel: 'Transaction history'}}
                            name="TransactionHistory"
                            component={TransactionHistory} />

                <Tab.Screen options={{ tabBarLabel: "Payment settings" }}
                            name="PaymentSettings"
                            component={PaymentSetting} />
                            
            </Tab.Navigator>
        </View>
        // {/* </SafeAreaProvider>  */}
        
    );
}

const mapDispatchToProps =(dispatch) =>{
    return{
        header : (data) => dispatch(setTabHeaderSuccess(data))
    }
}

export default connect(null,mapDispatchToProps)(PaymentNavigation)