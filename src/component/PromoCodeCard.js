import React from 'react';
const {width, height} = Dimensions.get('window')
import {View, Text, ImageBackground, StyleSheet, Dimensions , Clipboard} from 'react-native';
import promoCodeImage from '../../assets/barber-shave.jpg'
import {SafeAreaProvider} from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import { BlurView } from 'expo-blur';
import { TouchableOpacity } from 'react-native-gesture-handler';


const PromoCodeCard = (props) => {
    console.log('Props >>>> ' , props)


    const copyToClipBoard = (text) =>{
        console.log('Text >>>>' , text)
        Clipboard.setString(text)
    }



    return (
        // <SafeAreaProvider>
            <SafeAreaView forceInset={{ top: 'always' }} style={{flex: 1}}>
            {/* // <View > */}

                <View style={styles.promoCard}>
                    <ImageBackground source={{uri : props.detail.pictureURL}} style={styles.image}>
                        <View style={{width:'100%',height:'100%'}}>
                            <Text style={styles.badge}>{`${props.detail.discount}%`}</Text>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={()=>{copyToClipBoard(props.detail.code)}}
                            >
                            <Text style={{textAlign:'center',marginTop:'13%',fontFamily:'ExoBold',fontSize:18,color: 'black'}}>
                                {/* Cx8D5zlsK */}
                                {props.detail.code}
                            </Text>
                            </TouchableOpacity>
                            {/* <View style={{justifyContent:'center',backgroundColor:'green',width:'100%',height:'100%'}}>
                                <Text style={{textAlign:'center',fontFamily:'ExoBold'}}>
                                    Cxas865
                                </Text>
                            </View> */}
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
        height: (190),
        resizeMode: 'cover',
        borderWidth:0.5,
        elevation:5
    },
    flexColumn: {
        // flex: 1,
        color:'black'
        // justifyContent: 'space-between',
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