import React from 'react'
import {View ,  StyleSheet, ScrollView} from 'react-native'
import CurrentBookingCard from '../../../component/CurrentBookingCard'
import {connect} from 'react-redux'


const Scheduled = (props) =>{

     return(
        <View style={styles.container}>
          {!props
            ? 
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#49D3CE" />
            </View>
            :
            <ScrollView showsVerticalScrollIndicator={false}>
               
               <View style={{marginHorizontal:20 , marginTop:25}}>
                {
                    props.bookings && props.bookings.map((val,index)=>{
                        return(
                            val.status !== 'cancel' ? <CurrentBookingCard detail={val} nav={props.navigation} isDetailView={true}/> : null
                        )

                    })
                }
               </View>               
            </ScrollView>
          }             
        </View>
    )
}


const mapStateToProps = (state) =>{
    return{
        bookings : state.userBookingSuccessReducer.data ,
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