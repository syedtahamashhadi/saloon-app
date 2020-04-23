import React from 'react'
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native'


const Button = (props) =>{  

    let btnColor = props.btnColor ? props.btnColor : '#49D3CE'
    const styles = {
        container:{
            marginVertical:15,
            marginHorizontal:20,
            height:35,
            width:200,
            backgroundColor:btnColor,
            borderRadius:20
        },
        touchableContainer:{
            width:'100%',
            alignItems:'center'
        }
    }
    return(

        <TouchableOpacity style={styles.touchableContainer} onPress={()=>console.log('Next Button is Presses')}>
            <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:22,color:'#fff'}}>{props.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Button;
