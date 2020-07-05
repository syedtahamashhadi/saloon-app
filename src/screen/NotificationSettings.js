import React from 'react'
import { View , Text , TouchableOpacity} from 'react-native'
import { Switch } from 'react-native-switch'
import AntIcon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-community/async-storage'


const NotificationSettings = () =>{

    const [value,setValue] = React.useState(false)

    const checkNotifcationStorage = async () =>{
        try {
            let notification = await AsyncStorage.getItem('@KOMB_NOTIFICATION')
            console.log('Notification Storage >>' , notification)
            if(notification == 'allowed'){
                setValue(true)
            }
        } catch (error) {
            null
        }
    }

    React.useEffect(()=>{
        checkNotifcationStorage()
    },[])

    const handleSwitch = async() =>{
        setValue(prevState => !prevState)
        const currentState = value == true ? 'denied' : 'allowed'
        try {
            await AsyncStorage.setItem('@KOMB_NOTIFICATION',currentState)
        } catch (error) {
            console.log('Errror >>>' , error)
        }       
    }

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

                <Text style={{fontSize:17 , fontFamily:'ExoBold'}}>
                    Allow Notifications
                </Text>

                <View>
                    <Switch 
                        value={value}
                        backgroundActive={'#49D3CE'}
                        backgroundInactive={'#C5C8D8'}
                        activeText={''}
                        inActiveText={''}
                        disabled={false}
                        onValueChange={()=>handleSwitch()}
                        changeValueImmediately={true}
                        switchLeftPx={2}
                        switchRightPx={2}
                    />
                </View>

            </View>
        </View>
    )
}

export default NotificationSettings;