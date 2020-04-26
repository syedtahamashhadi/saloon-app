import React from 'react'
import {View , Text , StyleSheet ,TouchableOpacity ,Image , Dimensions, ScrollView} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { Avatar } from 'react-native-elements'
import Chat from '../component/Chat'
import Button from '../component/Button'


const Stylist = () =>{

    const [pageView,setPageView] = React.useState(3.5)
    const [selectedService,setSelectedService] = React.useState('')

    const servicesData = [{icon: require('../../assets/scisor-icon.png'),name:'HairCut'},
                        {icon: require('../../assets/blade-icon.png'),name:'Shave'},
                        {icon: require('../../assets/trimmer-icon.png'),name:'Beared Trim'},
                        {icon: require('../../assets/scisor-icon.png'),name:'HairCut'},
                        {icon: require('../../assets/trimmer-icon.png'),name:'Beared Trim'}]

    const handleButton = () =>{
        console.log('Button is Pressed')
    }

    return(
        <View style={{backgroundColor:'#fff' , flex:1}}>
            <View style={{flex:pageView , backgroundColor:'#fff', marginHorizontal:20}}>
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
          
                    <Chat desc='Hey, time to choose a speacilist you need and a service you want' />

                </View>
            </View>
           
            <View style={{flex:6.5 , backgroundColor:'#fff'}}>
                <View style={{height:150,backgroundColor:'#fff',width:'100%'}}>
                    <Image source={require('../../assets/barber-shave.jpg') } style={styles.image}/>
                    <View style={styles.imageOverLay}>
                        
                        
                        <TouchableOpacity  onPress={()=>{pageView==3.5 ? setPageView(1) : setPageView(3.5)}}
                        style={{flexDirection:'row', justifyContent:'center',marginTop:0}}>
                            <View style={{height:20,width:60}}>
                                <View style={{width:60,height:2,backgroundColor:'red'}}></View>
                            </View>
                        </TouchableOpacity>
                       
                        <View style={{marginTop:10,marginLeft:20}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{fontSize:35,color:'#fff',fontWeight:'bold'}}>TONI&GUY</Text>
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
                </View>
                <View style={{marginHorizontal:20}}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.stylistAvatarContainer}>
                            <Avatar rounded source={require('../../assets/stylist-1.png')} size={55}/>
                        </View>
                        <View style={{marginTop:2}}>
                            <Text style={{fontSize:30}}>Matt Perry</Text>
                        </View>
                        <View style={{marginTop:2}}>
                            <Text style={{fontSize:18}}>5 star / 85 reviews</Text>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:20 , marginHorizontal:20}}>
                    <Text style={{fontSize:25}}>Choose a service</Text>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={{flexDirection:'row', marginTop:10}}>
                            {
                                servicesData.map( (val,index)=>{
                                    console.log('Icon Vlaue is',val.icon)
                                    let myColor = val.name == selectedService ? '#49D3CE' : null
                                    return(
                                        <TouchableOpacity onPress={()=>setSelectedService(val.name)} key={index}>
                                            <View style={styles.servicesIconContainer} >
                                                <View style={{height:55,width:55,borderRadius:40,backgroundColor:'#49D3CE',elevation:5 }}>
                                                    <Image source={val.icon} style={styles.serviceImage}/>
                                                </View>
                                                <Text style={{fontSize:15,marginTop:5,color:myColor}}>{val.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                       
                                        
                                    )
                                })
                            }
                        </View>

                    </ScrollView>
                </View>

                <View style={{marginTop:10}}>
                <Button title='Next' handleButton={handleButton}/>

                </View>
            </View>
        </View>
    )
}



export default Stylist;

const styles= StyleSheet.create(
    {
        servicesIconContainer:{
            width:100,
            height:100,
            // backgroundColor:'green',
            alignItems:'center',
            justifyContent:'center'
            // marginRight:20
        },
        stylistAvatarContainer:{
            marginTop:-25,
            borderRadius:40,
            borderWidth:3,
            borderColor:'#fff',
            elevation:5,
        },
        seprator:{
            width:80,
            height:35,
            backgroundColor:'#FA7268',
            // borderRadius:20,
            borderTopLeftRadius:20,
            borderBottomLeftRadius:20,
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
        serviceImage:{
            resizeMode:'cover',
            height:'100%',
            borderRadius:40,
            width:'100%'
        },
        imageOverLay:{
            position:'absolute',
            // zIndex:999
            // marginLeft:20,
            // marginVertical:30,
            width:Dimensions.get("window").width
        }
    }
)
