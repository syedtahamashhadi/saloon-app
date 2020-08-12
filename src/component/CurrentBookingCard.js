import React from 'react'
import {View , Text , StyleSheet ,ScrollView , TouchableOpacity } from 'react-native'
import Image from 'react-native-remote-svg'

import AntIcon from 'react-native-vector-icons/AntDesign'

const CurrentBookingCard = (props) =>{
   
    const convertingMonth = (month) =>{
        switch (parseInt(month)) {
            case 1: return 'Jan'
            case 2: return 'Feb'
            case 3: return 'Mar'
            case 4: return 'Apr'
            case 5: return 'May'
            case 6: return 'Jun'
            case 7: return 'Jul'
            case 8: return 'Aug'
            case 9: return 'Sep'
            case 10: return 'Oct'
            case 11: return 'Nov'
            case 12: return 'Dec'
        }
    }
    console.log('Props test>>' , props)
    // const d = new Date()
    const date = props.detail.appointmentDateTime.slice(6,10)
    const time = props.detail.appointmentDateTime.slice(14,19)
    const month = date.slice(0,1)

    return(
        <TouchableOpacity onPress={()=>props.nav.navigate('BookingDetail',
                                                            {
                                                                style: props.detail.services[0].name,
                                                                amount: props.detail.amount,
                                                                dateTime: `${date.slice(2,4)} ${convertingMonth(month)}, ${time} PM`,
                                                                stylist: props.detail.serviceProvider,
                                                                salon: props.detail.salon,
                                                                appointmentId: props.detail._id ,
                                                                serviceIcon: props.detail.services[0].serviceIcon
                                                            }
                                                            )}>

            <View style={styles.bookingCardContainer}>
                <View style={styles.bookingContentContainer}>
                    <View style={{width:55,height:55,borderRadius:50,backgroundColor:'#fcfcfc',
                                    marginBottom:10}}>
                        <Image source={{ uri :  props.detail.services[0].serviceIcon}} style={styles.image}/>
                    </View>
                    
                  
                <View style={{width:'74.5%',height:60,backgroundColor:'#fcfcfc',marginLeft:10,flexDirection:'column'}}>
                    <View style={{flexDirection:'row' , justifyContent:'space-between',flex:1,backgroundColor:'#fcfcfc'}}>
    <Text style={{fontSize:17,fontFamily:'ExoBold'}}>{props.detail.services[0].name}</Text>
                        <Text style={{fontSize:17,fontFamily:'ExoBold'}}>{`£ ${props.detail.amount}`}</Text>
                    </View>

                    <View style={{flexDirection:'row' , justifyContent:'space-between',marginBottom:14}}>
                        <Text style={{fontSize:13,fontFamily:'ExoRegular'}}>Afro Style</Text>
                        <View style={{flexDirection:'row'}}>

                            {/* <View style={styles.blink}></View> */}
                            <AntIcon name='clockcircleo' size={14} style={styles.blink}/>
                            <Text style={{fontSize:13,fontFamily:'ExoBold',opacity:0.6}}>
                                {`${date.slice(2,4)} ${convertingMonth(month)}, ${time} PM`}
                            </Text>

                        </View>

                    </View>

                </View>
                </View>
                <View style={{width:'100%',height:2,borderWidth:1,borderStyle:'dashed',borderColor:'grey',
                                marginTop:'1.5%',marginBottom:0,borderRadius:5,opacity:0.3 , position:'relative'}}>

                </View>
                
            </View>
                
        </TouchableOpacity>
    )
}

export default CurrentBookingCard;

const styles = StyleSheet.create(
    {
        bookingCardContainer:{
            width:'100%',
            height:110,
            backgroundColor:'#fcfcfc',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,  
            marginBottom:20,
            paddingLeft:3,
            paddingRight:3,
            elevation:5,
            // borderWidth:0.1
        },
        cardBottom: {
            borderColor: 'lightgray',
            borderWidth: 2,
            borderRadius: 5,
            borderStyle: 'dashed',
            position: 'relative',
            bottom: -16,
        },
        bookingContentContainer:{
            flexDirection:'row',
            width:'100%',
            height:'85%',
            marginTop:10,
            justifyContent:'center',
            alignItems:'center',  
            backgroundColor:'#fcfcfc'   
        },
        image:{
            resizeMode:'cover',
            height:'100%',
            width:'100%',
            // borderRadius:50
        },
        blink:{
            width:17,
            height:17,
            borderRadius:17,
            // backgroundColor:'#C5C8D8',
            top:2,
            marginRight:5,
        }
        
    }
)