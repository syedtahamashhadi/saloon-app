import React from 'react'
import {View , Text , Image , TouchableOpacity , Dimensions, StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Chat from '../../component/Chat'
import { Calendar } from 'react-native-calendars'
import TimeCard from '../../component/TimeCard'
import Button from '../../component/Button'


const GuestPickDateTime = (props) =>{
    const [pageView,setPageView]=React.useState(3)
    const [selectedDate,setSelectedDate] = React.useState(null)
    const [selectedDateMark,setSelectedDateMark] = React.useState(null)

    const [dateErr , setDateErr] = React.useState(false)
    const [timeErr , setTimeErr] =React.useState(false)

    console.log('Date Time Props >>',props)
    console.log('State Date ' , selectedDate)
    let date = new Date() 
    // let currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

    let month = `${date.getMonth()+1}`.length == 1 ? `0${date.getMonth()+1}` : date.getMonth()+1
    let cuurrentDay = `${date.getDate()}`.length == 1 ? `0${date.getDate()}` : date.getDate()

    let currentDate = `${date.getFullYear()}-${ month }-${cuurrentDay}`
    console.log('Current Date >> ',currentDate)
    const timeData = [{tm:'09:00'},{tm:'09:30'},{tm:'10:00'},{tm:'10:30'},{tm:'11:00'},{tm:'11:30'},]
    const [time,setTime] = React.useState(false)

    const getTime = (val) =>{
        setTime(val)
    }

    const handleButton = () =>{
        if(selectedDate && time){
            let dateTime={date:selectedDate,time:time}
            console.log('Button is Pressed....',dateTime)
            props.navigation.navigate('GuestPaymentMethods')
        }
    }

    const handleDatePress = async (val) =>{

        setSelectedDateMark(
            // myObj
            {
                [val.dateString]:{selected: true, marked: true, selectedColor: '#49D3CE' }
            }
        )
        setSelectedDate(val.dateString)
        setPageView(1)
    }

    return(
        <View style={styles.container}>
            <View style={{flex:pageView,marginHorizontal:20}}>
                <View style={{marginTop:35}}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <AntIcon name='arrowleft' size={25}/>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:20}}>
                    <Chat 
                        desc='Choose the date and time for your visit'
                    />
                </View>
            </View>

            <View style={{flex:7,backgroundColor:'#fff',borderTopLeftRadius:20,borderTopRightRadius:20,elevation:20}}>
                
                <View style={{alignItems:'center',top:10}}>
                  
                    <TouchableOpacity  onPress={()=>{pageView==3 ? setPageView(1) : setPageView(3)}}
                    style={{flexDirection:'row', justifyContent:'center',marginTop:0}}>
                        <View style={{height:20,width:60}}>
                            <View style={{width:60,height:2,backgroundColor:'blue'}}></View>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{marginTop:0}}>
                    <View>
                    <Calendar 
                            onDayPress={val=>handleDatePress(val)}
                            // onDayLongPress={false}
                            minDate={currentDate}
                            // minDate={'2020-08-04'}
                            hideExtraDays={true}
                            markedDates={ selectedDateMark ? selectedDateMark : null}
                            theme={{
                                selectedDayBackgroundColor: '#00A700',
                                selectedDayTextColor:'#fff',
                                // monthTextColor: 'blue',
                                textMonthFontFamily:'ExoBold',
                                textDayHeaderFontFamily:'ExoRegular',
                                textDayFontFamily:'ExoRegular',
                                // backgroundColor:'red',
                                // arrowColor: 'red',
                                // indicatorColor:'red',
                            }}
                        />
                        {/* <Calendar 
                            onDayPress={val=>handleDatePress(val)}
                            // minDate={currentDate}
                            // hideExtraDays={true}
                            markedDates={ selectedDateMark ? selectedDateMark : null}
                            
                            theme={{
                                selectedDayBackgroundColor: '#49D3CE',
                                selectedDayTextColor:'#fff',
                                textMonthFontFamily:'ExoRegular',
                                textDayHeaderFontFamily:'ExoRegular',
                                textDayFontFamily:'ExoRegular',
                            }}
                        /> */}
                    </View>
                    
                </View>
                <View style={{marginTop:15,marginHorizontal:20}}>
                    <Text style={{fontSize:20,fontFamily:'ExoBold'}}>
                        Pick a time
                    </Text>
                </View>
                <View style={{marginTop:15,marginHorizontal:20}}>
                    <TimeCard timeData={timeData} getTime={getTime} time={time}/>
                </View>

                <View style={{marginTop:8 , marginHorizontal:20}}>
                    <Button title='Next' handleButton={handleButton}/>
                </View>
            </View>
            

        </View>
    )
}


export default GuestPickDateTime ;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            // marginHorizontal:20
        }
    }
)
