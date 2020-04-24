import React from 'react'
import {View , Text , StyleSheet ,ScrollView , TouchableOpacity , Image} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import CurrentBookingCard from '../component/CurrentBookingCard'


const CurrentBookings = () =>{

    return(
        <View style={styles.container}>
            <View style={{marginTop:35}}>
                <TouchableOpacity>
                    <AntIcon name="arrowleft" size={25} />
                </TouchableOpacity>
            </View>
            
            <Text style={{marginTop:30,fontWeight:'bold',fontSize:35,marginBottom:40}}>Bookings</Text>
            
            <ScrollView style={{marginBottom:20}}showsVerticalScrollIndicator={false}>
               
               <CurrentBookingCard />
               <CurrentBookingCard />

            </ScrollView>
        </View>
    )
}

export default CurrentBookings;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            marginHorizontal:20
        },
      
    }
)