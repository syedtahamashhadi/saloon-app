import React , {useEffect} from 'react'
import {View , Text , StyleSheet ,ScrollView , TouchableOpacity } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import CurrentBookingCard from '../component/CurrentBookingCard'
import gql from 'graphql-tag'
import { useQuery , useLazyQuery } from '@apollo/react-hooks'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

const GET_USER_BOOKING = gql `

    query abc($userId: String){
        getUserAppointment(userId: $userId){
        user{
            email
        }
        appointmentDateTime
        _id
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
            address
            contactNo
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

    console.log('Current Bookings Taha >>' ,props.mfa._id ,'  ' , props.token)

   

    const [getUserBookingQuery,{data , loading , error}] = useLazyQuery(GET_USER_BOOKING)
    
        React.useEffect(()=>{
            async function getToken(){
                try {
                    const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
                    if(token !== null){
                        getUserBookingQuery(
                            {
                                variables:{
                                    userId: props.mfa._id
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
            getToken()
        },[])

        console.log('Loading Appoinment >>' , loading)
        console.log('Data Appoinment >>' , data)
        console.log('Error Appoinment >>' , error)


    
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
            
            <ScrollView showsVerticalScrollIndicator={false}>
               
               {/* <CurrentBookingCard />
               <CurrentBookingCard /> */}
               <View style={{marginHorizontal:20 , marginTop:5}}>
                {
                    data && data.getUserAppointment.map((val,index)=>{
                        //   let component =  val.status !== 'cancel' ? <CurrentBookingCard detail={val} nav={props.navigation}/> : null
                        return(
                            // {component}
                            // <Text>test</Text>
                            // val.status !== 'cancel' ? <CurrentBookingCard detail={val} nav={props.navigation}/> : null
                            <CurrentBookingCard detail={val} nav={props.navigation}/>
                        )

                    })
                }
               </View>
               

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
            backgroundColor:'#fcfcfc',
            // marginHorizontal:20
        },
      
    }
)