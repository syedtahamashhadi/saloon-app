import React from 'react'
import {View , Text , StyleSheet , TextInput, TouchableOpacity ,Image} from 'react-native'
import Button from '../component/Button'
import AntIcon from 'react-native-vector-icons/AntDesign'


const SignIn = () =>{
    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')


    return(
        <View style={styles.container}>
            <View style={{marginTop:35}}>
                <TouchableOpacity>
                    <AntIcon name="arrowleft" size={25} />
                </TouchableOpacity>
            </View>
            <View style={{marginTop:30,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:120 , height:140 , backgroundColor:'#fff'}}>
                    <Image source={require('../../assets/signIn-avatar.png')} style={styles.image} />
                </View>
                <View style={{marginTop:40}}>
                    <Text style={{fontSize:25 , fontWeight:'bold'}}>Sign In</Text>
                </View>
            </View>
            <View style={{width:'100%',marginTop:20}}>
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
                <View style={{marginTop:20}}>
                    <Button title='Sign In' btnColor='#19479c'/>
                </View>
                <View style={{marginTop:20,flexDirection:'row',justifyContent:'center'}}>  
                    <Text style={{fontSize:15 , color:'grey'}}>Don't have an Account ? </Text>
                    <TouchableOpacity>
                        <Text style={{fontSize:15}}>Sign In</Text>
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