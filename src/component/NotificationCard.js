import React from 'react';
const {width, height} = Dimensions.get('window')
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';


const NotificationCard = (props) => {
    console.log('Props notificastion card>>>> ' , props)
    const {title, body, createdAt, notificationType} = props.data

    const NotificationIconType = (item) => {
        if('moments' == item){
            return  require('../../assets/Shave.png')        
        }
        else if(item == 'promoCode'){
            return  require('../../assets/bot-1.png')
        }
        else if(item == 'triggerAppointment'){
            return  require('../../assets/bot-2.png')
        }
        else if(item == 'addAppointment'){
            return require('../../assets/Spa.png')
        }
        else if(item == 'cancelAppointment'){
            return require('../../assets/scisor-icon.png')
        }
        else if(item == 'postponeAppointment'){
            return require('../../assets/user.png')
        }
        else if(item == 'triggerTip'){
            return require('../../assets/congrats-check.png')
        }
        else if(item == 'general'){
            return require('../../assets/BeardTrim.png')
        }
    }
    
    return (
    
            <View style={styles.cardContainer}> 
            <View style={{justifyContent:'space-between', flexDirection: 'row', paddingTop: 15, paddingHorizontal: 15,}}>
                <Text style={{color: 'gray'}}>{createdAt.slice(0, 10)}</Text>
                <Text style={{color: 'gray'}}>{createdAt.slice(11, 18)}</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 15, width: 250}}>
                <View style={styles.NotificationIcon}>
                    <Image style={{width: 60, height: 60}}  source={NotificationIconType(notificationType)} />
                </View>
                <View>
                    <Text style={{fontSize: 20,}}>{title}</Text>
                    <Text style={{fontSize: 15, marginTop: 8, color: 'gray'}}>{body}</Text>
                </View>
            </View>
               
            </View>

           
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 5,
        marginBottom: 12,
        width: 330,
    },
    NotificationIcon:{
        marginRight: 10,
    }
})

export default NotificationCard