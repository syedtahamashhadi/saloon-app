import React from 'react'
import {View , Text , TextInput ,StyleSheet , ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../component/Button'

const MFA = () =>{

    const [otp,setOtp] = React.useState(null)

    const handleButton=()=>{
        console.log('Button is Pressed...')
    }

    return(
        <View style={styles.container}>
            <View style={{width:120,height:100,marginTop:120,alignItems:'center'}}>
                <Icon name='onepassword' size={100} color='#49D3CE'/>
            </View>
            <View style={{marginTop:30}}>
                <Text style={{fontSize:35 , fontWeight:'bold'}}>OTP</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{fontSize:15 , fontWeight:'bold'}}>Please enter the 4 digit code!</Text>
            </View>

            <ScrollView >
                <View style={{alignItems:'center'}}>
                    <TextInput 
                        style={styles.inputContainer}
                        onChangeText= {val=>setOtp(val)}
                        value={otp}
                        placeholder='Enter Code'
                        textAlign={'center'}
                        keyboardType={'numeric'}
                    />
                </View>
                
                <View style={{marginTop:50}}>
                    <Button title='Submit' handleButton={handleButton}/>
                </View>
            </ScrollView>
           
        </View>
    )
} 


export default MFA;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            alignItems:'center',
        },
        inputContainer:{
            width:120,
            height:40,
            borderRadius:6,
            borderWidth:1,
            marginTop:35,
            fontSize:20,
            backgroundColor:'#fafafa',
        },
    }
)
