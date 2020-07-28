import React from 'react';
const {width, height} = Dimensions.get('window')
import {View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import promoCodeImage from '../../assets/barber-shave.jpg'
import {SafeAreaProvider} from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import { BlurView } from 'expo-blur';


const PromoCodeCard = (props) => {
    return (
        // <SafeAreaProvider>
            <SafeAreaView forceInset={{ top: 'always' }} style={{flex: 1}}>
            {/* // <View > */}

                <View style={styles.promoCard}>
                    <ImageBackground source={{uri : props.detail.pictureURL}} style={styles.image}>
                        <View style={styles.flexColumn}>
                        <Text style={styles.badge}>{`${props.detail.discount}%`}</Text>
                        <BlurView intensity={100} style={styles.cardBottom}>
                            <Text style={styles.fontSize_25}>Happy Movemeber</Text>
                            <Text style={{color: 'white'}}>22 Powlowski Plains</Text>
                        </BlurView>
                        </View>
                    </ImageBackground>
                </View>
                {/* // </View> */}

            </SafeAreaView>
        // </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    promoCard:{
        flex: 1,
        alignItems: 'center'
    },
    image:{
        borderRadius: 12,
        overflow: 'hidden',
        width: (width - 40),
        height: (180),
        resizeMode: 'cover'
    },
    flexColumn: {
        flex: 1,
        justifyContent: 'space-between',
    },
    badge: {
        backgroundColor: '#49D3CE',
        borderRadius: 15,
        color: 'white',
        fontSize: 15,
        padding: 3,
        width: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 20
    },
    cardBottom:{
        height: 80,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fontSize_25:{
        fontSize: 20,
        color: 'white',
    },
})

export default PromoCodeCard