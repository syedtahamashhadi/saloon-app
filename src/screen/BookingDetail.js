import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet} from 'react-native'
import Image from 'react-native-remote-svg'
import scissor from '../../assets/scissor-icon.png'
import Icon from 'react-native-vector-icons/AntDesign'
import { useMutation } from '@apollo/react-hooks'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import Mutations from '../appolo/mutations'
import {setCancelAppointmentFlagSuccess,userBookingListSuccess} from '../redux/authenticate/actions'


const BookingDetail = (props) =>{

    console.log('Detail Props >>' , props)

    const [cancelAppoinment , {data , loading , error}] = useMutation(Mutations.CANCEL_APPOINMENT)

    const { amount , appointmentId , dateTime , style , salon , stylist , serviceIcon , isDetailView} = props.route.params

    const handleCancel = () => {

        async function getToken(){
            try {
                const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
                if(token !== null){

                    loading !== true && cancelAppoinment(
                        {
                            variables:{
                                id: appointmentId
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
    };



    const handleDelete = () => {
        alert('Handle Delete')
    }
    
    React.useEffect(()=>{
        if(data){
            props.setCancelApointmentFlag(true)
            // props.bookingsList(data.cancelAppointment)
            props.navigation.navigate('BookingsNavigation',{remount:true})
        }else if(error){
            alert('Something Went Wrong Try Again !')
        }
    },[data,error])
    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:20}}>
            <View style={{marginTop:35,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <Icon name='arrowleft' size={25}/>
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <View style={styles.columnFlex}>
                    <View style={{backgroundColor:'#fff',flexDirection:'row',flex:1}}>
                        <View style={{justifyContent:'center',paddingRight:5 ,width:60,borderRadius:45 }}>
                            <Image source={{uri : serviceIcon}}  style={{width:'100%',height:'100%',resizeMode:'cover'}}/>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row',paddingTop:5,justifyContent:'space-between'}}>
                                <Text style={{fontSize:17,fontFamily:'ExoBold'}}>{style}</Text>
                                <Text style={{fontSize:17,fontFamily:'ExoBold'}}>{`£ ${amount}`}</Text>
                            </View>
                            <View style={{flexDirection:'row',paddingTop:1,justifyContent:'space-between'}}>
                                <Text style={{fontSize:13,fontFamily:'ExoRegular'}}>
                                    {`${stylist.firstName} ${stylist.lastName}`}
                                </Text>
                                <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color: 'gray', marginRight: 5,marginTop:2,}}
                                        size={15}
                                        name="clockcircleo"
                                    />
                                    <Text style={{fontSize:13,fontFamily:'ExoBold',opacity:0.6}}>
                                        {dateTime}
                                    </Text>
                                </View>
                            </View>
                        
                        </View>
                       
                    </View>


                    <View style={{borderRadius: 1, borderWidth: 2, borderColor: 'lightgray', borderStyle: 'dashed', marginVertical: 12}}/>

                    <View style={styles.rowFlex}>
                        <View style={styles.rowFlex}>
                            <Text style={{fontFamily:'ExoBold',fontSize:17,opacity:0.6}}>{salon.displayName}</Text>
                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={{fontFamily:'ExoBold',fontSize:13}}>16th Street Mall Denver</Text>
                            <Text style={{fontFamily:'ExoBold',fontSize:13,color:'grey'}}>
                                {salon.contactNo}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardBottom} />
            </View>

                <View style={styles.buttonContainer}>
                {isDetailView && <TouchableOpacity>
                        <Text
                            style={styles.cancelButton}
                            onPress={handleCancel}
                        >
                            Cancel</Text>
                    </TouchableOpacity>}
                    {isDetailView && <TouchableOpacity>
                        <Text
                            style={styles.deleteButton}
                            onPress={handleDelete}
                        >
                            Delete</Text>
                    </TouchableOpacity>}
                </View>

                <View style={styles.bottom}>
                {isDetailView &&<TouchableOpacity onPress={
                                ()=>props.navigation.navigate('PostpondPickDate',{appointmentId:appointmentId})
                                }>
                        <Text style={[styles.fontSize_18_bold, styles.underline]}>Postponed</Text>
                    </TouchableOpacity>}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        },
        card: {
            elevation: 12,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            paddingTop: 20,
            paddingHorizontal: 20,
            paddingBottom: 0,
            backgroundColor: '#fcfcfc',
            height: 180,
            marginTop: 30,
            // width:'100%',
            position: 'relative'
        },
        cardBottom: {
            borderColor: 'lightgray',
            borderWidth: 2,
            borderRadius: 5,
            borderStyle: 'dashed',
            position: 'relative',
            // bottom: -,
        },
        fontSize_18_bold:{
            fontSize: 18,
            // fontWeight: "bold"
        },
        fontSize_14: {
            fontSize: 14
        },
        rowFlex: {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row'
        },
        columnFlex: {
            flex: 1,
            flexDirection: 'column'
        },
        lightgrey: {
            color: '#efefef'
        },
        buttonContainer: {
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor:'green'
        },
        cancelButton: {
            fontSize: 18,
            textAlign: 'center',
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 50,
            width: 140,
            padding: 8
        },
        deleteButton: {
            fontSize: 18,
            color: '#ffffff',
            textAlign: 'center',
            borderWidth: 2,
            borderColor: '#FA7268',
            borderRadius: 50,
            width: 140,
            padding: 8,
            backgroundColor: '#FA7268'
        },
        bottom:{
            alignItems: 'center',
            marginTop: 25,
        },
        underline: {
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            textDecorationColor: "#000",
        }
    
    }
)

const mapStateToProps = (state) =>{
    return{
        token: state.mfaReducer.token
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setCancelApointmentFlag : (data) => dispatch(setCancelAppointmentFlagSuccess(data)) ,
        bookingsList : (data) => dispatch(userBookingListSuccess(data)) , 

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookingDetail);
