import React from 'react'
import {View , Text , StyleSheet , Dimensions , Image , TouchableOpacity} from 'react-native'


const ScreenBackgroundImage = (props) =>{
    console.log('Props are >>',props)
    return(
        <View style={{height:150,backgroundColor:'#fff'}}>
            <Image source={props.bannerImg } style={styles.image}/>
            
            <View style={styles.imageOverLay}>

                <TouchableOpacity  onPress={()=>props.handlePageView()}
                            style={{flexDirection:'row', justifyContent:'center',marginTop:0}}>
                                <View style={{height:20,width:60}}>
                                    <View style={{width:60,height:2,backgroundColor:'red'}}></View>
                                </View>
                </TouchableOpacity>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                    <View style={{marginLeft:20}}>
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
                <View style={{marginTop:5,marginLeft:25}}>
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
            width:80,
            height:35,
            backgroundColor:'#FA7268',
            borderTopLeftRadius:20,
            borderBottomLeftRadius:20,
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
            // marginLeft:20,
            // marginVertical:30,
            width:Dimensions.get("window").width
        }
    }
)