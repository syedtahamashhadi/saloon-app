import React from 'react'
import { View , Text , ScrollView, StyleSheet ,ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FooterBar from '../component/FooterBar'
import Queries from '../appolo/queries'
import { useLazyQuery } from '@apollo/react-hooks'
import AsyncStorage from '@react-native-community/async-storage'
const {height, width} = Dimensions.get('window') 
import NotificationCard from '../component/NotificationCard'
// import { TouchableOpacity } from 'react-native-gesture-handler'


const Notifications = (props) =>{

    const [getAllNotifications,{data,loading,error}] = useLazyQuery(Queries.GET_NOTIFICATIONS)

    React.useEffect(()=>{
        (async()=>{
            try {
                const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
                if(token !== null){
                    getAllNotifications(
                        {
                            context:{
                                headers:{
                                    authorization: token
                                }
                            }
                        }
                    )
                }
            } catch (error) {
                console.log('Token Errr >>' , error)
            }
        })()
    },[])

    React.useEffect(()=>{
        if(data){
            console.log('Data is >>' , data)
        }else if(error){
            console.log('Error is >>' , error)
        }
    },[data,error])
    console.log('Notification data', data)

    return(
        <View style={styles.container}>

            <View style={{marginTop: 50}}>
                <View style={{marginHorizontal: 20, flexDirection:'row', justifyContent:'space-between' , backgroundColor:'#fff' , alignItems:'center'}}>
                    <Text style={{fontFamily:'AbrilFatFace' , fontSize:30 }}>
                        Notifications
                    </Text>
                    <View style={styles.settingIconContainer}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('NotificationSettings')}>
                            <AntIcon name='setting' size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {!data 
                ? 
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#49D3CE" />
                </View>
                :
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.notificationContainer}>
                        {
                            data && data.getUserNotifications.reverse().map((item, index) => {
                                return(
                                    <NotificationCard data={item}/>
                                )
                            })
                        }
                    </View>       
                    </ScrollView>
            }
                                
            <View style={styles.notificationBottom}>
                <View style={{alignItems:'flex-end'}}>
                    <FooterBar nav={props.navigation}/>
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
        notificationContainer:{
            marginTop: 10,
            // justifyContent: 'space-around',
            alignItems: 'center'
        },
        notificationBottom:{
            position: 'absolute',
            bottom: 0,
            right: 0
        }
    }
)

export default Notifications;