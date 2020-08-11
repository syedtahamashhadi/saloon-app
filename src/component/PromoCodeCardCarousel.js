import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground , Clipboard} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
const { width, height } = Dimensions.get('window');
import data from './Data';
import promoCodeImage from '../../assets/barber-shave.jpg'
import {BlurView} from "expo-blur";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
// import PromoCodeCard from './PromoCodeCard';

 class PromoCardCarousel extends Component {

    handleBookNow = (props) => {
        this.props.navigation.navigate('PromoCode')
    }

    copyToClipBoard = (text) =>{
        console.log('Text >>>>' , text)
        Clipboard.setString(text)
    }

    // console.log('Promocode Props >>')

    renderItem = ({item}) => {
        // const { uri, title, content } = item;
        console.log('Promocode Props >>' , item)

        return (
            <View >
                <TouchableOpacity
                    activeOpacity={0.7}
                    // onPress={() => {
                    //     this.numberCarousel.scrollToIndex(index);
                    // }}
                >
                    <View style={styles.promoCard}>
                        <ImageBackground source={{ uri : item.pictureURL}} style={styles.image}>
                            <View style={{width:'100%',height:'100%'}}>
                                <Text style={styles.badge}>{`${item.discount}%`}</Text>
                                {/* <BlurView intensity={100} style={styles.cardBottom}>
                                    <Text style={styles.fontSize_25}>Happy Movemeber</Text>
                                    <Text style={{color: 'black'}}>22 Powlowski Plains</Text>
                                </BlurView> */}
                                <TouchableOpacity
                                    onPress={()=>this.copyToClipBoard(item.code)}
                                >
                                <Text style={{textAlign:'center',marginTop:'8%',fontFamily:'ExoBold',fontSize:18,color: 'black'}}>
                                    {item.code}
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        return (
            <View style={{marginHorizontal:12 , flex:1}}>
                <Carousel
                    style={styles.carousel}
                    data={this.props.detail}
                    renderItem={this.renderItem}
                    itemWidth={width * 0.8}
                    inActiveOpacity={0.4}
                    containerWidth={width}
                    ref={(c) => {
                        this.numberCarousel = c;
                    }}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 10,
        marginRight: 10
    },
    promoCard:{
        alignItems: 'center',
    },
    image:{
        borderRadius: 12,
        overflow: 'hidden',
        width: wp('80%'),
        height: hp('24%'),
        resizeMode: 'cover',
        marginRight: 0,
        borderWidth:0.5,
        elevation:5
        // marginTop:30,
        // backgroundColor:'red',
        // marginVertical:50
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

export default PromoCardCarousel