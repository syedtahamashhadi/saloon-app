import React from 'react'
import { View , Text , ScrollView, StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Notifications = (props) =>{


    return(
        <View style={styles.container}>

            <View style={{marginHorizontal:20 , marginTop:50}}>

                <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
                    <Text style={{fontFamily:'AbrilFatFace' , fontSize:30}}>
                        Notifications
                    </Text>
                    <View style={styles.settingIconContainer}>
                        <TouchableOpacity onPress={()=>console.log('Settings is Pressed...')}>
                            <AntIcon name='setting' size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginTop:60}}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                    </ScrollView>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        },
        settingIconContainer:{
            width:35,
            height:35,
            borderRadius:20,
            backgroundColor:'#fff',
            elevation:5,
            justifyContent:'center',
            alignItems:'center'
        },
    }
)

export default Notifications;