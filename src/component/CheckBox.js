import React from 'react'
import {View , StyleSheet , TouchableOpacity} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'


const CheckBox = () =>{

    const [isPressed,setIsPressed] = React.useState(false)
    return(
        // <View style={{marginTop:30}}>
            <TouchableOpacity onPress={()=>setIsPressed(!isPressed)}>

                {isPressed ?
                    <AntIcon name='checkcircle' size={30} style={{color:'#49D3CE'}}/> :

                    <View style={styles.unChecked}> 
                    </View>
                }                       
                    
            </TouchableOpacity>
        // </View>

    )
}

export default CheckBox;
const styles = StyleSheet.create(
    {
        unChecked:{
            width:30,
            height:30,
            borderRadius:40,
            backgroundColor:'#fff',
            borderWidth:3,
            borderColor:'#C5C8D8'
        }
    }
)