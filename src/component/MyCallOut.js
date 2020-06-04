import React from 'react'
import {View , Text , TouchableOpacity , Linking , StyleSheet} from 'react-native'
import Rating from '../component/Rating'
// import ProgressBar from '../component/ProgressBar'
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'


const MyCallOut = (props)=>{

    const {marker} = props

    let name = marker.displayName.length>11 ? `${marker.displayName.slice(0,10)}` : marker.displayName
    return(

            <View style={{width:200,height:70,backgroundColor:'#1D194D',borderRadius:5}}>
               
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:5,
                                marginVertical:3 }}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>{name}</Text>
                    </View>
                    <View style={{width:60,height:20,borderRadius:10,
                            backgroundColor:'#FA7268',justifyContent:'center',alignItems:'center',
                           borderWidth:0.6,marginTop:5}}>
                            <Text style={{fontSize:12,color:'#fff'}}>15 mins</Text>
                    </View> 
                </View>

            
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginHorizontal:5}}>
                    <View>
                        <Rating rating={ marker.rating }/>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name="map-marker" size={20} style={styles.searchIcon}/>
                        <Text style={{fontSize:12 , color:'#fff'}}>
                            {marker.distance} m 
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

const mapStateToProps = (state)=>{
    return{
        isGuestUSer : state.guestUserReducer
    }
}


export default connect(mapStateToProps,null)(MyCallOut);