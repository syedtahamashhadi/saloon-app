import React from 'react';
import {View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import WhatsTrending from "../screens/discover/WhatsTrending";
// import ForYou from "../screens/discover/ForYou";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TosPpHeader from "./TosPpHeader";
import TermsOfUse from './TermsOfUse'
import PrivacyPolicy from './PrivacyPolicy'
// import { connect } from 'react-redux'
// import { setTabHeaderSuccess } from '../../../redux/authenticate/actions'


const Tab = createMaterialTopTabNavigator();

const TosPpNavigation = (props) =>{
    console.log('Props Nav>>>' , props)

    

    return (
        // <SafeAreaProvider>
        <View style={{flex:1}}>
            <TosPpHeader nav={props.navigation}/>

            <Tab.Navigator
                initialRouteName="TermsOfUse"
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
                <Tab.Screen options={{ tabBarLabel: 'Terms of Use'}}
                            name="TermsOfUse"
                            component={TermsOfUse} />

                <Tab.Screen options={{ tabBarLabel: "Privacy Policy" }}
                            name="PrivacyPolicy"
                            component={PrivacyPolicy} />
                            
            </Tab.Navigator>
        </View>
        // {/* </SafeAreaProvider>  */}
        
    );
}



export default TosPpNavigation