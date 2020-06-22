import React from 'react'
import {View , StyleSheet, Text, Dimensions , TextInput ,Image , TouchableOpacity} from 'react-native'
import MapView , { Marker , Callout } from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MapFooter from '../../component/MapFooter'
// import * as Location from 'expo-location'
import {Ionicons} from '@expo/vector-icons'
import MyCallOut from './GuestMapCallOut'

const Search = (props) =>{
    const [value, onChangeText] = React.useState('');
    const getGreet = (name) =>{
        let hour = new Date().getHours()
        switch(true){
            case (hour >= 1 && hour <12):
                return `Good Morning! ${name}`
            case (hour >= 12 && hour<17):
                return `Good Afternoon! ${name}`
            case (hour >= 17 && hour <= 24):
                return `Good Evening! ${name}`
            default:
                return `Good Evening! ${name}`
        }
    }

    return(
        <View style={styles.overLay}>
            <View style={{marginHorizontal:20}}>

                <View style={{flexDirection:"row" , justifyContent:'space-between'}}>
                    <Text style={{fontSize:20 ,fontFamily:'AbrilFatFace'}}>{getGreet('Spawden')}</Text>
                    
                    <Image style={{borderRadius:40 , height:40 , width:40,borderWidth:3,borderColor:'#fff'}}
                        source={require('../../../assets/user.png')}
                    />
                
                </View>
                <View style={{flexDirection:"row" , justifyContent:'space-between' , top:20}}>
                    
                    <View style={styles.searchContainer}>
                        <Icon name="map-marker" size={25} style= {styles.searchIcon} />
                        
                        <TextInput
                            onChangeText={text => onChangeText(text)}
                            placeholder="Whats your style for today"
                            value={value}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <TouchableOpacity onPress={()=>console.log("Filter is pressed")}>
                        <View style={{borderRadius:40 , backgroundColor:'white' , width:40 , height:40}}>
                            <AntIcon name='filter' size={25} style={{marginHorizontal:7 , marginVertical:6}}/>
                        </View>
                    </TouchableOpacity>
                   
                </View>
            </View>
        
        </View>

    )
}
// query getNearestSalons($latitude: Float! , $longitude: Float!)

const GuestMap = (props) =>{
    
    const handleLocButton = () =>{
        console.log('Current Loc Button is Pressed.....')
    }

    const handleBarPress = () =>{
        console.log('Bar is Pressed')
        props.navigation.navigate('GuestSaloonList')
    }

    const handleMarkerPress = () =>{
        props.navigation.navigate('GuestSaloon')
    }

    return(
        <View style={styles.container}>

            <Search />

            <View style={styles.map}>
                <MapView 
                    style={styles.map}
                    region={
                        {
                            latitude:24.928505,
                            longitude:67.125988,
                            latitudeDelta:0.0922,
                            longitudeDelta:0.0421
                        }
                    }
                    showsCompass={false}
                >
               
                    <Marker
                        coordinate={
                            {
                                latitude:24.928505,
                                longitude:67.115988
                            }
                        }
                        pinColor='red'
                        toolbarEnabled={false}
                    >
                        <Callout onPress={()=>handleMarkerPress()} tooltip={true}>
                            <MyCallOut />
                        </Callout> 
                    </Marker>
                                         
                </MapView>
            </View>

            <MapFooter 
                handleBarPress={handleBarPress}
            />
           
        </View>
    )
}




export default GuestMap ;


const styles= StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    map:{
        flex:8,
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height
    },
    overLay:{
        position: 'absolute',
        zIndex: 9999,
        width: '100%',
        top:40,
    },
    searchContainer:{
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'white',
        borderRadius:10,
        padding:5,
        width:260
    },
    searchIcon:{
        color:'#505050' , 
        paddingRight:10 , 
        paddingLeft:10
    },
    
})


