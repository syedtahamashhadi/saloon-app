import React from 'react';
const {width, height} = Dimensions.get('window')
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import rewordIcon from '../../assets/rewards_icon.jpg'
import RangeBar from './RangeBar';

export default function RewardSlideBarCard() {
    return (
        // <SafeAreaProvider>
            // <SafeAreaView forceInset={{ top: 'always' }} style={{flex: 1}}>
                <View style={styles.rewardCard}>
                    <View style={styles.rewardCardWrapper}>
                        <View style={styles.flexRow}>
                            <Image width='20' source={rewordIcon} />
                            <Text style={styles.fontSize_20}>$15</Text>
                        </View>
                        <View style={{paddingVertical: 20}}>
                            <Text style={styles.fontSize_25}>Haircut Discount</Text>
                            <Text style={styles.fontSize_10}>So close! Spend $100 and get a discount of $15 </Text>
                        </View>

                        <RangeBar />

                        <View style={styles.cardBottom}>
                            <Text style={styles.fontSize_18}>$100</Text>
                        </View>
                    </View>
                </View>
            // </SafeAreaView>
        // </SafeAreaProvider> */}
    );
}

const styles = StyleSheet.create({
    rewardCard:{
        // flex: 1,
        alignItems: 'center',
        // backgroundColor:'red',
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
    cardBottom:{
        marginTop: 5,
        alignItems: 'flex-end',
    }

});