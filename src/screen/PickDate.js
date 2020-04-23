import React from 'react'
import {View , Text , Image , TouchableOpacity , Dimensions, StyleSheet} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Chat from '../component/Chat'

const Welcome = () =>{

    return(
        <View style={styles.container}>
            <View style={{marginTop:35}}>
                <TouchableOpacity onPress={()=>console.log('Back is pressed..')}>
                    <AntIcon name='arrowleft' size={25}/>
                </TouchableOpacity>
            </View>

            <View style={{marginTop:20}}>
                <Chat 
                    desc='Choose the date and time for your visit'
                />
            </View>

            <View style={{marginTop:20}}>

            </View>
        </View>
    )
}

export default Welcome;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            marginHorizontal:20
        }
    }
)
