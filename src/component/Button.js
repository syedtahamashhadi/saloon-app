import React from 'react'
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native'


const Button = (props) =>{  

    let btnColor = props.btnColor ? props.btnColor : '#49D3CE'
    // let textSize = props.textSize ? props.textSize : 22
    let textSize = 22
    let width = props.width ? props.width : '100%'
    let height = props.height ? props.height : 52


    console.log('Props is >>',props)
    const styles = {
        container:{
            marginVertical:15,
            marginHorizontal:20,
            height: height,
            width: width,
            backgroundColor:btnColor,
            borderRadius:30,
            // elevation:4,
            alignItems:'center',
            justifyContent: 'center'
        },
        touchableContainer:{
            width:'100%',
            alignItems:'center'
        }
    }
    return(

        <TouchableOpacity style={styles.touchableContainer} activeOpacity={0.5} onPress={()=>props.handleButton()}>
            <View style={styles.container}>
                <Text style={{fontSize:textSize,color:'#fff',fontFamily:'ExoBold'}}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;
