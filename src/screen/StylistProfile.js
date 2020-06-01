import React from 'react'
import {View ,Text , StyleSheet , TouchableOpacity , Image, ScrollView} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { Avatar } from 'react-native-elements'
import Rating from '../component/Rating'


const StylistProfile = (props) =>{

    console.log('Stylist Profile Props >>>' , props)
    const { stylist } = props.route.params

    const handleBackPress = () =>{
        console.log('Back is Pressed')
    }
    const handleHeartPress = () =>{
        console.log('Heart is Pressed')
    }
    const handlePhotoPress = () =>{
        console.log('Photo is Pressed')
    }
    return(
        <View style={styles.container}>
            
            <View style={{marginHorizontal:20}}>
                <View style={{flexDirection:"row",justifyContent:'space-between',top:30}}>
                    <TouchableOpacity onPress={handleBackPress}>
                        <AntIcon name='arrowleft' size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleHeartPress}>
                        <View style={styles.heartContainer}>
                            <AntIcon name='heart' size={23} color='#FA7268' style={{padding:9}}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center'}}>
                    <View style={styles.stylistAvatarContainer}>
                        <Avatar rounded source={{uri: stylist.profileImageURL}} size={55}/>
                    </View>
                        <Text style={{marginTop:5 , fontSize:25 , textAlign:'center'}}>{stylist.name}</Text>
                    <View style={{marginTop:12}}>
                        <Rating rating={stylist.rating}/>
                    </View>
                </View>
            </View>

            

            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:15,marginHorizontal:20}}>
                
                <View style={{height:230 , flexDirection:'row' ,
                                justifyContent:'space-between'}}>
                    <View style={{backgroundColor:'blue' ,height:'100%', width:'55%' , borderRadius:20}}>
                        <Image source={require('../../assets/shop-1.png')} style={styles.shopImage}/>
                    </View>
                    <View style={{width:'43%' , flexDirection:'column' , justifyContent:'space-between'}}>
                        <View style={{backgroundColor:'green' ,height:'48%', width:'100%' , borderRadius:20}}>
                            <Image source={require('../../assets/shop-2.png')} style={styles.shopImage}/>
                        </View>
                        <TouchableOpacity onPress={handlePhotoPress} 
                                    style={{height:'48%', width:'100%' , borderRadius:20}}>
                            <View style={{backgroundColor:'#19479c' ,opacity:0.6,height:'100%', width:'100%' , 
                            borderRadius:20,position:'absolute',zIndex:999,
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:25,color:'#fff',marginHorizontal:10,textAlign:'center'
                                    ,opacity:1}}>
                                    See Photos
                                </Text>
                            </View>
                            <Image source={require('../../assets/shop-2.png')} style={styles.shopImage}/>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={{flexDirection:'row', marginTop:20 ,alignItems:'center'}}>
                    <View style={styles.avatarsContainer}>
                        <View style={{borderRadius:40,borderWidth:3,borderColor:'white',elevation:5}}>
                            <Avatar rounded source={require('../../assets/stylist-5.png')}/>
                            
                            <View style={styles.avatarRow}>
                                <Avatar rounded source={require('../../assets/stylist-3.png')}/>
                                <View style={styles.avatarRow}>
                                    <Avatar rounded source={require('../../assets/stylist-4.png')}/>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    <View style={{marginHorizontal:75}}>
                        <Text style={{fontSize:15,color:'grey'}}>like this stylist</Text>
                    </View>
                </View>

                <View style={styles.servicesContainer}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{height:45,width:45,borderRadius:40,backgroundColor:'red'}}>
                            <Image source={require('../../assets/services-icon.png')} style={styles.shopImage}/>
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center' ,marginLeft:10}}>
                            <Text style={{fontSize:25}}>Services</Text>
                        </View>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <View style={{flexDirection:'row',marginTop:15,marginLeft:55}}>
                        <View style={{height:45,width:45,borderRadius:40,backgroundColor:'red',marginRight:20}}>
                            <Image source={require('../../assets/scisor-icon.png')} style={styles.shopImage}/>
                        </View>
                        <View style={{height:45,width:45,borderRadius:40,backgroundColor:'red',marginRight:20}}>
                            <Image source={require('../../assets/blade-icon.png')} style={styles.shopImage}/>
                        </View>
                        <View style={{height:45,width:45,borderRadius:40,backgroundColor:'red',marginRight:20}}>
                            <Image source={require('../../assets/trimmer-icon.png')} style={styles.shopImage}/>
                        </View>
                    </View>

                    </ScrollView>
                    
                </View>

                <View style={styles.servicesContainer}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{height:45,width:45,borderRadius:40,backgroundColor:'red'}}>
                            <Image source={require('../../assets/bentalstilk-icon.png')} 
                                style={styles.shopImage}/>

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
                            <Image source={require('../../assets/workingHours-icon.png')} 
                                    style={styles.shopImage}/>
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
            // marginHorizontal:20,
            backgroundColor:'#fff'
        },
        heartContainer:{
            width:40,
            height:40,
            borderRadius:20,
            backgroundColor:'#fff',
            shadowColor:'white',
            shadowOpacity:0.8,
            elevation:5,
        },
        stylistAvatarContainer:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:30,
            borderRadius:40,
            borderColor:'#fff',
            borderWidth:3,               //Need Tooo Apply
            elevation:5,
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
            top:-3,
            elevation:5,
        },
        servicesContainer:{
            marginVertical:15
        },
        shopImage:{
            resizeMode:'cover',
            height:'100%',
            borderRadius:20,
            width:'100%'
        }
    }
)
