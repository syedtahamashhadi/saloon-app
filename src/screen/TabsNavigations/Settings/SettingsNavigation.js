import React from 'react';
import {View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingsHeader from './SettingsHeader';
import Languages from './Languages'
import EditPayment from './EditPayment'


const Tab = createMaterialTopTabNavigator(); 

const SettingsNavigation = (props) =>{
    console.log('Props Nav>>>' , props)
  
    return (
        // <SafeAreaProvider>
        <View style={{flex:1}}>
            <BookingsHeader nav={props.navigation}/>
            {/* <Text>Test</Text> */}
            <Tab.Navigator
                initialRouteName="Languages"
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
                },
                }}>
                <Tab.Screen options={{ tabBarLabel: 'Languages'}}
                            name="Languages"
                            component={Languages} />

                <Tab.Screen options={{ tabBarLabel: `Edit Payment` }}
                            name="EditPayment"
                            component={EditPayment} />
                            
            </Tab.Navigator>
        </View>
        // {/* </SafeAreaProvider>  */}
        
    );
}



export default SettingsNavigation ;