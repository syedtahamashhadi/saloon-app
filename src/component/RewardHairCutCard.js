import React from 'react';
const {width, height} = Dimensions.get('window')
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import rewordIcon from '../../assets/rewards_icon.jpg'
import GiftIcon from '../../MySvg/SvgRewardHairCutGift' 


const giftData = [
    {title: 1},
    {title: 2},
    {title: 3},
    {title: 4},
    {title: 5},
    {title: 6},
    {title: 7},
    {title: 8},
    {title: 9},
    {title: 'gift'},
]

export default function RewardHairCutCard() {
    return (
        // <SafeAreaProvider>
        //     <SafeAreaView forceInset={{ top: 'always' }} style={{flex: 1}}>
                <View style={styles.rewardCard}>
                    <View style={styles.rewardCardWrapper}>
                        <View style={styles.flexRow}>
                            <Image width='20' source={rewordIcon} />
                            {/* <Text style={styles.fontSize_20}>$15</Text> */}
                        </View>
                        <View style={{paddingVertical: 20}}>
                            <Text style={styles.fontSize_25}>Free haircut</Text>
                            <Text style={styles.fontSize_10}>Every 10th haircut as a gift!</Text>
                        </View>
                        <View>
                        </View>
                        
                        <View style={styles.cardBottom}>
                        {giftData.map((item, index) => {
                            if(index <= 5){
                                return (
                                    <View key={index} style={styles.first_six_circle}>    
                                        <Text style={styles.circleText}>{item.title}</Text>
                                    </View>
                                );
                            }
                            else if(index == giftData.length -1) {
                                return (
                                    <View key={index} style={styles.circleIcon}> 
                                        <View style={{width:20,height:20}}>   
                                          <GiftIcon />
                                        </View>
                                    </View>
                                );
                              }
                              return (
                                <View key={index} style={styles.circle}>    
                                    <Text style={styles.circleText}>
                                        {item.title}                                                                         
                                    </Text>
                                </View>
                              );
                        })}
                        </View>
                    </View>
                </View> 
        //     </SafeAreaView>
        // </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    rewardCard:{
        // flex: 1,
        alignItems: 'center'
    },
    rewardCardWrapper:{
        width: wp('90%'),
        // height: (230),
        padding: 20,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 12
    },
    flexRow:{
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    fontSize_20:{
        fontSize: 20
    },
    fontSize_25:{
        fontSize:25,
        fontWeight: 'bold'
    },
    fontSize_10:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#C0C4CB'
    },
    fontSize_18:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    first_six_circle:{
        opacity: 0.6,
        borderRadius: 100,
        backgroundColor: 'white',
        elevation: 8,
        textAlign: 'center',
        height: 25,
        width: 20,
        marginLeft: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        borderRadius: 100,
        backgroundColor: 'white',
        elevation: 10,
        textAlign: 'center',
        height: 25,
        width: 20,
        marginLeft: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleIcon:{
        borderRadius: 100,
        backgroundColor: 'white',
        elevation: 10,
        textAlign: 'center',
        height: 40,
        padding: 8,
        // width: 30,
        marginLeft: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleText:{
        color: '#49d3ce',   
    },
    cardBottom:{
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
        // justifyContent: 'space-between',
        alignItems: 'center'
    }

});