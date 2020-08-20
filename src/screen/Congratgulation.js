import React from 'react'
import {View , Text , StyleSheet , TextInput, TouchableOpacity , Image} from 'react-native'
import Button from '../component/Button'


const SignUp = (props) =>{

    const handleButton = () =>{
        props.navigation.navigate('SetProfileInfo')
    }

    const handleSkip = () =>{
        props.navigation.replace('Map')
    }

    return(
        <View style={styles.container}>
            <View style={{marginTop:120,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:150 , height:150 , backgroundColor:'#fff'}}>
                    <Image source={require('../../assets/congrats-check.png')} style={styles.image} />
                </View>
                <View style={{marginTop:40}}>
                    <Text style={{fontSize:25 , fontFamily:'AbrilFatFace'}}>Congratulations!</Text>
                </View>
            </View>
            <View style={{width:'100%',marginTop:80}}>
                <View style={{marginTop:20,marginHorizontal:20}}>
                    <Button title='Set Up Profile' btnColor='#19479c' textSize={14} handleButton={handleButton}/>
                </View>
            </View>
            <View style={{marginTop:20,flexDirection:'row',justifyContent:'center'}}>  
                    <TouchableOpacity onPress={()=>handleSkip()}>
                        <Text style={{fontSize:15 ,fontFamily:'ExoRegular'}}>Skip</Text>
                    </TouchableOpacity>
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