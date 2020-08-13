import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet , ScrollView , RefreshControl} from 'react-native'
import CurrentBookingCard from '../../../component/CurrentBookingCard'
import {connect} from 'react-redux'




const Canceled = (props) =>{

    // const filteredAppointmet = []
    // if(props.bookings){
    //     const filteredAppointmet = props.bookings.getUserAppointment.filter(val => val.status == 'cancel')
    //     console.log('Filter Appointment >>' , filteredAppointmet)

    // }
    // console.log('Filter Appointment >>' , filteredAppointmet)
    
    const [canceledAppointment,setCanceledAppointment] = React.useState(null)

    React.useEffect(()=>{
        if(props.bookings){
            const filteredAppointmet = props.bookings.getUserAppointment.filter(val => val.status == 'cancel')
            setCanceledAppointment(filteredAppointmet)
            console.log('Filter Appointment >>' , filteredAppointmet)
        }
    },[props.bookings])

    return(
        <View style={styles.container}>
            {/* <View style={{marginTop:40 , justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18}}>
                    Canceled
                </Text>
            </View> */}
            <ScrollView showsVerticalScrollIndicator={false} >
               
               <View style={{marginHorizontal:20 , marginTop:25}}>
                {
                    canceledAppointment ? canceledAppointment.reverse().map((val,index)=>{
                        //   let component =  val.status !== 'cancel' ? <CurrentBookingCard detail={val} nav={props.navigation}/> : null
                        return(
                            <CurrentBookingCard detail={val} nav={props.navigation} isDetailView={false}/> 
                        )

                    }) : <Text style={{textAlign:'center',justifyContent:'center',fontSize:15}}>
                            There is no Canceled Appointment
                        </Text>
                    // props.bookings && props.bookings.getUserAppointment.reverse().map((val,index)=>{
                    //     //   let component =  val.status !== 'cancel' ? <CurrentBookingCard detail={val} nav={props.navigation}/> : null
                    //     return(
                    //         val.status == 'cancel' ? <CurrentBookingCard detail={val} nav={props.navigation}/> : null
                    //     )

                    // })
                }
               </View>
               

            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        bookings : state.userBookingSuccessReducer.data
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        }
    }
)

export default connect(mapStateToProps,null)(Canceled);