import React , {useEffect} from 'react'
import {View , Text , StyleSheet , TextInput, TouchableOpacity , Image} from 'react-native'
import Button from '../component/Button'
import AntIcon from 'react-native-vector-icons/AntDesign'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { connect } from 'react-redux'


const RESEND_OTP = gql`
mutation abc($email: String!) {
    resendCode(email: $email)
    {
     email
    }  
  }

`


const EmailConfirm = (props) =>{

    console.log('Email Confirmation Props >>>>' , props)

    const [ resendOtp , {data, loading , error } ] = useMutation(RESEND_OTP)

    const [didIt,setDidIt] = React.useState(false)
    const [resend,setResend] = React.useState(false)

    console.log('Data is >>' , data)
    console.log('Loading is >>' , loading)
    console.log('Error is >>' , error)


    const handleButton = () =>{
        if(loading !== true){
            setDidIt(true)
            props.navigation.navigate('MFA' , 
                {
                    screen: 'signUp'
                }
            )
        }
       
    }

    const handleResend = () =>{
        console.log('Test')
        loading !== true && resendOtp(
            {
                variables:{
                    email: props.signUp.data.signupUser.email
                }
            }
        )
    }

    // useEffect(()=>{
    //     if(data){
    //         props.navigation.replace('SignIn')
    //     }
    // },[data])

    return(
        <View style={styles.container}>
            <View style={{marginTop:130,justifyContent:'center',alignItems:'center',backgroundColor:'#fff',
                        marginHorizontal:20}}>
                <View style={{width:120 , height:100 , backgroundColor:'#fff'}}>
                    <Image source={require('../../assets/email-confirmation.png')}  style={styles.image} />
                </View>
                <View style={{marginTop:40,alignSelf:'center' }}>
                    <Text style={{fontSize:30 ,fontFamily:'AbrilFatFace',textAlign:'center'}}>
                        Please Confirm your email address
                    </Text>
                </View>
            </View>
            <View style={{width:'100%',marginTop:20}}>
               
                <View style={{marginTop:20,marginHorizontal:20}}>
                    <TouchableOpacity onPress={()=>{setDidIt(true)}}>
                        <Button title='I did it' btnColor='#19479c' handleButton={handleButton}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:20,flexDirection:'row',justifyContent:'center'}}>  
                    <Text style={{fontSize:15 , color:'grey',fontFamily:'ExoRegular'}}>Don't get an email ?</Text>
                    <TouchableOpacity onPress={()=> handleResend()}>
                        <Text style={{fontSize:15,fontFamily:'ExoBold'}}>Resend</Text>
                    </TouchableOpacity>
                </View>
                { data && <View style={{justifyContent:'center',marginTop:10}}>
                    <Text style={{textAlign:'center', color:'green',fontFamily:'ExoRegular'}}>
                        Your OTP code has been sent to you
                    </Text>
                </View>}
            </View>
        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        signUp: state.signUpReducer
    }
}

export default connect(mapStateToProps,null)(EmailConfirm);

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            // marginHorizontal:20
        },
        inputContainer:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:20
        },
        image:{
            resizeMode:'cover',
            height:'100%',
            width:'100%'
        }
        
    }
)