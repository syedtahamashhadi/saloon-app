import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet , ScrollView} from 'react-native'
import CurrentBookingCard from '../../../component/CurrentBookingCard'
import {connect} from 'react-redux'







const Scheduled = (props) =>{

    // React.useEffect(()=>{
    //     if(props.bookings){
    //         console.log('Current Bookings >>>' , props.bookings)
    //     }
    // },[props.bookings])
    console.log('Current Bookings >>>' , props.bookings)

    return(
        <View style={styles.container}>
            {/* <View style={{marginTop:40 , justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18}}>
                    Scheduled
                </Text>
            </View> */}
             <ScrollView showsVerticalScrollIndicator={false}>
               
               <View style={{marginHorizontal:20 , marginTop:25}}>
                {
                    props.bookings && props.bookings.getUserAppointment.reverse().map((val,index)=>{
                        //   let component =  val.status !== 'cancel' ? <CurrentBookingCard detail={val} nav={props.navigation}/> : null
                        return(
                            val.status !== 'cancel' ? <CurrentBookingCard detail={val} nav={props.navigation} isDetailView={true}/> : null
                            // <CurrentBookingCard detail={val} nav={props.navigation}/>
                        )

                    })
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

export default connect(mapStateToProps,null)(Scheduled);