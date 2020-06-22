import React , {useEffect} from 'react'
import {View , Text , StyleSheet ,ScrollView , TouchableOpacity , Image} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import CurrentBookingCard from '../component/CurrentBookingCard'
import gql from 'graphql-tag'
import { useQuery , useLazyQuery } from '@apollo/react-hooks'
import { connect } from 'react-redux'


const GET_USER_BOOKING = gql `

    query abc($userId: String){
        getUserAppointment(userId: $userId){
        user{
            email
        }
        appointmentDateTime
        treatment
        status
        timeZone
        price
        isReward
        isPromoCode
        createdAt
        appointmentDateTime
        appointmentTriggerTime
        serviceId
        salon{
            _id
            displayName
        }
        serviceProvider{
            _id
            firstName
            lastName
        }
        services{
            _id
            name
            description
            serviceIcon
            price
        }
        }
}
`

const CurrentBookings = (props) =>{

    console.log('Current Bookings Props >>' , props.token)

   

    const {data , loading , error} = useQuery(GET_USER_BOOKING,
            {
                variables:{
                    userId: props.mfa._id
                },
                context:{
                    headers:{
                        authorization: props.token,
                    }
                },
                // fetchPolicy: 'cache-and-network' 
            },
        )
    
        React.useEffect(()=>{
            console.log('Component is Mounted >>>>')
        },[])
        console.log('Loading Appoinment >>' , loading)
        console.log('Loading Appoinment >>' , data)

    
    useEffect(()=>{
        if(data){
            console.log('User Appoinment Data >>' , data)
        }else if(error){
            console.log('User Appoinment Error >>' , error)
        }
    },[data,error])
    return(
        <View style={styles.container}>
            {/* <View style={{marginHorizontal:20}}> */}
            <View style={{marginTop:35,marginHorizontal:20 , flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <AntIcon name="arrowleft" size={25} />
                </TouchableOpacity>
            </View>
            
            <Text style={{marginTop:20,fontSize:30,marginBottom:25,
                            marginHorizontal:20,fontFamily:'AbrilFatFace'}}>
                Bookings
                </Text>
            
            <ScrollView style={{marginHorizontal:20}} showsVerticalScrollIndicator={false}>
               
               {/* <CurrentBookingCard />
               <CurrentBookingCard /> */}
               {
                   data && data.getUserAppointment.map((val,index)=>{
                       return(
                        <CurrentBookingCard />
                       )

                   })
               }

            </ScrollView>
            {/* </View> */}
        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        token: state.mfaReducer.token,
        mfa: state.mfaReducer.data.verifyCode
    }
}
export default connect(mapStateToProps,null)(CurrentBookings);

// export default CurrentBookings

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            // marginHorizontal:20
        },
      
    }
)