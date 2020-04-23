import React from 'react'
import {View , Text , StyleSheet , Dimensions , Image} from 'react-native'


const ScreenBackgroundImage = (props) =>{

    return(
        <View style={{height:150,backgroundColor:'#fff'}}>
            <Image source={require('../../assets/barber-shave.jpg') } style={styles.image}/>
            
            <View style={styles.imageOverLay}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontSize:35,color:'#fff',fontWeight:'bold'}}>{props.title}</Text>
                    </View>
                    <View style={{justifyContent:'flex-end'}}>
                        <View style={styles.seprator}>
                            <Text style={styles.sepratorText}>
                                {props.time} min
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:5}}>
                    <Text style={{color:'white',fontSize:16}}>{props.desc}</Text>
                </View>
            </View>
        </View>
    )
}

export default ScreenBackgroundImage;

const styles = StyleSheet.create(
    {
        seprator:{
            width:100,
            height:35,
            backgroundColor:'#FA7268',
            borderRadius:20,
        },
        sepratorText:{
            marginVertical:5,
            marginLeft:10, 
            fontSize:17,
            color:'white'
        },
        image:{
            resizeMode:'cover',
            height:'100%',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            width:'100%'
        },
        imageOverLay:{
            position:'absolute',
            marginLeft:20,
            marginVertical:30,
            width:Dimensions.get("window").width
        }
    }
)