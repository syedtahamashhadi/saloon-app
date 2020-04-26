import React from 'react'
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import ConfirmBookingCard from '../component/ConfirmBookingCard'
import Button from '../component/Button'

const ConfirmBooking = () =>{

    const [pageView,setPageView] = React.useState(3.5)

    const handleButton = () =>{
        console.log('Button is Pressed....')
    }
    const handleBackButton =() =>{
        console.log('Handle Back Button...')
    }

    return(
        <View style={styles.container}>
            <View style={{flex:pageView , backgroundColor:'#fff'}}>
                <View style={{marginTop:35,marginHorizontal:20}}>
                    <TouchableOpacity onPress={handleBackButton}>
                        <AntIcon name="arrowleft" size={25} />
                    </TouchableOpacity>

                    <View style={{flexDirection:'row' ,justifyContent:'space-between',marginTop:40,alignItems:'center'}}>
                        <View style={{width:65,height:45,backgroundColor:'blue',borderRadius:6,elevation:5}}>
                        </View>
                        <View>
                            <Text style={{fontSize:25,fontWeight:'bold'}}>...4829</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{flex:6.5,backgroundColor:'#fff',borderTopRightRadius:20,borderTopLeftRadius:20,
                                    elevation:25}}>
                <TouchableOpacity  onPress={()=>{pageView==3.5 ? setPageView(1) : setPageView(3.5)}}
                    style={{flexDirection:'row', justifyContent:'center',marginTop:0}}>
                    <View style={{height:20,width:60}}>
                        <View style={{width:60,height:2,backgroundColor:'blue'}}></View>
                    </View>
                </TouchableOpacity>

                <View style={{marginTop:15,alignItems:'center'}}>
                    <Text style={{fontSize:18}}>Confirmed Time:</Text>

                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:18,color:'#49D3CE'}}>Friday March 8, 2020</Text>
                    </View>
                    <Text style={{fontSize:18,color:'#49D3CE'}}>at 10:00 AM</Text>
                </View>

                <View style={{marginHorizontal:20,marginTop:25}}>
                    <ConfirmBookingCard 
                        salon='Toney & Guy'
                        address='16th Street Mall , Denver'
                        phone='(321) 328-2381'
                        service='Hair Cut'
                        duration='30 Minutes'
                        staff='Matt Perry'
                        total='$ 30.00'
                    
                    />

                </View>
                
                <View style={{marginTop:25}}>
                    <Button title='Confirm Booking' handleButton={handleButton} textSize={18}/>
                </View>
            </View>
        </View>
    )
}

export default ConfirmBooking;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        }
    }
)