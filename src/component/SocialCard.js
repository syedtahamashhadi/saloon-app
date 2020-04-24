import React from 'react'
import {View , Image , StyleSheet, TouchableOpacity} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'

const SocialCard = (props) =>{

    const [link,setLink] = React.useState('')
    const settingValues = (icon) =>{
        switch (icon) {
            case 'twitter':
                return  <AntIcon name='twitter' size={20} color='#FFF'/>
            case 'facebook':
                return  <AwsomeIcon name='facebook' size={20} color='#FFF'/>     
            case 'google':
                return <AntIcon name='google' size={20} color='#FFF'/>
            default:
                return <AwsomeIcon name='facebook' size={20} color='#FFF'/>
        }
    }

    const handlePress = async () =>{
        // await setLink(socialLink)
        console.log('Social Link >',link)
    }
    return(
        // <View style={styles.container}>
            <TouchableOpacity onPress={async ()=>{setLink(props.link) ; await handlePress()}}>
                <View style={{width:60,height:40,borderRadius:10,backgroundColor:props.bColor,justifyContent:'center'
                                ,alignItems:'center'}}>
                    {settingValues(props.icon)}
                </View>
            </TouchableOpacity>
        // </View>
    )
}

export default SocialCard;

const styles = StyleSheet.create(
    {
        // container:{
        //     flex:1,
        //     justifyContent:'center',
        //     alignItems:'center',
        //     backgroundColor:'#fff',
        //     elevation:120
        // }
    }
)