import React from 'react'
import { View , Text , Switch ,TouchableOpacity} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'


const NotificationSettings = () =>{

    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row' , marginHorizontal:20 , marginTop:35}}>
                <AntIcon name='arrowleft' size={25}/>
            </View>

            <View style={{marginTop:20 , marginHorizontal:20}}>
                <Text style={{fontFamily:'AbrilFatFace' , fontSize:30}}>
                    Notification Settings
                </Text>
            </View>

            <View style={{marginTop:30 , marginHorizontal:20 , flexDirection: 'row' , justifyContent:'space-between'}}>

                <Text style={{fontSize:15 , fontFamily:'ExoRegular'}}>
                    Allow Notifications
                </Text>

                <View>
                    <Switch />
                </View>

            </View>
        </View>
    )
}

export default NotificationSettings;