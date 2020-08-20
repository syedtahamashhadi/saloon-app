import React , {useEffect} from 'react'
import {View , Text , Image , TouchableOpacity , Dimensions, StyleSheet , ScrollView} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Chat from '../component/Chat'
import { Calendar } from 'react-native-calendars'
import TimeCard from '../component/TimeCard'
import Button from '../component/Button'
import AsyncStorage from '@react-native-community/async-storage'
import { selectedDateTimeSuccess } from '../redux/authenticate/actions'
import { connect } from 'react-redux'
import { useMutation } from '@apollo/react-hooks'
import Mutations from '../appolo/mutations'


const PostpondPickDate = (props) =>{

    const [rescheduleAppointment , {data, loading ,error}] = useMutation(Mutations.RESCHEDULE_APPOINTMENT)

    const { appointmentId } = props.route.params

    const [pageView,setPageView]=React.useState(3)
    const [selectedDate,setSelectedDate] = React.useState(null)
    const [selectedDateMark,setSelectedDateMark] = React.useState(null)
    const [val , setVal] = React.useState(false)
    const [timeErr , setTimeErr] =React.useState(false)

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
    // ${props.dateTime.data.date}T10:${props.dateTime.data.time}Z
    const handleButton = () =>{
        if(selectedDate && time){
            let dateTime={date:selectedDate,time:time}
            console.log('Str Day is >>' , convertingDay(val.dateString))
            // let dateTimeDetail = {
            //     time: time,
            //     strDay: convertingDay(val.dateString) ,
            //     day: val.day , 
            //     year: val.year ,
            //     month: convertingMonth(val.month)
            // }

            let apiDateTime = `${dateTime.date}T10:${dateTime.time}Z`

            async function getToken(){
                try {
                    const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
                    if(token !== null){
                        console.log('Get Token >>>>>>>>>>>>>>>>>>>>>>>>>')

                        loading !== true && rescheduleAppointment(
                            {
                                variables:{
                                    id: appointmentId , dateTime: apiDateTime
                                 },
                                context:{
                                    headers:{
                                        authorization: token
                                    }
                                }
                            }
                        )
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            getToken()

        }
    }

    useEffect(()=>{
        if(data){
            props.navigation.navigate('EditProfile')
        }else if(error){
            alert('Something went wrong try again !')
        }
    },[data , error])


    const handleDatePress = (val) =>{
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
                        desc='Reschedule your appointment...'
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
                    </View>
                    
                </View>
                <View style={{marginTop:15,marginHorizontal:20}}>
                    <Text style={{fontSize:20,fontFamily:'ExoBold'}}>Pick a time</Text>
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

const mapStateToProps = (state) =>{
    return{
        signIn: state.loginReducer ,
        token: state.mfaReducer.token
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         selectDateTime: (data) => dispatch(selectedDateTimeSuccess(data))
//     }
// }

export default connect(mapStateToProps,null)(PostpondPickDate)

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            // marginHorizontal:20
        }
    }
)
