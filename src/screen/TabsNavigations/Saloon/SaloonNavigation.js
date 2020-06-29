import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SaloonInfo from './SaloonInfo'
import SaloonReviews from './SaloonReviews'
import SaloonOffers from './SaloonOffers'
import SaloonHeader from './SaloonHeader'
import { useLinkProps } from '@react-navigation/native'


const Tab = createMaterialTopTabNavigator();

const SaloonNavigation = (props) =>{

    return(
        <View style={{flex:1}}>

            <SaloonHeader nav={props.navigation}/>
            
            <Tab.Navigator
                initialRouteName='SaloonInfo'
                tabBarOptions={
                    {
                        activeTintColor: '#49d3ce',
                        animationEnabled:'false',
                        indicatorStyle:{
                            backgroundColor:'#49d3ce',
                        },
                        inactiveTintColor: 'grey',
                        labelStyle:{
                            textTransform: 'none',
                            fontSize:12,
                            marginTop: 0,
                            fontFamily: 'ExoBold'
                        },
                        style:{
                            marginTop:-18,
                            height:40
                            // backgroundColor:'green',
                            // paddingVertical:-10
                        }

                    }
                }
            >
                <Tab.Screen
                    options={{ tabBarLabel:'Info' }}
                    name='SaloonInfo'
                    component={SaloonInfo}
                />
                <Tab.Screen
                    options={{ tabBarLabel:'Offers' }}
                    name='SaloonOffers'
                    component={SaloonReviews}
                />
                <Tab.Screen
                    options={{ tabBarLabel:'Reviews' }}
                    name='SaloonReviews'
                    component={SaloonReviews}
                />
            
            </Tab.Navigator>    

        </View>
    )
}

export default SaloonNavigation;









