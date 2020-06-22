import React from 'react'
import {View , Text , TouchableOpacity , Linking , StyleSheet} from 'react-native'
import Rating from '../../component/Rating'
// import ProgressBar from '../component/ProgressBar'
import Icon from 'react-native-vector-icons/FontAwesome'


const MyCallOut = ()=>{

    // const {marker} = props

    let name = 'TONI&GUY'
    return(

            <View style={{width:200,height:70,backgroundColor:'#1D194D',borderRadius:5}}>
               
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:5,
                                marginVertical:3 }}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontSize:22,fontFamily:'AbrilFatFace',color:'#fff'}}>{name}</Text>
                    </View>
                    <View style={{width:60,height:20,borderRadius:10,
                            backgroundColor:'#FA7268',justifyContent:'center',alignItems:'center',
                           borderWidth:0.6,marginTop:5}}>
                            <Text style={{fontSize:12,color:'#fff'}}>15 mins</Text>
                    </View> 
                </View>

            
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginHorizontal:5}}>
                    <View>
                        <Rating rating={4.5}/>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name="map-marker" size={20} style={styles.searchIcon}/>
                        <Text style={{fontSize:12 , color:'#fff'}}>
                            1.3 m 
                        </Text>
                    </View>

                </View>
            </View>

    )
}

const styles = StyleSheet.create(
    {
        searchIcon:{
            color:'#FA7268' , 
            paddingRight:10 , 
            paddingLeft:10
        },
    }
)

export default MyCallOut ;