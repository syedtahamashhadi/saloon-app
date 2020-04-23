import React from 'react'
import {View , Text , StyleSheet ,TouchableOpacity ,Image , Dimensions} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { Avatar } from 'react-native-elements'


const Chat = () =>{

    return(
        <View style={{backgroundColor:'#fff' , flex:1}}>
            <View style={{flex:3.5 , backgroundColor:'#fff', marginHorizontal:20}}>
                <View style={{flexDirection:"row" , justifyContent:'space-between' , top:35 }}>
                        <TouchableOpacity onPress={()=>console.log('Back Button is Pressed...')}>
                            <AntIcon name="arrowleft" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>console.log('Heart is Pressed..')}>
                            <FeatherIcon name="shopping-bag" size={22} color="black" />
                            <View style={styles.badge}>
                                <Text style={{alignItems:'center',fontSize:12}}>5</Text>
                            </View>
                        </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row',top:60,height:100}}>
                    <View style={{justifyContent:'flex-end',marginRight:10}}>
                        <Avatar rounded source={require('../../assets/cat.jpg')} size={55}/>
                    </View>
                    <View style={styles.messageContainer}>
                        <Text style={{marginVertical:18,marginHorizontal:20 , fontSize:18}}>
                            Hey, time to choose a speacilist you need and a service you want
                        </Text>
                    </View>
                </View>
            </View>
           
            <View style={{flex:6.5 , backgroundColor:'#fff'}}>
                <View style={{height:150,backgroundColor:'#fff'}}>
                    <Image source={require('../../assets/barber-shave.jpg') } style={styles.image}/>
                    <View style={styles.imageOverLay}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View>
                                <Text style={{fontSize:35,color:'#fff',fontWeight:'bold'}}>Toni&Guy</Text>
                            </View>
                            <View style={{justifyContent:'flex-end'}}>
                                <View style={styles.seprator}>
                                    <Text style={styles.sepratorText}>
                                        22mins
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:5}}>
                            <Text style={{color:'white',fontSize:16}}>Book and experience our stylist</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginHorizontal:20}}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.stylistAvatarContainer}>
                            <Avatar rounded source={require('../../assets/cat.jpg')} size={55}/>
                        </View>
                        <View style={{marginTop:2}}>
                            <Text style={{fontSize:30}}>Matt Perry</Text>
                        </View>
                        <View style={{marginTop:2}}>
                            <Text style={{fontSize:18}}>5 star / 85 reviews</Text>
                        </View>
                    </View>
                </View>

                <View style={{marginVertical:20 , marginHorizontal:20}}>
                    <Text style={{fontSize:25}}>Choose a service</Text>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <View style={styles.servicesIconContainer}>
                            <View style={{height:65,width:65,borderRadius:40,backgroundColor:'red' }}>
                            </View>
                            <Text style={{fontSize:18}}>Shave</Text>
                        </View>
                        <View style={styles.servicesIconContainer}>
                            <View style={{height:65,width:65,borderRadius:40,backgroundColor:'red' }}>
                            </View>
                            <Text style={{fontSize:18}}>HairCut</Text>
                        </View>
                        <View style={styles.servicesIconContainer}>
                            <View style={{height:65,width:65,borderRadius:40,backgroundColor:'red' }}>
                            </View>
                            <Text style={{fontSize:18}}>Beard Trim</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const Stylist = () =>{


    return(
        <Chat/>
    )
}

export default Stylist;

const styles= StyleSheet.create(
    {
        servicesIconContainer:{
            width:100,
            height:70,
            // backgroundColor:'green',
            alignItems:'center',
            // marginRight:20
        },
        stylistAvatarContainer:{
            marginTop:-25,
            borderRadius:40,
            borderWidth:3,
            borderColor:'#fff'
        },
        seprator:{
            width:100,
            height:35,
            backgroundColor:'#FA7268',
            borderRadius:20,
        },
        sepratorText:{
            marginVertical:5,
            marginLeft:10, 
            fontSize:17,
            color:'white'
        },
        badge:{
            position:'absolute' , 
            // zIndex:9999,
            height:12,
            width:12,
            borderRadius:40,
            // top:10,
            left:12,
            backgroundColor:'#49D3CE'
        },
        messageContainer:{
            width:'80%',
            backgroundColor:'#f5f9ff',
            borderTopLeftRadius:12,
            borderTopRightRadius:12,
            borderBottomRightRadius:12,
        },
        image:{
            resizeMode:'cover',
            height:'100%',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            width:'100%'
        },
        imageOverLay:{
            position:'absolute',
            marginLeft:20,
            marginVertical:30,
            width:Dimensions.get("window").width
        }
    }
)
