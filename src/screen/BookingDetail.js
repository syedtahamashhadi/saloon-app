import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet , Image } from 'react-native'
import scissor from '../../assets/scissor-icon.png'
import Icon from 'react-native-vector-icons/AntDesign'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { connect } from 'react-redux'


const CANCEL_APPOINMENT = gql `
    mutation abc($id: String) {
        cancelAppointment(appointmentId:"5ea1d104c1eccc1b5c4fad42") {
            status
        }  
    }
`



const BookingDetail = (props) =>{

    const [cancelAppoinment , {data , loading , error}] = useMutation(CANCEL_APPOINMENT)

    const handleCancel = () => {
        alert('Handle Cancel')
        // loading !== true && cancelAppoinment(
        //     {
        //         variables:{
        //             id: ''
        //         },
        //         context:{
        //             headers:{
        //                 aouthorization: props.token
        //             }
        //         }
        //     }
        // )
    };

    console.log('Data >>',data)
    console.log('Data >>',loading)
    console.log('Data >>',error)


    const handleDelete = () => {
        alert('Handle Delete')
    }
    
    React.useEffect(()=>{
        if(data){
            props.navigation.goBack()
        }
    },[data])
    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:20}}>
            <View style={{marginTop:35,flexDirection:'row'}}>
                <TouchableOpacity>
                    <Icon name='arrowleft' size={25}/>
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <View style={styles.columnFlex}>
                    <View style={{backgroundColor:'#fff',flexDirection:'row',flex:1}}>
                        <View style={{justifyContent:'center',paddingRight:5}}>
                            <Image source={scissor} />
                        </View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row',paddingTop:5,justifyContent:'space-between'}}>
                                <Text style={{fontSize:17,fontFamily:'ExoBold'}}>Hair Cut</Text>
                                <Text style={{fontSize:17,fontFamily:'ExoBold'}}>$ 24.9</Text>
                            </View>
                            <View style={{flexDirection:'row',paddingTop:1,justifyContent:'space-between'}}>
                                <Text style={{fontSize:13,fontFamily:'ExoRegular'}}>Matt Perry</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Icon
                                        style={{color: 'gray', marginRight: 5,marginTop:2,}}
                                        size={15}
                                        name="clockcircleo"
                                    />
                                    <Text style={{fontSize:13,fontFamily:'ExoBold',opacity:0.6}}>22 Oct, 10:30 AM</Text>
                                </View>
                            </View>
                        
                        </View>
                       
                    </View>


                    <View style={{borderRadius: 1, borderWidth: 2, borderColor: 'lightgray', borderStyle: 'dashed', marginVertical: 12}}/>

                    <View style={styles.rowFlex}>
                        <View style={styles.rowFlex}>
                                <Text style={{fontFamily:'ExoBold',fontSize:17,opacity:0.6}}>Tony & Guy</Text>
                        </View>
                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={{fontFamily:'ExoBold',fontSize:13}}>16th Street Mall Denver</Text>
                            <Text style={{fontFamily:'ExoBold',fontSize:13,color:'grey'}}>
                                (321) 382-2381
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardBottom} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text
                        style={styles.cancelButton}
                        onPress={handleCancel}
                    >
                        Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text
                        style={styles.deleteButton}
                        onPress={handleDelete}
                    >
                        Delete</Text>
                </TouchableOpacity>
            </View>

                <View style={styles.bottom}>
                    <Text style={[styles.fontSize_18_bold, styles.underline]}>Postpond</Text>
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
            marginTop: '15%',
            // width:'100%',
            position: 'relative'
        },
        cardBottom: {
            borderColor: 'lightgray',
            borderWidth: 2,
            borderRadius: 5,
            borderStyle: 'dashed',
            position: 'relative',
            bottom: -16,
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

export default connect(mapStateToProps,null)(BookingDetail);

