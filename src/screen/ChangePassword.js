import React from 'react'
import { View , Text , TextInput ,StyleSheet} from 'react-native'
import Button from '../component/Button'

const ChangePassword = () =>{
    
    const [currentPswd , setCurrentPswd] = React.useState('')
    const [pswd,setPswd] = React.useState('')
    const [confirmPswd,setConfirmPswd] = React.useState('')

    const handleButton = ()=>{
        console.log('Button is Pressed...')
    }

    return(
        <View style={styles.container}>
            <View style={{marginTop:40,}}>
                <Text style={{fontSize:20}}>Change Password</Text>
            </View>

            <View style={{marginTop:20,width:'100%' , height:250,backgroundColor:'#fff',alignItems:'center'}}>
                <TextInput 
                    style={styles.textInput}
                    onChangeText= {val=>setCurrentPswd(val)}
                    value={currentPswd}
                    placeholder='Current Password'
                    secureTextEntry={true}

                />
                <TextInput 
                    style={styles.textInput}
                    onChangeText= {val=>setPswd(val)}
                    value={pswd}
                    placeholder='Password'
                    secureTextEntry={true}

                />
                <TextInput 
                    style={styles.textInput}
                    onChangeText= {val=>setConfirmPswd(val)}
                    value={confirmPswd}
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                />
            </View>
            <Button title='Confirm' handleButton ={handleButton}/>
        </View>
    )
}

export default ChangePassword ;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            // justifyContent:'center',
            alignItems:'center',
            marginHorizontal:20
        },
        textInput:{
            width:'80%',
            height:35,
            borderRadius:10,
            borderWidth:1,
            marginBottom:15,
            backgroundColor:'#fafafa',
            textAlignVertical:'center',
            paddingLeft:10,
            marginTop:20
        },
    }
)