import React from 'rect'
import {View , Text , StyleSheet} from 'react-native'



const SignUp = () =>{

    return(
        <View style={styles.container}>
            <View style={{marginTop:35}}>

            </View>
            <View style={{marginTop:50,justifyContent:'center',alignItems:'center'}}>
                <View style={styles.badge}>

                </View>
                <View style={{marginTop:30}}>
                    <Text style={{fontSize:25 , fontColor:''}}>Create an Account</Text>
                </View>
            </View>
            <View style={{width:'100%'}}>
                <Button title='Sign Up'/>
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
        }
    }
)