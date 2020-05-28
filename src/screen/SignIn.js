import React from 'react'
import {View , Text , StyleSheet , TextInput, TouchableOpacity ,Image , ScrollView} from 'react-native'
import Button from '../component/Button'
import AntIcon from 'react-native-vector-icons/AntDesign'
import {connect} from 'react-redux'
import { loginRequest } from '../redux/authenticate/actions'
import gql from 'graphql-tag' 
import { useMutation, useQuery } from '@apollo/react-hooks'


const SIGNIN = gql `
    mutation abc ($email: String!, $password: String!, $deviceId: String!){
        loginUser(email: $email, 
      password: $password, deviceId: $deviceId)
        {
         _id
          email
          jwtToken {
            token
            createdAt
          }
          password
        }  
      }
    `

const SignIn = (props) =>{

    const [loginUser , {data , loading , error}] = useMutation(SIGNIN)

    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
       
    data ? props.navigation.replace('Welcome') : null

    console.log('Loading is >> ',loading)
    console.log('Data is >> ',data)
    console.log('Error is >> ',error)

   
    // console.log('Data is >>' , data)

    const handleSignIn = () =>{
        console.log('SignIn is Pressed' , email , password )
        
       loading !== true && loginUser(
            {
                variables: {
                    email:  `${email}`, password: `${password}` , deviceId: `1233`
                },
            } 
        )
             
    }
    const errorBorderColor = error ? 'red' : 'black'
   
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:20 }}>

                <View style={{marginTop:35}}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <AntIcon name="arrowleft" size={25} />
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:30,justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:120 , height:140 , backgroundColor:'#fff'}}>
                        <Image source={require('../../assets/signIn-avatar.png')} style={styles.image} />
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:25 , fontWeight:'bold'}}>Sign In</Text>
                    </View>
                </View>
                <View style={{width:'100%',marginTop:20}}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={{width:'80%',height:40,borderRadius:6,borderWidth:1 ,
                                borderColor:errorBorderColor}}
                            onChangeText= {val=>setEmail(val)}
                            value={email}
                            // autoFocus={true}
                            placeholder='Email'
                            returnKeyType='next'
                            onFocus={()=>console.log('Focused..')}
                            onSubmitEditing={()=>console.log('TEst>>>')}
                            onEndEditing={()=>console.log('Editing is done...')}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={{width:'80%',height:40,borderRadius:6,borderWidth:1,
                                borderColor:errorBorderColor}}
                            onChangeText= {val=>setPassword(val)}
                            value={password}
                            placeholder='Password'
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <Button title='Sign In' btnColor='#19479c' handleButton={handleSignIn}/>
                    </View>
                    <View style={{marginTop:15,flexDirection:'row',justifyContent:'center'}}>  
                        
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ForgotPassword')}>
                            <Text style={{fontSize:15}}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:15,flexDirection:'row',justifyContent:'center'}}>  
                        <Text style={{fontSize:15 , color:'grey'}}>Don't have an Account ? </Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
                            <Text style={{fontSize:15}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

// const mapStateToProps = (state) =>{
//     return{
//         signInState : state.loginReducer
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         signIn : (credential)=> dispatch(loginRequest(credential))
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
export default SignIn ;

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