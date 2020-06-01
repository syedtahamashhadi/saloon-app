import React from 'react'
import {View , Text , StyleSheet , TextInput, TouchableOpacity , Image} from 'react-native'
import Button from '../component/Button'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'
import { forgotPasswordSuccess } from '../redux/authenticate/actions'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const FORGOT_PASSWORD= gql `
    mutation abc($email: String!) {
        resetPassword(email: $email)
        {
        email
        }  
    }
`

const ForgotPassword = (props) =>{
    const [email,setEmail] = React.useState('')

    const [forgotPasswordPost,{data,loading,error}]=useMutation(FORGOT_PASSWORD)

    // props.forgotPasswordState.isForgotPasswordRequestSuccess == true ? props.navigation.push('SignIn') : null

    const handleButton = () =>{
        console.log('Button is pressed')
        props.forgotPassword({email:email})
        // console.log('Store State is >>', storeState)

        loading !== true && forgotPasswordPost(
            {
                variables: {
                    email: `${email}`
                }
            }
        )
    }

    React.useEffect(()=>{
        if(data){
            props.forgotPassword(data)
            props.navigation.replace('SignIn')
        }
    },[data])

    const errorBorderColor = error ? 'red' : 'black'

    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:20}}>
            <View style={{marginTop:35}}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <AntIcon name="arrowleft" size={25} />
                </TouchableOpacity>
            </View>
            <View style={{marginTop:80,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:120 , height:150 , backgroundColor:'#fff'}}>
                    <Image source={require('../../assets/unlock-forgot-password.png')} style={styles.image} />
                </View>
                <View style={{marginTop:40}}>
                    <Text style={{fontSize:25 , fontWeight:'bold'}}>Forgot Password?</Text>
                </View>
            </View>
            <View style={{width:'100%',marginTop:20}}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1,borderColor:errorBorderColor}}
                        onChangeText= {val=>setEmail(val)}
                        value={email}
                        placeholder='Your Email'
                    />
                </View>
                {error && <View style={{marginTop:'1%',alignItems:'center'}}>
                    <Text style={{fontSize:12,fontWeight:'bold'}}>User Does Not Found</Text>
                </View>}
                <View style={{marginTop:20}}>
                    <Button title='Reset Password' handleButton={handleButton} 
                            btnColor='#19479c' textSize={14} />
                </View>
            </View>
            </View>
        </View>
    )
}

// const mapStateToProps = (state) =>{
//     return{
//         forgotPasswordState: state.forgotPasswordReducer
//     }
// }

const mapDispatchToProps = (dispatch) =>{
    return{
        forgotPassword: (data)=> dispatch(forgotPasswordSuccess(data))
    }
}

export default connect(null,mapDispatchToProps)(ForgotPassword);

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