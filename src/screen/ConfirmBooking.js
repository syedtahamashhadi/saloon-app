import React from 'react'
import {View , Text , StyleSheet , TouchableOpacity , ScrollView , Clipboard} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import ConfirmBookingCard from '../component/ConfirmBookingCard'
import Button from '../component/Button'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'
import { useMutation , useLazyQuery } from '@apollo/react-hooks'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import Mutations from '../appolo/mutations'
import GestureRecognizer from 'react-native-swipe-gestures'


const ConfirmBooking = (props) =>{

    console.log('Date Time Props' , props)

    const [promoCode,setPromoCode]=React.useState('')
    const [servicePrice,setServicePrice]=React.useState(props.service.data.price)
    // const [discountedPrice,]

    const [addAppointment , {data, loading ,error}] = useMutation(Mutations.ADD_APPOINMENT)
    // const [applyPromoCode , { data : dataPromoCode , loading : loadingPromoCode , error: errorPromoCode }] = useMutation(Mutations.APPLY_PROMO_CODE)


    console.log('Data is >>' , data)
    console.log('Loading is >>' , loading)
    console.log('Error is >>' , error)

    // console.log('Data is >>' , dataPromoCode)
    // console.log('Loading is >>' , loadingPromoCode)
    // console.log('Error is >>' , errorPromoCode)



    const [pageView,setPageView] = React.useState(3)

    const {selectedCard , time , strDay , day , month ,year} = props.route.params

    let newDateTime = `${props.dateTime.data.date}T10:${props.dateTime.data.time}Z`
    let saloonId = props.saloon.data._id
    let saloonName = props.saloon.data.displayName
    let contactNo = props.saloon.data.contactNo
    let saloonAddress = props.saloon.data.address
    let stylistId= props.stylist.data._id
    let stylistName = `${props.stylist.data.firstName} ${props.stylist.data.lastName}`
    let serviceId = props.service.data._id
    let serviceName = props.service.data.name
    // let servicePrice = props.service.data.price
    let duration = props.service.data.approxTime
    let customerId = props.userPaymentCards.data.getCustomerAndCard[0].customerId

    console.log('Customer Id >>>' , servicePrice)


    console.log('Card id is >>' , newDateTime )
    console.log('Button is Pressed....',serviceId)

    const handleButton = () =>{
        console.log('Button is Pressed....',serviceId)

        async function getToken(){
            try {
                const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')

                if(token !== null){
                    loading !== true && addAppointment(
                        {
                            variables:{
                                salonId: saloonId , serviceProviderId: stylistId , timeZone: "Karachi"
                                , services: [serviceId] , cardId: selectedCard.cardId , customerId: customerId ,
                                appointmentDateTime: newDateTime , amount: servicePrice*100 
                            },
                            context:{
                                headers:{
                                    authorization: token
                                }
                            }
                        }
                    ) 
                }
            } catch (error) {
                console.log(error)
                alert('Error')
            }
        }
        getToken()

    }
   
    React.useEffect(()=>{
        if(data){
            console.log('Appointment is added >>' , data)
            props.navigation.replace('CurrentBookings')
        // props.navigation.navigate('')
        }
        // else if(dataPromoCode){
        //     console.log('Data Promo Code >>', dataPromoCode)
        // }
    },[data])

    const onSwipeUp = () =>{
        console.log('Swipe Up >>>')
        setPageView(1)
    }


    const onSwipeDown = () =>{
        console.log('Swipe Down >>>')
        setPageView(3)
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };


  

    return(
        <View style={styles.container}>
           
            {/* <ScrollView style={{backgroundColor:'#fff', marginTop:35}} showsVerticalScrollIndicator={false}> */}
                <View style={{flex:pageView,marginHorizontal:20 }}>
                   
                    <View style={{flexDirection:'row',marginTop:35}}>
                        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                            <AntIcon name="arrowleft" size={25} />
                        </TouchableOpacity>
                    </View>
                   
                    <View style={{flexDirection:'row' ,justifyContent:'space-between',marginTop:40,alignItems:'center'}}>
                        {/* <View style={{width:65,height:45,backgroundColor:'blue',borderRadius:6,elevation:5}}>
                        </View> */}
                        <View>
                            <AwsomeIcon name='cc-visa' size={50} color='blue' />
                        </View>
                        <View>
                            <Text style={{fontSize:25,fontWeight:'bold'}}>{`***${selectedCard.last4}`}</Text>
                        </View>
                    </View>
                </View>

            {/* </View> */}
            <GestureRecognizer
                onSwipeUp={(state)=>onSwipeUp()}
                onSwipeDown={(state)=>onSwipeDown()}
                config={config}
                style={{flex:6.5,backgroundColor:'#fff', elevation:25,borderTopLeftRadius:15,borderTopRightRadius:15 }}
            >
                {/* <ScrollView></ScrollView> */}

            {/* <View style={{flex:6.5,backgroundColor:'#fff', elevation:25,borderTopLeftRadius:15,borderTopRightRadius:15 }}> */}
                <TouchableOpacity  onPress={()=>{pageView==3 ? setPageView(1) : setPageView(3)}}
                    style={{flexDirection:'row', justifyContent:'center',marginTop:10}}>
                   
                    <View style={{height:20,width:60}}>
                        <View style={{width:60,height:2,backgroundColor:'#49D3CE'}}></View>
                    </View>
                </TouchableOpacity>
                <ScrollView>

                <View style={{marginTop:10,alignItems:'center'}}>
                    <Text style={{fontSize:18,fontFamily:'ExoBold'}}>Confirmed time:</Text>

                    <View style={{marginTop:15}}>
                <Text style={{fontSize:18,color:'#49D3CE',fontFamily:'ExoBold'}}>{`${strDay} ${day} ${month}, ${year}`}</Text>
                    </View>
                <Text style={{fontSize:18,color:'#49D3CE',fontFamily:'ExoBold'}}>{`at ${time} AM`}</Text>
                </View>

                <View style={{marginHorizontal:20,marginTop:25}}>
                    <ConfirmBookingCard 
                        saloon={saloonName}
                        address={saloonAddress}
                        phone={contactNo}
                        service={serviceName}
                        duration={duration}
                        staff={stylistName}
                        total={`£ ${servicePrice}`}
                        price={servicePrice}
                        discountedPrice={setServicePrice}
                        handleChangeText={setPromoCode}
                        promoCode={promoCode}
                        // handleApplyPromoCode={handleApplyPromoCode}
                    />
                </View>
                
                
                <View style={{marginTop:15 , marginHorizontal:20}}>
                    <Button title='Confirm Booking' handleButton={handleButton} textSize={18}/>
                </View>
            {/* </View> */}
            </ScrollView>
            </GestureRecognizer>

        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        saloon: state.selectedSaloonBookingReducer ,
        stylist: state.selectedStylistBookingReducer ,
        service: state.selectedServiceBookingReducer ,
        dateTime: state.selectedDateTimeBookingReducer ,
        token: state.mfaReducer.token,
        userPaymentCards: state.userPaymentCardReducer
    }
}

export default connect(mapStateToProps,null)(ConfirmBooking);

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
        }
    }
)