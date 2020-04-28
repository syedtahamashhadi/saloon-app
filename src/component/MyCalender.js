import React from 'react'
import { View , Text , TouchableOpacity , StyleSheet , ScrollView } from 'react-native'
import { Calendar } from 'react-native-calendars'


const MyCalender = () =>{
    // let date = new Date()
    // const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    // const [selectedDate,setSelectedDate] = React.useState(currentDate)
   
    // console.log( selectedDate)
    return(
        <View style={{flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
            <View style={{marginHorizontal:20,}}>
                <Calendar 
                    onDayPress={val=>console.log('Day is >>',val)}
                   
                />
            </View>
            {/* <Text>TEst</Text> */}
        
            {/* <Text>TE</Text> */}
        </View>
    )
}

export default MyCalender;

const styles= StyleSheet.create(
    {

    }
)