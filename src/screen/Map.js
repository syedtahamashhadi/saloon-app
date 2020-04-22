import React from 'react'
import {View , StyleSheet, Text, Dimensions , TextInput ,Image , TouchableOpacity} from 'react-native'
import MapView , { Overlay } from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'

import {Ionicons} from '@expo/vector-icons'

const Search = () =>{
    const [value, onChangeText] = React.useState('');
    const getGreet = (name) =>{
        let hour = new Date().getHours()
        switch(true){
            case (hour>8 && hour <12):
                return `Good Morning ${name}`
            case (hour>12 && hour<17):
                return `Good Afternoon ${name}`
            default:
                return `Good Evening ${name}`
        }
    }
    return(
        <View style={styles.overLay}>
            <View style={{flexDirection:"row" , justifyContent:'space-between'}}>
               
                <Text style={{fontSize:20 ,fontWeight:'bold'}}>{getGreet("Taha")}</Text>
                <Image style={{borderRadius:40 , height:40 , width:40}}
                    source={require('../../assets/cat.jpg')}
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
    )
}


const Map = () =>{

    // const getLocation = () =>{

    // }

    return(
        <View style={styles.container}>

            <Search />

            <View style={styles.map}>
                <MapView 
                    style={styles.map}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    initialRegion={
                        {
                            latitude:24.860735,
                            longitude:67.001137,
                            latitudeDelta:0.0922,
                            longitudeDelta:0.0421
                        }
                    }
                />
            </View>
        </View>
    )
}

export default Map;


const styles= StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
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
        top:40 ,
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
    seachInput:{

    },
    
})


