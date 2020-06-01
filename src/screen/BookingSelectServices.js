import React from 'react'
import { View , Text ,StyleSheet , TouchableOpacity , ScrollView , Image } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Button from '../component/Button'



const BookingSelectServices = () =>{

    const [pageView,setPageView] = React.useState(3.5)
    const [selectedService,setSelectedService] = React.useState([])

    // let serviceArr = []


    const handlePageView = () =>{
        pageView==3.5 ? setPageView(1) : setPageView(3.5)
    }

    const handleNextButton = () =>{
        console.log('Button is Pressed')
    }

    const handleServicetPress = (val) =>{
        setSelectedService(selectedService.concat(val.name))
        console.log('Selected Service is >>',selectedService)

    }

    const serviceData = [  {icon:require('../../assets/scisor-icon.png'),name:'Hair Cut'},
                            {icon:require('../../assets/blade-icon.png'),name:'Shave'},
                            {icon:require('../../assets/trimmer-icon.png'),name:'Beard Trim'},
                            {icon:require('../../assets/blade-icon.png'),name:'Shave'},
                            {icon:require('../../assets/scisor-icon.png'),name:'Hair Cut'},
                        ]
    return(
        <View style={styles.container}>

            <View style={{flex:pageView, backgroundColor:'#fff' }}>
                <View style={{marginTop:35,marginHorizontal:20}}>
                    <AntIcon name='arrowleft' size={25}/>

                </View>
               
                <View style={{flexDirection:'row' , marginTop:30, justifyContent:'space-between' , backgroundColor: '#fff'}}>
                    <TouchableOpacity onPress={()=>{console.log('Back Button is Pressed')}} style={{justifyContent:'center'}}>
                        <View style={{marginLeft:20 , justifyContent:'center'}}>
                            <AntIcon name='arrowleft' size={25}/>
                        </View>
                    </TouchableOpacity>

                    {/* <View style={{backgroundColor:'red'}}>
                        <View style={{height:55,width:55,borderRadius:40,backgroundColor:'green',
                                        borderWidth:3,borderColor:'#fff',elevation:5 }}>
                            <Image source={require('../../assets/stylist-4.png')} style={styles.imgMannager}/>
                        </View>
                        
                    </View> */}
                    

                    <View style={{ justifyContent:'center'}}>
                        <View style={styles.seprator}>
                            <Text style={{fontWeight:'bold' , color:'#fff'}}>22 mins</Text>
                        </View>
                    </View>

                </View>
                <View style={{flexDirection:'row',justifyContent:'center' , alignItems:'center'}}>
                    {/* <Text style={{marginTop:'-10%'}}>Test</Text> */}
                    <View style={{backgroundColor:'#fff' ,marginTop:'-12%' , alignItems:'center'}}>
                        <View style={{height:60,width:60,borderRadius:40,backgroundColor:'green',
                                        borderWidth:3,borderColor:'#fff',elevation:5 }}>
                            <Image source={require('../../assets/stylist-4.png')} style={styles.imgMannager}/>
                        </View>
                        
                        <Text style={{fontSize:16,marginTop:10,fontWeight:'bold'}}>Matt Perry</Text>
                        <Text style={{fontSize:14,marginTop:5}}>5 star / 85 reviews</Text>

                    </View>
                </View>

            </View>

            <View style={{flex:6.5 , borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'#fff' ,elevation:20}}>

                    <TouchableOpacity  onPress={()=>handlePageView()}
                                style={{flexDirection:'row', justifyContent:'center',marginTop:0}}>
                        <View style={{height:20,width:60}}>
                            <View style={{width:60,height:2,backgroundColor:'#49D3CE'}}></View>
                        </View>
                    </TouchableOpacity>

                    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >
                        <View style={{flexDirection:'row' , marginTop:25}}>
                            {
                                serviceData.map((val,index)=>{
                                    let myColor =  selectedService.includes(val.name) ? '#49D3CE' : null
                                    let myBorderColor = selectedService.includes(val.name) ? '#49D3CE' : '#fff'

                                    return(
                                        <TouchableOpacity onPress={()=>handleServicetPress(val)} key={index}>

                                            <View style={{height:67,width:90,backgroundColor:'#fff',alignItems:'center'}}>
                                                <View style={{height:55,width:55,borderRadius:40,backgroundColor:'green',
                                                borderWidth:3,borderColor: myBorderColor,elevation:5}}>
                                                    <Image source={{uri : val.profileImageURL}} style={styles.imgMannager}/>
                                                </View>
                                                <Text style={{color:myColor}}>
                                                    {val.name.length>15 ? val.name.slice(0,12) : val.name}
                                                </Text>
                                            </View>

                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>

                    <View style={{marginTop:20}}>
                        <Button title='Next' btnColor='#49D3CE' handleButton={handleNextButton}/>
                    </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            width:'100%'
        },
        imgMannager:{
            resizeMode:'cover',
            height:'100%',
            width:'100%',
            borderRadius:40,
        },
        seprator:{
            width:70,
            height:35,
            backgroundColor:'#FA7268',
            // borderTopLeftRadius:20,
            borderBottomLeftRadius:20,
            justifyContent:'center',
            alignItems:'center'
        },
    }
)

export default BookingSelectServices ;