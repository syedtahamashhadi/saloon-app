import React from 'react'
import {View , Text , TouchableOpacity , TextInput , StyleSheet , Picker} from 'react-native'
import { connect } from 'react-redux'
import { State, ScrollView } from 'react-native-gesture-handler'
import Button from '../../../component/Button'
import { useMutation } from '@apollo/react-hooks'
import AsyncStorage from '@react-native-community/async-storage'
// import { Picker } from '@react-native-community/picker'
import Mutations from '../../../appolo/mutations'


const RegisterComplaint = (props) =>{
    console.log('Register Complain Props >>' , props)
    const [selectedSaloon,setSlectedSaloon] = React.useState('')
    const [complainDesc , setComplainDesc] = React.useState('')
    const [mySaloons,setMySaloons] = React.useState([...props.nearestSaloon])

    console.log('Selected Saloon is  >>' , selectedSaloon)

    const [sendComplainMutation , { data , loading , error }] = useMutation(Mutations.SEND_COMPLAIN)

    const handleButton = () =>{
        console.log('Saloon id >>' , typeof selectedSaloon , ' Discription >> ' , typeof complainDesc , 'token >>' , props.token)
       
        async function getToken(){
            try {
                const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
                if(token !== null && loading !== true){
                    sendComplainMutation(
                        {
                            variables:{
                                id: selectedSaloon , desc: complainDesc
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

        if(complainDesc !== '' && selectedSaloon !== ''){
            getToken()
            // console.log('Complain Desc >>' , complainDesc , '  ' , selectedSaloon)
        }else{
            alert('Select Saloon or Enter Desc')
        }
    }

    console.log('Data >> ' , data)
    console.log('Loading >> ' , loading)
    console.log('Error >> ' , error)

    React.useEffect(()=>{
        console.log('Saloons before >>>', mySaloons)
        let dummyData = {displayName:'---Select Saloon---' , _id: null}
        setMySaloons([dummyData , ...props.nearestSaloon])
        // console.log('Saloons after >>>', mySaloons)

    },[])

    console.log('Saloons after >>>', mySaloons)

    React.useEffect(()=>{
        if(data){
            setComplainDesc('')
            alert('Your Complain Has Been Registered Thanks...')
        }else if(error){
            alert('Something Went Wrong Try Again !')
        }
    },[data,error])

    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:20}}>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                                mySaloons.map((val,index)=>{
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
                            multiline = {true}
                            // placeholderTextColor='red'
                        />
                    </View>
                    
                    <View style={{marginTop:15 , width:'100%'}}>
                        <Button handleButton={handleButton} title='Send' btnColor='#1D194D'/>
                    </View>

                </View>
                </ScrollView>
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