import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground} from 'react-native';
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

    // console.log('Promocode Props >>')

    renderItem = ({item}) => {
        // const { uri, title, content } = item;
        console.log('Promocode Props >>' , item)

        return (
            <View >
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        this.numberCarousel.scrollToIndex(index);
                    }}
                >
                    <View style={styles.promoCard}>
                        <ImageBackground source={promoCodeImage} style={styles.image}>
                            <View style={styles.flexColumn}>
                                <Text style={styles.badge}>{`${item.discount}%`}</Text>
                                <BlurView intensity={100} style={styles.cardBottom}>
                                    <Text style={styles.fontSize_25}>Happy Movemeber</Text>
                                    <Text style={{color: 'white'}}>22 Powlowski Plains</Text>
                                </BlurView>
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
        height: hp('30%'),
        resizeMode: 'cover',
        marginRight: 0
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