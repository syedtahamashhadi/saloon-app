import React from 'react'
import {View , Text , StyleSheet , TextInput, TouchableOpacity,Image} from 'react-native'
import Button from '../component/Button'
import AntIcon from 'react-native-vector-icons/AntDesign'
import SocialCard from '../component/SocialCard'


const SignUp = () =>{
    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [loginPage,setLoginPage] = React.useState(false)

    const socialData = [{icon:'facebook',link:'www.facebook.com',bColor:'#3b5998'},
                        {icon:'twitter',link:'www.twitter.com',bColor:'#00acee'},
                        {icon:'google',link:'www.gmail.com',bColor:'#00acee'}
                        ]

    const handleButton = ()=>{
        console.log('Button is pressed')
    }
    
    return(
        <View style={styles.container}>
            <View style={{marginTop:35}}>
                <TouchableOpacity>
                    <AntIcon name="arrowleft" size={25} />
                </TouchableOpacity>
            </View>
            <View style={{marginTop:0,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:90 , height:110 }}>
                    <Image source={require('../../assets/create-account-badge.png')} style={styles.image} />
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:25 , fontWeight:'bold'}}>Create an Account</Text>
                </View>
            </View>
            <View style={{width:'100%',marginTop:5}}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1}}
                        onChangeText= {val=>setEmail(val)}
                        value={email}
                        placeholder='Email'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1}}
                        onChangeText= {val=>setName(val)}
                        value={name}
                        placeholder='Name'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width:'80%',height:40,borderRadius:6,borderWidth:1}}
                        onChangeText= {val=>setName(val)}
                        value={name}
                        placeholder='Name'
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
                <View style={{marginTop:44}}>
                    <Button title='Sign Up' btnColor='#19479c' handleButton={handleButton}/>
                </View>
                <View style={{marginTop:0,flexDirection:'row',justifyContent:'center'}}>  
                    <Text style={{fontSize:15 , color:'grey'}}>Already Signed Up ? </Text>
                    <TouchableOpacity onPress={()=>setLoginPage(true)}>
                        <Text style={{fontSize:15}}>SignIn</Text>
                    </TouchableOpacity>
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