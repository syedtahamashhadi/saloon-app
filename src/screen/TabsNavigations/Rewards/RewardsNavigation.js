import React from 'react';
import {View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RewardsHeader from './RewardsHeader';
import ClaimRewards from './ClaimRewards'
import RewardWallet from './RewardWallet'
import DealOfTheDay from './DealOfTheDay'


const Tab = createMaterialTopTabNavigator();

const RewardsNavigation = (props) =>{
    console.log('Props Nav>>>' , props)

    return (
        // <SafeAreaProvider>
        <View style={{flex:1}}>
            <RewardsHeader nav={props.navigation}/>
            {/* <Text>Test</Text> */}
            <Tab.Navigator
                initialRouteName="RewardWallet"
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
                <Tab.Screen options={{ tabBarLabel: 'Reward wallet'}}
                            name="RewardWallet"
                            component={RewardWallet} />

                <Tab.Screen options={{ tabBarLabel: `Deal of the day` }}
                           name="DealOfTheDay"
                           component={DealOfTheDay} />

                <Tab.Screen options={{ tabBarLabel: `Claim Reward` }}
                            name="ClaimRewards"
                            component={ClaimRewards} />
                            
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

export default RewardsNavigation ;