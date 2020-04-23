import React from 'react'
import {View , Text , StyleSheet , TextInput, TouchableOpacity , Image} from 'react-native'
import Button from '../component/Button'
import AntIcon from 'react-native-vector-icons/AntDesign'


const SignIn = () =>{
    const [didIt,setDidIt] = React.useState(false)
    const [resend,setResend] = React.useState(false)


    return(
        <View style={styles.container}>
            {/* <View style={{marginTop:35}}>
                <TouchableOpacity>
                    <AntIcon name="arrowleft" size={25} />
                </TouchableOpacity>
            </View> */}
            <View style={{marginTop:130,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                <View style={{width:120 , height:100 , backgroundColor:'#fff'}}>
                    <Image source={require('../../assets/email-confirmation.png')}  style={styles.image} />
                </View>
                <View style={{marginTop:40,alignSelf:'center' }}>
                    <Text style={{fontSize:30 , fontWeight:'bold'}}>Please Confirm your email address</Text>
                </View>
            </View>
            <View style={{width:'100%',marginTop:20}}>
               
                <View style={{marginTop:20}}>
                    <TouchableOpacity onPress={()=>{setDidIt(true)}}>
                        <Button title='I did it' btnColor='#19479c'/>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:20,flexDirection:'row',justifyContent:'center'}}>  
                    <Text style={{fontSize:15 , color:'grey'}}>Don't get an email ?</Text>
                    <TouchableOpacity onPress={()=>setResend(true)}>
                        <Text style={{fontSize:15}}>Resend</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default SignIn;

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