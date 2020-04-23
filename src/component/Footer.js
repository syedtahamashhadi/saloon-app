import React from 'react'
import {View , TouchableOpacity , StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import FontistoIcon from 'react-native-vector-icons/MaterialIcons'

const Footer = () =>{


    return(
        <View style={styles.footer}>
            <TouchableOpacity>
                <View style={styles.markerContainer}>
                    <Icon name='map-marker' size={30} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.nextPage}>
                    <FontistoIcon name='compare-arrows' size={40} style={{color:'#fff',fontWeight:'bold'}}/>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default Footer ;

const styles = StyleSheet.create(
    {
        nextPage:{
            width:50,
            height:40,
            backgroundColor:'blue',
            borderTopLeftRadius:20,
            borderBottomLeftRadius:20,
            justifyContent:'center',
            alignItems:'center'
        },
        footer:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginVertical:20,
            marginLeft:20,
        },
        markerContainer:{
            borderRadius:40 , 
            backgroundColor:'green' , 
            width:40 ,
            height:40 ,
            justifyContent:'center',
            alignItems:'center'
        },
        
    }
)