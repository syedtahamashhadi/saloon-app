import React from 'react'
import {View , Text , StyleSheet, ShadowPropTypesIOS, Image} from 'react-native'
import { Avatar } from 'react-native-elements'


const Chat = (props) =>{
    console.log('This is props image >>', typeof props.image)
    return(
        <View style={{flexDirection:'row'}}>
            
            <View style={{justifyContent:'flex-end',marginRight:10}}>
                <View style={{height:50,width:50,borderRadius:40,backgroundColor:'#fff',elevation:5,}}>
                    <Image source={require(`../../assets/bot-1.png`)} style={{
                        width:'100%',height:'100%',resizeMode:'cover',borderRadius:40}}/>
                </View>
            </View>
            
            <View style={styles.messageContainer}>
                <Text style={{marginVertical:18,marginHorizontal:20,fontSize:18,color:'#1D194D', }}>
                   {props.desc}
                </Text>
            </View>
        
        </View>
    )
}

export default Chat;

const styles = StyleSheet.create(
    {
        messageContainer:{
            width:'80%',
            backgroundColor:'#f5f9ff',
            borderTopLeftRadius:12,
            borderTopRightRadius:12,
            borderBottomRightRadius:12,
        },
    }
)