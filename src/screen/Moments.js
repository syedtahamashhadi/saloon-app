import React, {useState, useEffect} from 'react';
const {width, height} = Dimensions.get('window');
import {View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
// import before1 from '../../../assets/before1.jpg'
// import after1 from '../../../assets/after1.jpg'
import MomentsCard from "../component/MomentsCard";

export default function Moments(props) {
    const [beforeImage, setBeforeImage] = useState(null);
    const [afterImage, setAfterImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Constants.platform.ios) {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);


    const handleShare = () => {
        props.navigation.navigate('ReferToFriends')
        // console.log('Share...')
    }

    const pickBeforeImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setBeforeImage(result.uri);
        }
    }

    const pickAfterImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [10, 8],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setAfterImage(result.uri);
        }
    }

    return (
        <View style={{flex: 1 , backgroundColor:'#fff'}}>
        <View style={styles.momentsContainer}>
            <View style={{marginHorizontal:20,marginBottom:20, flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <Icon name='arrowleft' size={25}/>
                </TouchableOpacity>
            </View>
            <View style={[styles.flexRow, {paddingHorizontal: 20}]}>
                
                <View>
                    <Text style={styles.fontSize_40}>Moments</Text>
                    <Text style={styles.fontSize_20}>Before & After Selfies</Text>
                </View>
                <TouchableOpacity>
                    <Icon style={styles.cameraIcon} size={20} name='camera'/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.momentsHeader}>
                <MomentsCard beforeImage={beforeImage} afterImage={afterImage} handleShare={handleShare} pickBeforeImage={pickBeforeImage} pickAfterImage={pickAfterImage}/>
            </ScrollView>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    momentsContainer: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginTop:35
    },
    momentsHeader: {
        height: (height - 250),
    },
    fontSize_40: {
        fontWeight: 'bold',
        fontSize: 40
    },
    fontSize_20: {
        fontSize: 20
    },
    cameraIcon:{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 50,
        elevation: 5,
        marginTop: 12
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});