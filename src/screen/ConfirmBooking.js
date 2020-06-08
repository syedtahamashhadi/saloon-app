import React from 'react'
import {View , Text , StyleSheet , TouchableOpacity , ScrollView} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import ConfirmBookingCard from '../component/ConfirmBookingCard'
import Button from '../component/Button'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import {connect} from 'react-redux'



const ADD_APPOINMENT = gql `
    mutation abc($salonId: String! , $serviceProviderId: String! , 
            $timeZone: String! , $serviceId: String! , $cardId: String! , $appointmentDateTime: DateTime! ,
            $price: Float!) {
        addAppointment(salonId:$salonId, 
    serviceProviderId: $serviceProviderId , timeZone: $timeZone, 
        serviceId: $serviceId, cardId: $cardId, appointmentDateTime: $appointmentDateTime, price:$price)
        {
        status
        salon
        {
            displayName
        }
        }  
    } 
`
const ConfirmBooking = (props) =>{

    console.log('Date Time Props' , props)

    const [addAppointment , {data, loading ,error}] = useMutation(ADD_APPOINMENT)

    console.log('Data is >>' , data)
    console.log('Loading is >>' , loading)
    console.log('Error is >>' , error)


    const [pageView,setPageView] = React.useState(3)

    const {selectedCard , time , strDay , day , month ,year}= props.route.params

    let newDateTime = `${props.dateTime.data.date}T10:${props.dateTime.data.time}Z`
    let saloonId = props.saloon.data._id
    let saloonName = props.saloon.data.displayName
    let contactNo = props.saloon.data.contactNo
    let saloonAddress = props.saloon.data.address
    let stylistId= props.stylist.data._id
    let stylistName = props.stylist.data.name
    let serviceId = props.service.data._id
    let serviceName = props.service.data.name
    let servicePrice = props.service.data.price
    let duration = props.service.data.approxTime


    console.log('Card id is >>' , newDateTime )

    const handleButton = () =>{
        console.log('Button is Pressed....')

        loading !== true && addAppointment(
            {
                variables:{
                    salonId: saloonId , serviceProviderId: stylistId , timeZone: "Karachi"
                    , serviceId: serviceId , cardId: selectedCard.cardId , appointmentDateTime: newDateTime ,
                    price: servicePrice
                },
                context:{
                    headers:{
                        authorization: props.token
                    }
                }
            }
        )
    }
   
    React.useEffect(()=>{
        if(data){
            console.log('Appointment is added >>' , data)
            props.navigation.replace('Saloon')
        // props.navigation.navigate('')
        }
    },[data])
    return(
        <View style={styles.container}>
            <ScrollView style={{backgroundColor:'#fff'}} showsVerticalScrollIndicator={false}>
                <View style={{marginTop:25,marginHorizontal:20}}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <AntIcon name="arrowleft" size={25} />
                    </TouchableOpacity>

                    <View style={{flexDirection:'row' ,justifyContent:'space-between',marginTop:40,alignItems:'center'}}>
                        {/* <View style={{width:65,height:45,backgroundColor:'blue',borderRadius:6,elevation:5}}>
                        </View> */}
                        <View>
                            <AwsomeIcon name='cc-visa' size={50} color='blue' />
                        </View>
                        <View>
                            <Text style={{fontSize:25,fontWeight:'bold'}}>{`***${selectedCard.number}`}</Text>
                        </View>
                    </View>
                </View>

            {/* </View> */}
            {/* <View style={{flex:6.5,backgroundColor:'#fff', elevation:25 }}> */}
                {/* <TouchableOpacity  onPress={()=>{pageView==3 ? setPageView(1) : setPageView(3)}}
                    style={{flexDirection:'row', justifyContent:'center',marginTop:7}}>
                   
                    <View style={{height:20,width:60}}>
                        <View style={{width:60,height:2,backgroundColor:'#49D3CE'}}></View>
                    </View>
                </TouchableOpacity> */}

                <View style={{marginTop:10,alignItems:'center'}}>
                    <Text style={{fontSize:18}}>Confirmed Time:</Text>

                    <View style={{marginTop:15}}>
                <Text style={{fontSize:18,color:'#49D3CE'}}>{`${strDay} ${month}, ${year}`}</Text>
                    </View>
                <Text style={{fontSize:18,color:'#49D3CE'}}>{`at ${time} AM`}</Text>
                </View>

                <View style={{marginHorizontal:20,marginTop:25}}>
                    <ConfirmBookingCard 
                        saloon={saloonName}
                        address={saloonAddress}
                        phone={contactNo}
                        service={serviceName}
                        duration={duration}
                        staff={stylistName}
                        total={`$ ${servicePrice}`}
                    />

                </View>
                
                <View style={{marginTop:15}}>
                    <Button title='Confirm Booking' handleButton={handleButton} textSize={18}/>
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        saloon: state.selectedSaloonBookingReducer ,
        stylist: state.selectedStylistBookingReducer ,
        service: state.selectedServiceBookingReducer ,
        dateTime: state.selectedDateTimeBookingReducer ,
        token: state.mfaReducer.token
    }
}

export default connect(mapStateToProps,null)(ConfirmBooking);

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        }
    }
)