import React from 'react'
import {View , Text , StyleSheet , TextInput, TouchableOpacity , Image} from 'react-native'
import Button from '../component/Button'


const SignUp = () =>{
    const [name,setName] = React.useState('')

    const handleButtonPressed = () =>{
        console.log('Button is pressed')
    }

    return(
        <View style={styles.container}>
            <View style={{marginTop:120,justifyContent:'center',alignItems:'center'}}>
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
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1}}
                        onChangeText= {val=>setName(val)}
                        value={name}
                        placeholder='Your Email'
                    />
                </View>
                <View style={{marginTop:20}}>
                    <Button title='Reset Password' btnColor='#19479c' textSize={14}/>
                </View>
            </View>
        </View>
    )
}


export default SignUp;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            marginHorizontal:20
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