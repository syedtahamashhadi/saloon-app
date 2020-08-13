import React from 'react';
import {View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingsHeader from './BookingsHeader';
import Canceled from './Canceled'
import Scheduled from './Scheduled'




const Tab = createMaterialTopTabNavigator();

const BookingsNavigation = (props) =>{
    console.log('Props Nav>>>' , props)
    // },[props.route])

    return (
        // <SafeAreaProvider>
        <View style={{flex:1}}>
            <BookingsHeader nav={props.navigation}/>
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
                <Tab.Screen options={{ tabBarLabel: 'Scheduled'}}
                            name="Scheduled"
                            component={Scheduled} />

                <Tab.Screen options={{ tabBarLabel: `Canceled` }}
                            name="Canceled"
                            component={Canceled} />
                            
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

export default BookingsNavigation ;