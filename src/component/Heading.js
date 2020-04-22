import React from 'react'
import {View , Text , StyleSheet} from 'react-native'


const Heading = (props)=>{

    return(
        // <View>
            <Text style={styles.text}>{props.title}</Text>
        // </View>
    )
}

const styles = StyleSheet.create(
    {
        text:{
            color:'#1D194D' , 
            // fontFamily:'Abril Fatface' , 
            fontSize:27,
            top:30,
        }
    }
)
export default Heading
