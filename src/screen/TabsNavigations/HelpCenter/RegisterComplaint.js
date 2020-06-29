import React from 'react'
import {View , Text , TouchableOpacity , TextInput , StyleSheet , Picker} from 'react-native'
import { connect } from 'react-redux'
import { State } from 'react-native-gesture-handler'
import Button from '../../../component/Button'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
// import { Picker } from '@react-native-community/picker'


const SEND_COMPLAIN = gql `
mutation abc($id: String! , $desc: String!) {
    addComplaints(salonId: $id, discription: $desc)
    {
      _id
    }  
  }
`


const RegisterComplaint = (props) =>{
    console.log('Register Complain Props >>' , props)
    const [selectedSaloon,setSlectedSaloon] = React.useState('')
    const [complainDesc , setComplainDesc] = React.useState('')
    console.log('Selected Saloon is  >>' , selectedSaloon)

    const [sendComplain , { data , loading , error }] = useMutation(SEND_COMPLAIN)

    const handleButton = () =>{
        console.log('Saloon id >>' , typeof selectedSaloon , ' Discription >> ' , typeof complainDesc , 'token >>' , props.token)
        
        if(selectedSaloon != '' && complainDesc != ''){
            loading !== true && sendComplain(
                {
                    variables:{
                        id: selectedSaloon , desc: complainDesc
                    },
                    context:{
                        headers:{
                            authorization: props.token
                        }
                    }
                }
            )
        }
        
    }

    console.log('Data >> ' , data)
    console.log('Loading >> ' , loading)
    console.log('Error >> ' , error)


    React.useEffect(()=>{
        if(data){
            alert('Your Complain Has Been Registered Thanks...')
        }else if(error){
            alert('Something Went Wrong Try Again !')
        }
    },[data,error])

    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:20}}>
                <View style={{marginTop:40}}>
                    {/* <Text style={{fontSize:18}}>
                        Register Complaint
                    </Text> */}
                    <View style={{
                            height:60 ,
                            width:'100%',
                            borderRadius:40,
                            backgroundColor:'#f5f9ff',
                            overflow:'hidden',
                            paddingHorizontal:20
                        }}>
                        <Picker 
                            selectedValue={selectedSaloon}
                            style={{
                                height:60 ,
                                width:'100%',
                                // paddingLeft:20,
                                // paddingRight:20

                                // borderRadius:40,
                                // backgroundColor:'powderblue'
                            }}
                            onValueChange={(val,index)=>{
                                setSlectedSaloon(val)
                            }}
                            prompt='Select Company'
                            // mode='dropdown'
                        >
                            {
                                props.nearestSaloon.map((val,index)=>{
                                    return(
                                        <Picker.Item label={val.displayName} 
                                            value={val._id}/>
                                    )
                                })
                            }
                        </Picker>
                    </View>
                    
                    {/* <Text>Test</Text> */}
                    <View style={{marginTop:0 , width:'100%'}}>
                        <TextInput
                            style={{
                                width:'100%',
                                height:150,
                                backgroundColor:'#f5f9ff',
                                marginTop:20,
                                borderRadius:40,
                                padding:20,
                                // justifyContent:'flex-start',
                                // alignItems: 'flex-start'
                                textAlignVertical:'top',
                                fontSize:18
                            }}
                            onChangeText={ text => setComplainDesc(text)}
                            value={complainDesc}
                            placeholder='Description'
                            // placeholderTextColor='red'
                        />
                    </View>
                    
                    <View style={{marginTop:15 , width:'100%'}}>
                        <Button handleButton={handleButton} title='Send' btnColor='#1D194D'/>
                    </View>

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
        }
    }
)

const mapStateToProps = (state) =>{
    return{
        mfa : state.mfaReducer.data ,
        token : state.mfaReducer.token ,
        nearestSaloon: state.nearestSaloonReducer.data.getNearestSalons
    }
}

export default connect(mapStateToProps,null)(RegisterComplaint);