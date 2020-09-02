import React from 'react'
import { View , Text , TouchableOpacity , StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { useQuery , useLazyQuery } from '@apollo/react-hooks'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import Queries from '../../../appolo/queries'
import {userBookingListSuccess , setCancelAppointmentFlagSuccess} from '../../../redux/authenticate/actions'



const BookingsHeader = (props) =>{

    console.log('State >> in bookings header' , props)

   
    const [getUserBookingQuery,{data , loading , error}] = useLazyQuery(Queries.GET_USER_BOOKING)
    
    console.log('List of Bookings >> ',props.bookings)


    const getToken = async() =>{
        try {
            const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
            if(token !== null){
                getUserBookingQuery(
                    {
                        variables:{
                            userId: props.userDetial.getUserProfile._id
                        },
                        context:{
                            headers:{
                                authorization: token,
                            }
                        },
                    }
                )
            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(()=>{
        props.nav.navigation.addListener('focus', () => {
            console.log('BookingHeader is  Mounted>>>',props.cancelAppointmentFlag.isAppointmentCancel)
            if(props.cancelAppointmentFlag.isAppointmentCancel == true){
                getToken()
                props.setCancelApointmentFlag(false)
            }
          });
    },[props.navigation])
    
    React.useEffect(()=>{
        getToken()
    }, [props.nav])

   
    React.useEffect(()=>{
        if(data){
            console.log('Bookings Data is >>>' , data.getUserAppointment)
            props.bookingsList(data.getUserAppointment)
        }else if(error){
            console.log('Error is >>>' , error)
        }
    },[data,error])

    return(
        <View style={styles.container}>
            <View style={{marginTop:35 , marginHorizontal:20 ,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>props.nav.navigation.goBack()}>
                    <AntIcon name='arrowleft' size={25} />
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal:20 , marginTop:10 , marginBottom:5}}>
                <Text style={{fontFamily:'AbrilFatFace' , fontSize:30}}>
                    Bookings
                    {/* {props.header.data} */}
                </Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            // flex:1,
            backgroundColor:'#fff'
        }
    }
)


const mapStateToProps = (state) =>{
    return{
        userDetial: state.setuserDetailReducer.data ,
        bookings : state.userBookingSuccessReducer.data ,
        cancelAppointmentFlag : state.setCancelAppointmentFlagReducer ,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        bookingsList : (data) => dispatch(userBookingListSuccess(data)) , 
        setCancelApointmentFlag : (data) => dispatch(setCancelAppointmentFlagSuccess(data))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookingsHeader);

