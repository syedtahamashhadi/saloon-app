import React from 'react'
import { View , Text ,StyleSheet , TouchableOpacity , ScrollView , Image} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Chat from '../../component/Chat'



const GuestBookingSelectStylist = (props) =>{

    
    const [pageView,setPageView] = React.useState(3.5)
    const [selectedCrew,setSelectedCrew] = React.useState('')

    console.log('BookingSelectStylist Props >>' , props)

    console.log('Testing >>>>>>>>')
    const crewData = [  {icon:require('../../../assets/stylist-1.png'),name:'Matt'},
                        {icon:require('../../../assets/stylist-2.png'),name:'Sherry'},
                        {icon:require('../../../assets/stylist-3.png'),name:'Linda'},
                        {icon:require('../../../assets/stylist-4.png'),name:'Dillan'},
                        // {icon:require('../../assets/stylist-5.png'),name:'Kelly T.'},
                    ]
    const handleStylistPress = (val)=>{
        console.log('Stylist is pressed >>',val)
        setSelectedCrew(val)
        props.navigation.navigate('GuestBookingSelectServices')
       
    }

    const handlePageView= () =>{
        pageView==3.5 ? setPageView(1) : setPageView(3.5)
    }


    return(
        <View style={styles.container}>

        
                <View style={{flex:pageView, backgroundColor:'#fff' , marginHorizontal:20}}>
                    <View style={{flexDirection:'row' , marginTop:35 }}>
                        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                            <AntIcon name='arrowleft' size={25}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop:20}}>
                        <Chat 
                            desc='Hey, time to choose a speacilist you need and a service you want'
                        />
                    </View>
                </View>

                <View style={{flex:6.5 , backgroundColor:'#fff' , borderTopLeftRadius:15 , borderTopRightRadius:15 ,width:'100%',elevation:20 }}>


                    <TouchableOpacity  onPress={()=>handlePageView()}
                                style={{flexDirection:'row', justifyContent:'center',marginTop:10}}>
                                    <View style={{height:20,width:60}}>
                                        <View style={{width:60,height:2,backgroundColor:'#49D3CE'}}></View>
                                    </View>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row',marginTop:20 ,justifyContent:'space-between'}}>
                            <View style={{marginHorizontal:20,justifyContent:'center'}}>
                                <Text style={{fontSize:18 , fontFamily:'AbrilFatFace'}}>
                                    Toney & Guy Crew
                                </Text>
                            </View>
                            <View style={{justifyContent:'flex-end'}}>
                                <View style={styles.seprator}>
                                    <Text style={{fontFamily:'ExoBold' , color:'#fff'}}>22 mins</Text>
                                </View>
                            </View>
                    </View>
                    <Text style={{fontSize:13,fontFamily:'ExoRegular', color:'grey',marginTop:0,marginHorizontal:20}}>
                        Book and experience our stylist
                    </Text>
                    
                    <ScrollView horizontal={true}  showsVerticalScrollIndicator={false} >
                        <View style={{flexDirection:'row' , width:'100%' , marginTop:25}}>
                            {
                                crewData.map((val,index)=>{
                                    let myColor = val.name == selectedCrew ? '#49D3CE' : null
                                    let myBorderColor = val.name == selectedCrew ? '#49D3CE' : '#fff'

                                    return(
                                        <TouchableOpacity onPress={()=>handleStylistPress(val)} key={index}>

                                            <View style={{height:67,width:90,backgroundColor:'#fff',alignItems:'center'}}>
                                                <View style={{height:48,width:48,borderRadius:40,backgroundColor:'#F1F3F8',
                                                borderWidth:3,borderColor:myBorderColor,elevation:5}}>
                                                    <Image source={val.icon} style={styles.imgMannager}/>
                                                </View>
                                                <Text style={{color:myColor,marginTop:'2%',fontFamily:'ExoRegular'}}>
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


        </View>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#fff',
            flex:1,
            width:'100%'
        },

        childContainer:{
            flex:1,
            // marginHorizontal:20
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
        imgMannager:{
            resizeMode:'cover',
            height:'100%',
            width:'100%',
            borderRadius:40,
        },
    }
)

export default GuestBookingSelectStylist