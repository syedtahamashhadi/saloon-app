import React from 'react'
import {View , Text , StyleSheet, ShadowPropTypesIOS} from 'react-native'
import { Avatar } from 'react-native-elements'


const Chat = (props) =>{
    console.log('This is props image >>', typeof props.image)
    return(
        <View style={{flexDirection:'row'}}>
            
            <View style={{justifyContent:'flex-end',marginRight:10}}>
                <Avatar rounded source={require(`../../assets/cat.jpg`)} size={55}/>  
            </View>
            
            <View style={styles.messageContainer}>
                <Text style={{marginVertical:18,marginHorizontal:20 , fontSize:18}}>
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