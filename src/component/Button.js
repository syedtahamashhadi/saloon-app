import React from 'react'
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native'


const Button = (props) =>{  

    let btnColor = props.btnColor ? props.btnColor : '#49D3CE'
    let textSize = props.textSize ? props.textSize : 22
    console.log('Props is >>',props)
    const styles = {
        container:{
            marginVertical:15,
            marginHorizontal:20,
            height:35,
            width:200,
            backgroundColor:btnColor,
            borderRadius:20,
            elevation:4
        },
        touchableContainer:{
            width:'100%',
            alignItems:'center'
        }
    }
    return(

        <TouchableOpacity style={styles.touchableContainer} onPress={()=>props.handleButton()}>
            <View style={styles.container}>
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                    <Text style={{fontSize:textSize,color:'#fff'}}>{props.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Button;
