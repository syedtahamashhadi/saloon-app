import React from 'react'
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native'

const ConfirmBookingCard = (props) =>{

    return(
        // <View style={styles.container}>
            <View style={{width:'100%',backgroundColor:'#fff',elevation:5,
                    borderTopLeftRadius:10,borderTopRightRadius:10}}>
                <View style={{marginHorizontal:20,marginTop:20}}>
                    <View>
                        <Text style={{fontSize:20}}>{props.saloon}</Text>
                        <Text style={{fontSize:20,marginTop:5}}>{props.address}</Text>
                        <Text style={{fontSize:20 ,color:'grey'}}>{props.phone}</Text>
                    </View>

                    <View style={{borderWidth:0.8,marginVertical:15,borderColor:'grey'}}></View>

                    <View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
                            <Text style={{fontSize:15,color:'grey'}}>Service:</Text>
                            <Text style={{fontSize:16}}>{props.service}</Text>

                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:8}}>
                            <Text style={{fontSize:15,color:'grey'}}>Duration:</Text>
                            <Text style={{fontSize:16}}>{props.duration}</Text>

                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:8}}>
                            <Text style={{fontSize:15,color:'grey'}}>Staff:</Text>
                            <Text style={{fontSize:16}}>{props.staff}</Text>

                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:8}}>
                            <Text style={{fontSize:15,color:'grey'}}>Total:</Text>
                                <Text style={{fontSize:16}}>{props.total}</Text>

                        </View>
                    </View>
                </View>
            </View>
        // </View>
    )
}

export default ConfirmBookingCard;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            justifyContent:'center',
            alignItems:'center',
            marginHorizontal:20,
            // width
        }
    }
)