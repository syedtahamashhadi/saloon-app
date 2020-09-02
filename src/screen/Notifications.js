import React from 'react'
import { View , Text , ScrollView, StyleSheet , TouchableOpacity } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FooterBar from '../component/FooterBar'
import Queries from '../appolo/queries'
import { useLazyQuery } from '@apollo/react-hooks'
import AsyncStorage from '@react-native-community/async-storage'

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

    return(
        <View style={styles.container}>

            <View style={{marginHorizontal:20 , marginTop:50}}>

                <View style={{flexDirection:'row' , justifyContent:'space-between' , backgroundColor:'#fff' , alignItems:'center'}}>
                    <Text style={{fontFamily:'AbrilFatFace' , fontSize:30 }}>
                        Notifications
                    </Text>
                    <View style={styles.settingIconContainer}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('NotificationSettings')}>
                            <AntIcon name='setting' size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginTop:60}}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                    </ScrollView>
                </View>
               
                

            </View>
            <View style={{marginTop:'100%'}}>
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
    }
)

export default Notifications;