import React, {useState, useEffect} from 'react';
const {width, height} = Dimensions.get('window');
import {View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
// import before1 from '../../../assets/before1.jpg'
//https://medium.com/@ifeoluwaking24/how-to-upload-an-image-in-expo-react-native-to-firebase-using-cloudinary-24aac981c87
// import after1 from '../../../assets/after1.jpg'
import MomentsCard from "../component/MomentsCard";
import { useMutation } from '@apollo/react-hooks'
import AsyncStorage from '@react-native-community/async-storage';
import Mutations from '../appolo/mutations'


export default function Moments(props) {
    const [beforeImage, setBeforeImage] = useState(null);
    const [afterImage, setAfterImage] = useState(null);
    const [images,setImages] = useState(['false','false'])
    const [beforeImageUrl,setBeforeImageUrl] = useState(null)
    const [afterImageUrl,setAfterImageUrl] = useState(null)

    const name = 'Raheem'


    const [addMoments , { data , loading , error  }] = useMutation(Mutations.ADD_MOMENTS)

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
    }

    const getToken = async()=>{
        try {
            const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
            if(token !== null){
                addMoments(
                    {
                        variables:{
                            beforeUrl : beforeImageUrl , afterUrl : afterImageUrl
                        },
                        context:{
                            headers:{
                                authorization: token
                            }
                        }
                    }
                )
            }
        } catch (error) {
            console.log('Error >>' , error)
        }
    }

    const pickBeforeImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3], 
            quality: 1,
            base64: true
        });
        console.log(result);

        if (!result.cancelled) {
            console.log('Moments URI >>' , result)
            setBeforeImage(result);
            let temp = images
            temp[0]=result.base64
            setImages(temp)
            // dx2md0gy6
            //oazxudm0

        }
    }

    const pickAfterImage = async () => {
        if(beforeImage !== null){
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [10, 8],
                quality: 1,
                base64:true
            });
            console.log(result);
            if (!result.cancelled) {
                setAfterImage(result);
                let temp = images
                temp[1]= result.base64
                setImages(temp)
            }
        }else{
            alert('Kindly Upload your Before Image first')
        }
       

      
    }

    const openCameraScreen = () =>{
        props.navigation.navigate('CameraScreen')
    }

      
    const handleUpload = () =>{

        if(beforeImage && afterImage){
            
            let apiUrl = 'https://api.cloudinary.com/v1_1/dx2md0gy6/image/upload';
    
            images.map( async (val,index)=>{
                console.log('Images >>>' , val)
                let data = {
                    "file": `data:image/jpg;base64,${val}`,
                    "upload_preset": "oazxudm0",
                  }
            
                try {
                    const uploadData = await fetch( apiUrl , 
                        {
                            body: JSON.stringify(data),
                            headers: {
                            'content-type': 'application/json'
                            },
                            method: 'POST',
                        }
                    )
                    const response = await uploadData.json()
                
                    index == 0 ? setBeforeImageUrl(response.secure_url) : setAfterImageUrl(response.secure_url)
                
                } catch (error) {
                    console.log('Error on Upload >>',err)
                }
            })

            // let apiUrl = 'https://api.cloudinary.com/v1_1/dx2md0gy6/image/upload';

        }
    }

     useEffect(()=>{

        if(beforeImageUrl !== null && afterImageUrl !== null){
            console.log('Image Url >>',beforeImageUrl , '  ' , afterImageUrl)
            getToken()
        }

    },[beforeImageUrl,afterImageUrl])


    useEffect(()=>{
        if(data){
            alert('Moment has been added')
        }else if(error){
            alert('Something Went Wrong Try Again !')
        }
    },[data,error])
    

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
                <TouchableOpacity onPress={openCameraScreen}>
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