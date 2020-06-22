import React from 'react'
import {View , Text , StyleSheet , ScrollView ,TouchableOpacity,Image} from 'react-native'
// import Heading from './Heading'
import { Avatar } from 'react-native-elements'
import Button from '../../component/Button'


const GuestSaloonInfo = (props) =>{
    console.log('Saloon Info Props >>' , props)

    // const { stylist , services , portfolioImg } = props.route.params

    const [selectedCrew,setSelectedCrew] = React.useState('')
    const [selectedService,setSelectedService] = React.useState('')
    

    const crewData = [  {icon:require('../../../assets/stylist-1.png'),name:'Matt'},
                        {icon:require('../../../assets/stylist-2.png'),name:'Sherry'},
                        {icon:require('../../../assets/stylist-3.png'),name:'Linda'},
                        {icon:require('../../../assets/stylist-4.png'),name:'Dillan'},
                        {icon:require('../../../assets/stylist-5.png'),name:'Kelly T.'},
                    ]

    const serviceData = [  {icon:require('../../../assets/scisor-icon.png'),name:'Hair Cut'},
                            {icon:require('../../../assets/blade-icon.png'),name:'Shave'},
                            {icon:require('../../../assets/trimmer-icon.png'),name:'Beard Trim'},
                            {icon:require('../../../assets/blade-icon.png'),name:'Shave'},
                            {icon:require('../../../assets/scisor-icon.png'),name:'Hair Cut'},
                        ]
    
    const handleStylistPress = (val)=>{
        console.log('Stylist is pressed >>',val)
        setSelectedCrew(val.name)
        props.nav.navigation.navigate('GuestStylistProfile')
    }

    const handleBooking = () =>{
        console.log('Booking is Pressed')
        props.nav.navigation.navigate('GuestBookingSelectStylist')
    }

    return(
        <View style={{width:'100%'}}>
            {/* <View > */}
                <View>
                    <Text style={{marginTop:15,fontSize:25,fontFamily:'AbrilFatFace'}}>Our Crew</Text>
                    
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={{marginTop:15,flexDirection:'row',marginHorizontal:-20}}>

                        {
                            crewData.map((val,index)=>{
                                let myColor = val.name == selectedCrew ? '#49D3CE' : null
                                let myBorderColor = val.name == selectedCrew ? '#49D3CE' : '#fff'
                                return(

                                    <TouchableOpacity onPress={()=>handleStylistPress(val)} key={index}>

                                        <View style={{height:67,width:90,backgroundColor:'#fff',alignItems:'center'}}>
                                            <View style={{height:48,width:48,borderRadius:40,backgroundColor:'#C5C8D8',
                                            borderWidth:3,borderColor:myBorderColor,elevation:5}}>
                                                <Image source={val.icon} style={styles.imgMannager}/>
                                            </View>
                                            <Text style={{color:myColor,fontFamily:'ExoRegular'}}>
                                                {val.name.length>15 ? val.name.slice(0,12) : val.name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })

                        }

                        </View>

                    </ScrollView>
                </View>
                    
                <View >
                    <Text style={{marginTop:15,fontSize:25,fontFamily:'AbrilFatFace'}}>Our Service</Text>
                    
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={{marginTop:15,flexDirection:'row',marginHorizontal:-20,justifyContent:'space-between'}}>

                        {
                            serviceData.map((val,index)=>{
                                let myColor = null
                                let myBorderColor = '#fff'
                                return(

                                    // <TouchableOpacity onPress={()=>setSelectedService(val.name)} key={index}>

                                        <View style={{height:67,width:90,backgroundColor:'#fff',alignItems:'center'}}>
                                            <View style={{height:48,width:48,borderRadius:40,backgroundColor:'#C5C8D8',
                                            borderWidth:3,borderColor:myBorderColor,elevation:5}}>
                                                <Image source={val.icon} style={styles.imgMannager}/>
                                            </View>
                                            <Text style={{color:myColor,fontFamily:'ExoRegular'}}>
                                                {val.name>15 ? val.name.slice(0.13) : val.name}
                                            </Text>
                                        </View>
                                    // </TouchableOpacity>
                                )
                            })

                        }

                        </View>

                    </ScrollView>
                    
                </View>
                    
            
            {/* </View> */}
            <View style={{marginTop:15,backgroundColor:'#fff'}}>
                <Button title='Book Now' btnColor='#49D3CE' handleButton={handleBooking}/>
            </View>
                        
            
        </View>
    )
}

export default GuestSaloonInfo;


const styles = StyleSheet.create(
    {
        avatarContainer:{
            flexDirection:'row',
            // justifyContent:'space-between',
            flexWrap:'wrap',
            // flexGrow:20
        },
        avatar:{
            alignItems:'center',
            justifyContent:'center' ,
            height:53,
            width:53,
            borderRadius:40,
            backgroundColor:'#C5C8D8',
            marginRight:27,
            marginVertical:20,
            // marginEnd:0,
        },
        heading:{
            color:'#1D194D' , 
            // fontFamily:'Abril Fatface' , 
            fontSize:27,
        },
        imgMannager:{
            resizeMode:'cover',
            height:'100%',
            width:'100%',
            borderRadius:40,
        },
    }
)