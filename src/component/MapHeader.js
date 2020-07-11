import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity , TextInput , Image } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Helpers from '../Helpers'



const MapHeader = (props) =>{

    const [value, onChangeText] = React.useState('');
   
    // const getGreet = (name) =>{
    //     let hour = new Date().getHours()
    //     console.log('Hour is >>' , hour)
    //     switch(true){
    //         case (hour >= 1 && hour <12):
    //             return `Good Morning! ${name}`
    //         case (hour >= 12 && hour<17):
    //             return `Good Afternoon! ${name}`
    //         case (hour >= 17 && hour <= 24):
    //             return `Good Evening! ${name}`
    //         default:
    //             return `Good Evening! ${name}`
    //     }
    // }

    const handleImagePress = ()=>{
        console.log('Image is Pressed')
        props.nav.navigation.navigate('EditProfile')
    }

    return(
        
        <View style={styles.overLay}>
            <View style={{marginHorizontal:20}}>

                <View style={{flexDirection:"row" , justifyContent:'space-between'}}>
                
                    <Text style={{fontSize:20 ,fontFamily:'AbrilFatFace'}}>
                        {Helpers.getGreet(props.name)}
                    </Text>
                    <TouchableOpacity onPress={()=>handleImagePress()}>
                        <Image style={{borderRadius:40 , height:40 , width:40,borderWidth:3,borderColor:'#fff'}}
                            source={{uri : props.imgUri}}
                        />
                    </TouchableOpacity>
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
                    <TouchableOpacity onPress={()=>props.handleFilterPress()}>
                        <View style={{borderRadius:40 , backgroundColor:'white' , width:40 , height:40}}>
                            <AntIcon name='filter' size={25} style={{marginHorizontal:7 , marginVertical:6}}/>
                        </View>
                    </TouchableOpacity>
                   
                </View>
            </View>
        
        </View>

    )
}

const styles = StyleSheet.create(
    {
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
    }
)



export default MapHeader;