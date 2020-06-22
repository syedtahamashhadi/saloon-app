import React from 'react'
import {View , Text , StyleSheet , TextInput, TouchableOpacity, Image , ScrollView, ActivityIndicator} from 'react-native'
import Button from '../component/Button'
import AntIcon from 'react-native-vector-icons/AntDesign'
import SocialCard from '../component/SocialCard'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
import { connect } from 'react-redux'
import { signUpSuccess } from '../redux/authenticate/actions'


const SIGNUP = gql `mutation abc(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
  ) {
    signupUser(
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        phone: $phone
      )
    {
     email
    }  
  }`

const SignUp = (props) =>{

    const [signupUser , {data , loading ,error}] = useMutation(SIGNUP)

    const [firstName,setFirstName] = React.useState('')
    const [lastName,setLastName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [phone,setPhone] = React.useState('')
    const [fieldErr,setFieldErr] = React.useState(null)

    // props.signUpState.isSignUp == true ? props.navigation.replace('SignIn') : null 
    console.log('Loading is >> ',loading)
    console.log('Data is >> ',data)
    console.log('Error is >> ',error)

    
    const socialData = [{icon:'facebook',link:'www.facebook.com',bColor:'#3b5998'},
                        {icon:'twitter',link:'www.twitter.com',bColor:'#00acee'},
                        {icon:'google',link:'www.gmail.com',bColor:'#00acee'}
                        ]

    const handleButton = ()=>{
        console.log('Button is pressed' , typeof phone)
        switch (true) {
            case (firstName == '' && lastName == '' && email == '' && password == '' && phone == ''):
                setFieldErr('All fields are empty !')
                break;
            case (firstName == ''):
                setFieldErr('Enter Your First-Name !')
                break;
            case (lastName == ''):
                setFieldErr('Enter Your Last-Name !')
                break;
            case (email == ''):
                setFieldErr('Enter Your Email !')
                break;
            case (password == ''):
                setFieldErr('Enter Your Password !')
                break;
            case (phone == ''):
                setFieldErr('Enter Your Contact Number !')
                break;
           
            default:
                loading !== true && signupUser(
                    {
                        variables:{
                            firstName: firstName , lastName: lastName , email: email , password: password , phone: `${phone}`
                        }
                    }
                )
                break;
        }
        // if(firstName == '' && lastName == '' && email == '' && password == '' && phone == ''){
        //     setFieldErr('All fields are empty !')
        // }else if(firstName == ''){
        //     setFieldErr('Enter Your First-Name !')
        // }else if(lastName == '' ){
        //     console.log('Last Name')
        //     setFieldErr('Enter Your Last-Name !')
        // }else if(email == ''){
        //     setFieldErr('Enter Your Email !')
        // }else if(password == ''){
        //     setFieldErr('Enter Your Password !')
        // }else if(phone == ''){
        //     setFieldErr('Enter Your Contact Number !')
        // }else if(email.includes('@') == false){
        //     setFieldErr('Email Format is not Correct !')
        // }else{
        //     loading !== true && signupUser(
        //         {
        //             variables:{
        //                 firstName: firstName , lastName: lastName , email: email , password: password , phone: `${phone}`
        //             }
        //         }
        //     )
        // }
    }

    React.useEffect(()=>{
        
        if(data){
            props.signUp(data),
            props.navigation.replace('EmailConfirm',
                {
                    screen: 'signUp'
                }
            )
        }else if(error && error.message){
            setFieldErr(error.message.slice(15))
        }else if(error){
            setFieldErr('Something Went Wrong! TryAgain')
        }
    },[data,error])
    const errorBorderColor = fieldErr ? 'red' : 'black'

    console.log('Border color >>' , errorBorderColor , fieldErr , data)
    
    return(
        // <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            {loading && <View style={{position:'absolute',width:'100%',zIndex:9999,}}>
                <View style={{height:'100%',justifyContent:'center',alignItems:'center',marginTop:'50%'}}>
                    <ActivityIndicator size='large' color='#00ff00'/>
                </View>
            </View>}
            <ScrollView showsVerticalScrollIndicator={false}>
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
                    <Text style={{fontSize:25 , fontFamily:'AbrilFatFace'}}>Create an Account</Text>
                </View>
            </View>
            <View style={{width:'100%',marginTop:5}}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1,paddingLeft:10,
                                borderColor:errorBorderColor}}
                        onChangeText= {val=>setFirstName(val)}
                        value={firstName}
                        placeholder='First Name'
                        fontSize={16}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1,paddingLeft:10,
                                borderColor:errorBorderColor}}
                        onChangeText= {val=>setLastName(val)}
                        value={lastName}
                        placeholder='Last Name'
                        fontSize={16}

                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1,paddingLeft:10,
                        borderColor:errorBorderColor}}
                        onChangeText= {val=>setEmail(val)}
                        value={email}
                        placeholder='Email'
                        fontSize={16}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1,paddingLeft:10,
                        borderColor:errorBorderColor}}
                        onChangeText= {val=>setPassword(val)}
                        value={password}
                        placeholder='Password'
                        secureTextEntry={true}
                        fontSize={16}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1,paddingLeft:10,
                        borderColor:errorBorderColor}}
                        onChangeText= {val=>setPhone(val)}
                        value={phone}
                        placeholder='Phone'
                        fontSize={16}
                    />
                </View>
                <View style={{marginTop:'3%' , width:'100%' }}>
                        {fieldErr && <Text style={{color:'red' , textAlign:'center'}}>
                                {fieldErr}
                        </Text> }
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

                
                <View style={{marginTop:30}}>
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
            </ScrollView>
        </View>
        // {/* </ScrollView> */}
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

const mapDispatchToProps = (dispatch)=>{
    return{
        signUp: (data) => dispatch(signUpSuccess(data))
    }
}

export default connect(null,mapDispatchToProps)(SignUp);


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