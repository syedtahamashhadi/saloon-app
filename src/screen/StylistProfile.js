import React from 'react'
import {View ,Text , StyleSheet , TouchableOpacity , Image, ScrollView} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { Avatar } from 'react-native-elements'
import Rating from '../component/Rating'


const StylistProfile = () =>{

    return(
        <View style={styles.container}>

            <View style={{flexDirection:"row",justifyContent:'space-between',top:30}}>
                <TouchableOpacity onPress={()=>console.log('Back is pressed..')}>
                    <AntIcon name='arrowleft' size={25}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log('Heart is pressed..')}>
                    <View style={styles.heartContainer}>
                        <AntIcon name='heart' size={23} color='#FA7268' style={{padding:9}}/>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{alignItems:'center'}}>
                <View style={styles.stylistAvatarContainer}>
                    <Avatar rounded source={require('../../assets/cat.jpg')} size={55}/>
                </View>
                <Text style={{marginTop:0 , fontSize:35}}>Matt Perry</Text>
                <View style={{marginTop:12}}>
                    <Rating rating={4.5}/>
                </View>
            </View>

            <ScrollView style={{marginTop:25}}>
                
                <View style={{height:230 , flexDirection:'row' ,
                                justifyContent:'space-between'}}>
                    <View style={{backgroundColor:'blue' ,height:'100%', width:'55%' , borderRadius:20}}>
                        {/* <Image source={require('../../assets/cat.jpg')} style={{width:180 ,height:200}}/> */}
                    </View>
                    <View style={{width:'43%' , flexDirection:'column' , justifyContent:'space-between'}}>
                        <View style={{backgroundColor:'green' ,height:'48%', width:'100%' , borderRadius:20}}>

                        </View>
                        <View style={{backgroundColor:'green' ,height:'48%', width:'100%' , borderRadius:20}}>

                        </View>
                    </View>
                    
                </View>

                <View style={{flexDirection:'row', marginTop:20 ,alignItems:'center'}}>
                    <View style={styles.avatarsContainer}>
                        <View style={{borderRadius:40,borderWidth:3,borderColor:'white'}}>
                            <Avatar rounded source={require('../../assets/cat.jpg')}/>
                            
                            <View style={styles.avatarRow}>
                                <Avatar rounded source={require('../../assets/cat.jpg')}/>
                                <View style={styles.avatarRow}>
                                    <Avatar rounded source={require('../../assets/cat.jpg')}/>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    <View style={{marginHorizontal:75}}>
                        <Text style={{fontSize:15}}>like this stylist</Text>
                    </View>
                </View>

                <View style={styles.servicesContainer}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{height:45,width:45,borderRadius:40,backgroundColor:'red'}}>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center' ,marginLeft:10}}>
                            <Text style={{fontSize:25}}>Services</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:15,marginLeft:55}}>
                        <View style={{height:45,width:45,borderRadius:40,backgroundColor:'red',marginRight:20}}>
                        </View>
                        <View style={{height:45,width:45,borderRadius:40,backgroundColor:'red',marginRight:20}}>
                        </View>
                        <View style={{height:45,width:45,borderRadius:40,backgroundColor:'red',marginRight:20}}>
                        </View>
                    </View>
                </View>

                <View style={styles.servicesContainer}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{height:45,width:45,borderRadius:40,backgroundColor:'red'}}>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center' ,marginLeft:10}}>
                            <Text style={{fontSize:25}}>Bentastic Ben</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15,marginLeft:55}}>
                        <Text>
                            This is list of Itaian dishes and foods. Italian cuisine has developed
                            through centuries of social and political changes, with root as far back as...
                        </Text>
                    </View>
                </View>

                <View style={styles.servicesContainer}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{height:45,width:45,borderRadius:40,backgroundColor:'red'}}>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center' ,marginLeft:10}}>
                            <Text style={{fontSize:25}}>Working Hours</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15,marginLeft:55}}>
                        <Text>
                           Everyday (8am - 10pm)
                        </Text>
                    </View>
                </View>

            </ScrollView>
           
            

        </View>
    )
}

export default StylistProfile;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            marginHorizontal:20,
            backgroundColor:'#fff'
        },
        heartContainer:{
            width:40,
            height:40,
            borderRadius:20,
            backgroundColor:'blue',
            shadowColor:'white',
            shadowOpacity:0.8
        },
        stylistAvatarContainer:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:30,
            borderRadius:40,
            borderColor:'red',
            borderWidth:3               //Need Tooo Apply
        },
        avatarsContainer:{
            flexDirection:'row'
        },
        avatarRow:{
            borderRadius:40,
            borderWidth:3,
            borderColor:'white',
            position:'absolute',
            zIndex:999,
            left:30,
            top:-3
        },
        servicesContainer:{
            marginVertical:15
        }
    }
)
