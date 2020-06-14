import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import slides from './Slides'
import Icon from 'react-native-vector-icons/Ionicons'

const GuestSlider = (props) => {

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <ImageBackground source={item.image} style={styles.image}>
                </ImageBackground>
            </View>
        );
    };
    const _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };
    const _onDone = () => {
        props.navigation.navigate('Welcome')
    };

    return (
        <AppIntroSlider
            renderItem={_renderItem}
            data={slides}
            activeDotStyle={{backgroundColor: '#F7B500'}}
            showNextButton={false}
            onDone={_onDone}
            renderDoneButton={_renderDoneButton}
        />

    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: "column"
        },
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: 'center'
        },
        buttonCircle: {
            width: 40,
            height: 40,
            backgroundColor: '#F7B500',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
)

export default GuestSlider;