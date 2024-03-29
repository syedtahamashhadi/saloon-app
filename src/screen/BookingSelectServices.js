import React from 'react'
import { View , Text ,StyleSheet , TouchableOpacity , ScrollView } from 'react-native'
import Image from 'react-native-remote-svg'
import AntIcon from 'react-native-vector-icons/AntDesign'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import Button from '../component/Button'
import { selectedServiceBookingSuccess } from '../redux/authenticate/actions'
import { connect } from 'react-redux'
import GestureRecognizer from 'react-native-swipe-gestures'





const BookingSelectServices = (props) =>{

    const { data } = props.selectedStylist
    const { services } = props.selectedStylist.data

    const [pageView,setPageView] = React.useState(3.5)
    // const [selectedService,setSelectedService] = React.useState([])
    const [selectedService,setSelectedService] = React.useState(null)



    // let serviceArr = []


    const handlePageView = () =>{
        pageView==3.5 ? setPageView(1) : setPageView(3.5)
    }

    const handleNextButton = () =>{
        if(selectedService){
            props.selectService(selectedService)
            props.navigation.navigate('PickDate')
        }

    }

    const handleServicePress = (val) =>{
        // let newselectedService = selectedService;
        // newselectedService.push(val);
        // setSelectedService(newselectedService)
        setSelectedService(val)
    }

    const onSwipeUp = () =>{
        setPageView(1)
    }


    const onSwipeDown = () =>{
        setPageView(3.5)
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    const serviceData = [  {icon:require('../../assets/scisor-icon.png'),name:'Hair Cut'},
                            {icon:require('../../assets/blade-icon.png'),name:'Shave'},
                            {icon:require('../../assets/trimmer-icon.png'),name:'Beard Trim'},
                            {icon:require('../../assets/blade-icon.png'),name:'Shave'},
                            {icon:require('../../assets/scisor-icon.png'),name:'Hair Cut'},
                        ]
    return(
        <View style={styles.container}>

            <View style={{flex:pageView, backgroundColor:'#fff' }}>
                
                <View style={{flexDirection:'row',marginTop:35,marginHorizontal:20}}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                            <AntIcon name='arrowleft' size={25}/>
                    </TouchableOpacity>
                </View>

                
               
                <View style={{flexDirection:'row' , marginTop:30, justifyContent:'space-between' , backgroundColor: '#fff'}}>
                    <TouchableOpacity onPress={()=>{}} style={{justifyContent:'center'}}>
                        <View style={{marginLeft:20 , justifyContent:'center'}}>
                            <View style={{position:'absolute',width:'100%',zIndex:9999,}}>
                                <View style={{width:9,height:9,borderRadius:5,backgroundColor:'#49D3CE'}}></View>
                            </View>
                            <SimpleIcon name='handbag' size={20}/>
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
                            <Text style={{fontFamily:'ExoBold' , color:'#fff'}}>22 mins</Text>
                        </View>
                    </View>

                </View>
                <View style={{flexDirection:'row',justifyContent:'center' , alignItems:'center'}}>
                    {/* <Text style={{marginTop:'-10%'}}>Test</Text> */}
                    <View style={{backgroundColor:'#fff' ,marginTop:'-12%' , alignItems:'center'}}>
                        <View style={{height:60,width:60,borderRadius:40,backgroundColor:'#F1F3F8',
                                        borderWidth:3,borderColor:'#fff',elevation:5 }}>
                            <Image source={{ uri: data.profileImageURL }} style={styles.imgMannager}/>
                        </View>
                        
                        <Text style={{fontSize:16,marginTop:10,fontFamily:'ExoBold'}}>
                            {`${data.firstName} ${data.lastName}`}
                        </Text>
                        <Text style={{fontSize:14,marginTop:5,fontFamily:'ExoRegular'}}>
                            {`${data.rating.toFixed(1)} star / ${data.ratingCounter} reviews`}
                        </Text>

                    </View>
                </View>

            </View>

            <GestureRecognizer
                onSwipeUp={()=>onSwipeUp()}
                onSwipeDown={()=>onSwipeDown()}
                config={config}
                style={{flex:6.5 , borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'#fff' ,elevation:20}}
            >


            {/* <View style={{flex:6.5 , borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'#fff' ,elevation:20}}> */}

                    <TouchableOpacity  onPress={()=>handlePageView()}
                                style={{flexDirection:'row', justifyContent:'center',marginTop:10}}>
                        <View style={{height:20,width:60}}>
                            <View style={{width:60,height:2,backgroundColor:'#49D3CE'}}></View>
                        </View>
                    </TouchableOpacity>

                    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >
                        <View style={{flexDirection:'row' , marginTop:25,marginHorizontal:10 , height:77}}>
                            {
                                services.map((val,index)=>{
                                    let myColor =  (selectedService && val.name==selectedService.name) ? '#49D3CE' : null
                                    let myBorderColor = (selectedService && val.name==selectedService.name) ? '#49D3CE' : '#fff'

                                    return(
                                        <TouchableOpacity onPress={()=>handleServicePress(val)} key={index} >

                                        <View style={{height:77,width:90,backgroundColor:'#fff',alignItems:'center'}}>
                                                <View style={{height:55,width:55,borderRadius:40,backgroundColor:'#F1F3F8',
                                                borderWidth:3,borderColor: myBorderColor,elevation:5}}>
                                                    <Image source={{uri : val.serviceIcon}} style={styles.imgMannager}/>
                                                </View>
                                                <Text style={{color:myColor,marginTop:'4%'}}>
                                                    {val.name.length>15 ? val.name.slice(0,12) : val.name}
                                                </Text>
                                        </View>
                                        </TouchableOpacity>


                                    )
                                })
                            }
                        </View>
                    </ScrollView>

                    <View style={{marginTop:20 , marginHorizontal:20}}>
                        <Button title='Next' btnColor='#49D3CE' handleButton={handleNextButton}/>
                    </View>

            {/* </View> */}

            </GestureRecognizer>


        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        selectedStylist: state.selectedStylistBookingReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        selectService: (data) => dispatch(selectedServiceBookingSuccess(data))
    }
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

export default connect(mapStateToProps,mapDispatchToProps)(BookingSelectServices) ;