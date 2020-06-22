import React , {useEffect} from 'react'
import {View , Text , Image , TouchableOpacity , Dimensions, StyleSheet , ScrollView} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Chat from '../component/Chat'
import { Calendar } from 'react-native-calendars'
import TimeCard from '../component/TimeCard'
import Button from '../component/Button'
import { selectedDateTimeSuccess } from '../redux/authenticate/actions'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const ADD_APPOINMENT = gql `
    mutation abc {
        addAppointment(salonId:"5e352f43e998cb2157837b28", 
    serviceProviderId: "5e26e88be89f9d4799fe8378", timeZone: "Karachi", serviceId: "5e935b39bc8f3f00238b1279", cardId: "cfbb", appointmentDateTime: "2025-12-03T10:15:30Z", 
    price:4.5)
        {
        status
        salon
        {
            displayName
        }
        }  
    } 
`

const PickDate = (props) =>{

    const [addAppointment , {data, loading ,error}] = useMutation(ADD_APPOINMENT)

    const [pageView,setPageView]=React.useState(3)
    const [selectedDate,setSelectedDate] = React.useState(null)
    const [selectedDateMark,setSelectedDateMark] = React.useState(null)
    const [val , setVal] = React.useState(false)
    const [timeErr , setTimeErr] =React.useState(false)

    console.log('PicDate Props >>>' , props.signIn.token)

    console.log('Data ' , data)
    console.log('Loading ' , loading)
    console.log('Error ' , error)

    let date = new Date() 

    let currentDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1}`
    console.log('Current Date >>' , currentDate , '>>>>>' , date.getMonth())
    const timeData = [{tm:'09:00'},{tm:'09:30'},{tm:'10:00'},{tm:'10:30'},{tm:'11:00'},{tm:'11:30'},]
    const [time,setTime] = React.useState(false)

    const getTime = (val) =>{
        setTime(val)
    }

    const convertingDay = (day) =>{
        switch (new Date(day).getDay()) {
            case 0: return 'Sunday'
            case 1: return 'Monday'
            case 2: return 'Tuesday'
            case 3: return 'Wednesday'
            case 4: return 'Thursday'
            case 5: return 'Friday'
            case 6: return 'Saturday'
            case 7: return 'Saturday'
        }
    }

    const convertingMonth = (month) =>{
        switch (month) {
            case 1: return 'Jan'
            case 2: return 'Feb'
            case 3: return 'Mar'
            case 4: return 'Apr'
            case 5: return 'May'
            case 6: return 'Jun'
            case 7: return 'Jul'
            case 8: return 'Aug'
            case 9: return 'Sep'
            case 10: return 'Oct'
            case 11: return 'Nov'
            case 12: return 'Dec'
        }
    }
    const handleButton = () =>{
        if(selectedDate && time){
            let dateTime={date:selectedDate,time:time}
            console.log('Str Day is >>' , convertingDay(val.dateString))
            let dateTimeDetail = {
                time: time,
                strDay: convertingDay(val.dateString) ,
                day: val.day , 
                year: val.year ,
                month: convertingMonth(val.month)
            }

            console.log('Button is Pressed....',dateTime)
            props.selectDateTime(dateTime)
            props.navigation.navigate('PaymentMethods',{
               ...dateTimeDetail
            })
            // loading !== true && addAppointment(
            //     {
            //         context:{
            //             headers:{
            //                 authorization: props.signIn.token
            //             }
            //         }
            //     }
            // )
        }
    }

    // React.useEffect=(()=>{
    //     if(data){
    //         console.log('I am Fired >>>')
    //         // props.navigation.navigate('Saloon')
    //     }
    // },[loading])

    useEffect(()=>{
        if(data){
            console.log('Action is Fired >>',data)
            props.navigation.navigate('Saloon')
        }
    },[data])


    const handleDatePress = (val) =>{
        console.log('Date is >>>>' , val)       
        // const myObj = {  }
        // myObj[val.dateString]={selected: true, marked: true, selectedColor: '#49D3CE' }
        setSelectedDateMark(
            // myObj
            {
                [val.dateString]:{selected: true, marked: true, selectedColor: '#49D3CE' }
            }
        )
        setSelectedDate(val.dateString)
        setVal(val)
        setPageView(1)
    }
    
    return(
        <View style={styles.container}>
            
            <View style={{flex:pageView , marginHorizontal:20}}>
                <View style={{flexDirection:'row',marginTop:35}}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <AntIcon name='arrowleft' size={25}/>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:20,marginHorizontal:20}}>
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
                            // minDate={currentDate}
                            // hideExtraDays={true}
                            markedDates={ selectedDateMark ? selectedDateMark : null}
                            theme={{
                                selectedDayBackgroundColor: '#00A700',
                                selectedDayTextColor:'red',
                                // monthTextColor: 'blue',
                                textMonthFontFamily:'AbrilFatFace',
                                textDayHeaderFontFamily:'ExoRegular',
                                textDayFontFamily:'ExoRegular',
                                // backgroundColor:'red',
                                // arrowColor: 'red',
                                // indicatorColor:'red',
                            }}
                        />
                    </View>
                    
                </View>
                <View style={{marginTop:15,marginHorizontal:20}}>
                    <Text style={{fontSize:20,fontFamily:'AbrilFatFace'}}>Pick a time</Text>
                </View>
                <View style={{marginTop:15,marginHorizontal:20}}>
                    <TimeCard timeData={timeData} getTime={getTime} time={time}/>
                </View>

                <View style={{marginTop:8}}>
                    <Button title='Next' handleButton={handleButton}/>
                </View>            
            </View>            

        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        signIn: state.loginReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        selectDateTime: (data) => dispatch(selectedDateTimeSuccess(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PickDate);

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            // marginHorizontal:20
        }
    }
)
