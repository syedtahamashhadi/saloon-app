import React from 'react'
import {View , Text , StyleSheet , TextInput, TouchableOpacity,Image} from 'react-native'
import Button from '../component/Button'
import AntIcon from 'react-native-vector-icons/AntDesign'
import SocialCard from '../component/SocialCard'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
import { connect } from 'react-redux'
import { signUpRequest } from '../redux/authenticate/actions'


const SIGNUP = gql `mutation abc(
    $email: String!
    $password: String!
    $userName: String!
    $phone: String!
  ) {
    signupUser(
        email: $email
        password: $password
        userName: $userName
        phone: $phone
      )
    {
     email
    }  
  }`

const SignUp = (props) =>{

    const [signupUser , {data , loading ,error}] = useMutation(SIGNUP)

    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [phone,setPhone] = React.useState('')

    // props.signUpState.isSignUp == true ? props.navigation.replace('SignIn') : null 
    console.log('Loading is >> ',loading)
    console.log('Data is >> ',data)
    console.log('Error is >> ',error)

    
    const socialData = [{icon:'facebook',link:'www.facebook.com',bColor:'#3b5998'},
                        {icon:'twitter',link:'www.twitter.com',bColor:'#00acee'},
                        {icon:'google',link:'www.gmail.com',bColor:'#00acee'}
                        ]

    const handleButton = ()=>{
        console.log('Button is pressed')

        signupUser(
            {
                variables:{
                    userName: name , email: email , password: password , phone: phone
                }
            }
        )
    }
    const errorBorderColor = error ? 'red' : 'black'
    
    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:20}}>
            <View style={{marginTop:35}}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <AntIcon name="arrowleft" size={25} />
                </TouchableOpacity>
            </View>
            <View style={{marginTop:0,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:90 , height:50 }}>
                    <Image source={require('../../assets/create-account-badge.png')} style={styles.image} />
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:25 , fontWeight:'bold'}}>Create an Account</Text>
                </View>
            </View>
            <View style={{width:'100%',marginTop:5}}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1,paddingLeft:10,
                                borderColor:errorBorderColor}}
                        onChangeText= {val=>setName(val)}
                        value={name}
                        placeholder='Email'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1,paddingLeft:10,
                        borderColor:errorBorderColor}}
                        onChangeText= {val=>setEmail(val)}
                        value={email}
                        placeholder='Name'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1,paddingLeft:10,
                        borderColor:errorBorderColor}}
                        onChangeText= {val=>setPassword(val)}
                        value={password}
                        placeholder='Phone'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1,paddingLeft:10,
                        borderColor:errorBorderColor}}
                        onChangeText= {val=>setPhone(val)}
                        value={phone}
                        placeholder='Phone'
                    />
                </View>
                <View style={{alignItems:'center',marginTop:12}}>
                    <Text style={{fontSize:15}}>Connect</Text>
                </View>

                <View style={{marginTop:15,flexDirection:'row',flex:1
                        ,justifyContent:'space-around',marginHorizontal:25}}>
                    {socialData.map((val,index)=>
                        <SocialCard link={val.link} icon={val.icon} bColor={val.bColor} />
                    )}
                </View> 
                <View style={{marginTop:60}}>
                    <Button title='Sign Up' btnColor='#19479c' handleButton={handleButton}/>
                </View>
                {/* <View style={{marginTop:0,flexDirection:'row',justifyContent:'center'}}>  
                    <Text style={{fontSize:15 , color:'grey'}}>Already Signed Up ? </Text>
                    <TouchableOpacity onPress={()=>setLoginPage(true)}>
                        <Text style={{fontSize:15}}>SignIn</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
            </View>
        </View>
    )
}

{/* <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:15}}>Connect</Text>
                </View>

                <View style={{marginTop:10,flexDirection:'row',flex:1
                        ,justifyContent:'space-around',width:'100%'}}>
                    {socialData.map((val,index)=>
                        <SocialCard link={val.link} icon={val.icon} bColor={val.bColor} />
                    )}
                </View> */}


// const mapStateToProps = (state) =>{
//     return{
//         signUpState : state.signUpReducer
//     }
// }

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         signUp: (credential) => dispatch(signUpRequest(credential))
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
export default SignUp


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
            resizeMode:'contain',
            height:'100%',
            width:'100%'
        }
    }
)