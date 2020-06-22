import React from 'react'
import {View , Text , StyleSheet , Image , TouchableOpacity} from 'react-native'
import Rating from './Rating'
import Icon from 'react-native-vector-icons/FontAwesome'


const SaloonBanner = (props) =>{

    // let backgroundImg = props.backgroundImg

    return(
        // <View style={styles.container}>
                <View style={{width:'100%',height:130,marginTop:20 , backgroundColor:'#fff'}}>
                    <Image source={require('../../assets/barber-shave.jpg') } style={styles.image}/>
                    <View style={styles.imageOverLay}>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',width:'100%'}}>
                            <View style={styles.timeCard}>
                                <Text style={{fontSize:12,color:'white',fontFamily:'ExoRegular'}}>Available At</Text>
                                <Text style={{fontSize:15,color:'white',fontFamily:'ExoRegular'}}>{props.time} mins</Text>
                            </View>
                        </View>
                        <View style={{marginTop:5}}>
                            <Text  style={{fontSize:25,color:'white',fontWeight:'bold',fontFamily:'AbrilFatFace'}}>{props.name}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',
                                marginRight:10 ,marginTop:13}}>
                            <Rating rating={props.rating} textColor='white'/>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Icon name="map-marker" size={20} style={styles.searchIcon}/>
                                <Text style={{fontSize:12 , color:'#fff',fontFamily:'ExoRegular'}}>
                                    {props.distance} m to your location
                                </Text>
                            </View>
                        </View>
                       
                    </View>

                </View> 
        // </View>
    )
}

export default SaloonBanner;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            marginTop:80,
            marginHorizontal:20
        },
        image:{
            resizeMode:'cover',
            height:'100%',
            borderRadius:20,
            width:'100%'
        },
        imageOverLay:{
            position:'absolute',
            marginLeft:20,
            marginVertical:10,
            // marginRight:12
            // width:Dimensions.get("window").width
        },
        timeCard:{
            justifyContent:'center',
            alignItems:'center',
            width:85,
            height:40,
            backgroundColor:'#FA7268',
            borderRadius:15,
            marginRight:12
        },
        searchIcon:{
            color:'#FA7268' , 
            paddingRight:10 , 
            paddingLeft:10
        },
    }
)

