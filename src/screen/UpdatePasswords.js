import React from 'react'
import { View , Text , ScrollView , TextInput , StyleSheet , ActivityIndicator, TouchableOpacity , SafeAreaView } from 'react-native'
import Button from '../component/Button'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useMutation } from '@apollo/react-hooks'
import Mutations from '../appolo/mutations'


const UpdatePasswords = (props) =>{

    const [updatePassword , {data , loading , error}] = useMutation(Mutations.UPDATE_PASSWORD)

    const [email,setEmail] = React.useState('')
    const [code,setCode] = React.useState('')
    const [newPassword,setNewPassword] = React.useState('')
    const [reenterPassword,setReenterPassword] = React.useState('')
    const [fieldErr,setFieldErr] = React.useState(null)

    const handleButton = () =>{
        if(email == '' && newPassword == '' && code == '' && reenterPassword == ''){
            setFieldErr('All fields are empty !')
        }else if(email == ''){
            setFieldErr('Enter Your Email !')
        }else if(newPassword == ''){
            setFieldErr('Enter Your Password !')
        }else if(reenterPassword == ''){
            setFieldErr('ReEnter Your Password !')
        }
        else if(code == '' ){
            setFieldErr('Enter Your 6 digit Code !')
        }
        else if(code.length<6){
            setFieldErr('Enter Your 6 digit Code !')
        }
        else{
            setFieldErr(null)
            loading !== true && updatePassword(
                {
                    variables: {
                        email:  `${email}` , code: `${code}` , newPassword: `${newPassword}` , reenterPassword: `${reenterPassword}`
                    },
                } 
            )
        }
        
       
    }
    React.useEffect(()=>{
        if(data){
            // setFieldErr(null)
            // console.log('Data is Fired >>>>>>>>>')
            // props.signIn(data)
            props.navigation.replace('SignIn')
        }else if(error && error.message){
            // let reqErr = (error && error.message) ? error.message.slice(15)  : null
            setFieldErr(error.message.slice(15))
        }else if(error){
            setFieldErr('Something Went Wrong! TryAgain')
        }
    },[data,error])

    const errorBorderColor = fieldErr ? 'red' : 'black'

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal:20}}>
                <View style={{marginTop:35 , flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <AntIcon name='arrowleft' size={25}/>
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                        <MaterialIcon name='onepassword' size={100} color='#49D3CE' />
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{fontSize:25 , textAlign:'center' ,fontFamily:'AbrilFatFace'}}>Update Password</Text>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:15 ,textAlign:'center', fontFamily:'ExoBold'}}>
                        Please enter new password & 6 digit code!
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1 ,
                            borderColor:errorBorderColor , padding:5}}
                        onChangeText= {val=>setEmail(val)}
                        value={email}
                        // autoFocus={true}
                        placeholder='Email'
                        returnKeyType='next'
                        onFocus={()=>console.log('Focused..')}
                        onSubmitEditing={()=>console.log('TEst>>>')}
                        onEndEditing={()=>console.log('Editing is done...')}
                        fontSize={16}
                        />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1 ,
                            borderColor:errorBorderColor , padding:5}}
                        onChangeText= {val=>setNewPassword(val)}
                        value={newPassword}
                        // autoFocus={true}
                        placeholder='New Password'
                        returnKeyType='next'
                        onFocus={()=>console.log('Focused..')}
                        onSubmitEditing={()=>console.log('TEst>>>')}
                        onEndEditing={()=>console.log('Editing is done...')}
                        fontSize={16}
                        secureTextEntry={true}

                        />
                </View>

                
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1 ,
                            borderColor:errorBorderColor , padding:5}}
                        onChangeText= {val=>setReenterPassword(val)}
                        value={reenterPassword}
                        // autoFocus={true}
                        placeholder='Re-enter Password'
                        returnKeyType='next'
                        onFocus={()=>console.log('Focused..')}
                        onSubmitEditing={()=>console.log('TEst>>>')}
                        onEndEditing={()=>console.log('Editing is done...')}
                        fontSize={16}
                        secureTextEntry={true}

                        />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1 ,
                            borderColor:errorBorderColor , padding:5}}
                        onChangeText= {val=>setCode(val)}
                        value={code}
                        // autoFocus={true}
                        placeholder='6-digit Code'
                        returnKeyType='next'
                        onFocus={()=>console.log('Focused..')}
                        onSubmitEditing={()=>console.log('TEst>>>')}
                        onEndEditing={()=>console.log('Editing is done...')}
                        fontSize={16}
                        />
                </View>

                <View style={{marginTop:'3%' , width:'100%' }}>
                    {fieldErr && <Text style={{color:'red' , textAlign:'center'}}>
                            {fieldErr}
                        </Text>}
                    
                    {loading && <ActivityIndicator size={20} color='#00ff00'/>}
                </View>
               
                <View style={{marginTop:5}}>
                    <Button title='Confirm' btnColor='#1D194D' handleButton={handleButton}/>
                </View>

            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        },
        inputContainer:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:20
        },
    }
)

export default UpdatePasswords;

