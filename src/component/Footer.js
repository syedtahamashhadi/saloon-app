import React from 'react'
import {View , TouchableOpacity , StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import FontistoIcon from 'react-native-vector-icons/MaterialIcons'
import FooterBar from './FooterBar'

const Footer = (props) =>{

    console.log('Footer Props >>' , props)

    const  [markerVisible,setMarkerVisible] = React.useState(true)

    const setLeftVisiblity = (val) =>{
        setMarkerVisible(val)
        // alert('Test')
        console.log('I am fired >>>')
    }

    return(
        // <View style={{width:'100%'}}>
            <View style={styles.footer}>
                <TouchableOpacity onPress={props.handLocPress}>
                    {markerVisible ? <View style={styles.markerContainer}>
                        <Icon name='map-marker' size={30} />
                    </View> : null }
                </TouchableOpacity> 
            
                    <View style={{alignItems:'flex-end'}}>
                        <FooterBar setLeftVisiblity={setLeftVisiblity} nav={props.nav}/>
                        {/* <Text>TEst</Text> */}
                    </View>
            </View>
        // {/* </View> */}

    )
}

export default Footer ;

const styles = StyleSheet.create(
    {
        nextPage:{
            width:60,
            height:50,
            backgroundColor:'blue',
            borderTopLeftRadius:25,
            borderBottomLeftRadius:25,
            justifyContent:'center',
            alignItems:'center',
            // elevation:15,
        },
        footer:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginVertical:20,
            marginLeft:20,
            alignItems:'center'
        },
        markerContainer:{
            borderRadius:40 , 
            backgroundColor:'#fff' , 
            width:40 ,
            height:40 ,
            justifyContent:'center',
            alignItems:'center',
            elevation:5,
            
            // backgroundColor:'red'
        },
        
    }
)