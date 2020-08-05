import React from 'react'
import {View,Text,StyleSheet , TextInput , ScrollView} from 'react-native'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'
import Button from '../../../component/Button'
import Mutations from '../../../appolo/mutations'
import { useMutation } from '@apollo/react-hooks'
import AsyncStorage from '@react-native-community/async-storage'


const PaymentSetting= () =>{
    //getUserCards
    const [name,setName] = React.useState('')
    const [number,setNumber] = React.useState(null)
    const [expDate,setExpDate] = React.useState(null)
    const [expMonth,setExpMonth] = React.useState(null)
    const [expYear,setExpYear] = React.useState(null)
    const [cv,setCv] = React.useState(null)

    const [addPaymentCard , {data , loading , error}]  = useMutation(Mutations.ADD_PAYMENT_CARD) 


    // const handleBack = ()=>{
    //     console.log('Back is Pressed...')
    // }

    const getToken = async() =>{
        try {
            const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')

            if(token !== null){
                loading !== true && addPaymentCard(
                    {
                        variables:{
                            number: number , exp_month: expDate.slice(0,2) , exp_year: expDate.slice(3,5) , cvc: cv
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
            alert('Error')
        }
    }

    const handleButton = () =>{
        console.log('Button is Pressed....')

        if(name == ''){
            alert('Name Format is not correct')
        }else if(number == null || number.length !== 16){
            alert('Card Number Format is not correct')
        }else if(/^\d{2}\-\d{2}$/.test(expDate) == false){
            alert('Exp Date Format is not Correct')
        }else if(/^[0-9]{3,4}$/.test(cv) == false){
            alert('CV format is not correct')
        }else{
            // alert('Payment is done')
            getToken()
        }  
    }

    console.log('Loading >>>' , loading)

    React.useEffect(()=>{
        if(data){
            alert('Congrats Your Card Has Been Added')
            console.log('Data >>>' , data)
        }else if(error){
            console.log('Error >>>' , error)
            alert('Something went Wrong TryAgain!')
        }
    },[data,error])

    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={{alignItems:'center'}}>
          
            <View style={{marginTop:15}}>
                <Text style={{fontSize:20}}>Select Payment Method</Text>
            </View>
           
            <View style={styles.cardsContainer}>
                <AwsomeIcon name='cc-visa' size={50} color='blue' />
            
                <AwsomeIcon name='cc-mastercard' size={50} color='black'/>
            </View>
            
            <View style={styles.inputsContainer}>
                <Text style={{marginRight:150}}>Cardholder name</Text>
                <TextInput
                    onChangeText={text => setName(text)}
                    value={name}
                    style={styles.textInput}
                />
            </View>

            <View style={styles.inputsContainer}>
                <Text style={{marginRight:175}}>Card Number</Text>
                <TextInput
                    onChangeText={text => setNumber(text)}
                    value={number}
                    style={styles.textInput}
                    secureTextEntry={true}
                    keyboardType={'numeric'}

                />
            </View>

            <View style={styles.smallInputMainContainer}>
                <View style={styles.smallInputsContainer}>
                    <Text style={{marginRight:45, fontSize:12}}>Expiry date</Text>
                    <TextInput
                        onChangeText={text => setExpDate(text)}
                        value={expDate}
                        style={styles.smallTextInput}
                        placeholder='04-06'
                        keyboardType={'numeric'}

                    />
                </View>
                <View style={styles.smallInputsContainer}>
                    <Text style={{marginRight:80 , fontSize:12}}>CVV</Text>
                    <TextInput
                        onChangeText={text => setCv(text)}
                        value={cv}
                        style={styles.smallTextInput}
                        placeholder='808'
                        keyboardType={'numeric'}

                    />
                </View>
            </View>
           
            </View>
            <View style={{marginTop:10 , marginHorizontal:20 }}>
                <Button title='Apply Changes' textSize={18} handleButton={handleButton}/>
            </View>
            </ScrollView>
        </View>
    )
}


export default PaymentSetting;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            // alignItems:'center'
        },
        cardsContainer:{
            marginTop:20,
            flexDirection:'row',
            width:'50%',
            height:50,
            justifyContent:'space-around',
            alignItems:'center',
            marginBottom:5
        },
        card:{
            width:65,
            height:45,
            backgroundColor:'blue',
            borderWidth:2,
            borderColor:'grey',
            borderRadius:10,
        },
        inputsContainer:{
            alignItems: 'center',
            backgroundColor:'#fafafa',
            borderRadius:10,
            padding:5,
            width:'80%',
            height:60,
            borderWidth:1,
            borderColor:'grey',
            marginTop:20
        },
        textInput:{
            width:260,
            height:25,
            marginTop:2,
            marginLeft:5,
            marginBottom:20,
            fontSize:20,
        },
        smallInputMainContainer:{
            marginTop:20,
            flexDirection:'row',
            width:'80%',
            height:60,
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:5
        },
        smallInputsContainer:{
            alignItems: 'center',
            backgroundColor:'#fafafa',
            borderRadius:35,
            padding:5,
            width:140,
            height:60,
            borderWidth:1,
            borderColor:'grey',
        },
        smallTextInput:{
            width:110,
            height:25,
            marginTop:2,
            marginLeft:5,
            marginBottom:20,
            fontSize:20,
        },
       
    }
)