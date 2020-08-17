import React from 'react'
import {View , Text , TextInput , TouchableOpacity , StyleSheet , ScrollView , RefreshControl} from 'react-native'
import Button from '../../../component/Button'
import EntypoIcon from 'react-native-vector-icons/Entypo'

const ChangePassword = (props) =>{

    const [oldPassword,setOldPassword] = React.useState(null)
    const [newPassword,setNewPassword] = React.useState(null)
    const [reConfirmPassword,setReConfirmPassword] = React.useState(null)

    const [isShowOldPass,setIsShowOldPass] = React.useState(false)
    const [isShowNewPass,setIsShowNewPass] = React.useState(false)
    const [isShowReConfirmPass,setIsShowReConfirmPass] = React.useState(false)



    const handleChangePassword = () =>{
        if(oldPassword == null && newPassword == null && reConfirmPassword == null){
            alert('Fields are empty!')
        }else if(reConfirmPassword !== newPassword){
            console.log('New Password does not match with Re-Confirm Password')
        }
    }

    return(
        <View style={styles.container}>
            {/* <ScrollView> */}
            
            <View style={{ alignItems:'center'}}>
                {/* <Text style={{fontSize:18}}>
                    ChangePassword
                </Text> */}
                <View style={{width:'90%' , height:45,borderRadius:20,borderWidth:0.2,justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>setIsShowOldPass(!isShowOldPass)}>
                   
                    <EntypoIcon name={isShowOldPass ? 'eye' : 'eye-with-line'} size={25} style={{alignSelf:'flex-end',paddingRight:10}}/>
                </TouchableOpacity>
                <TextInput 
                    value={oldPassword}
                    onChangeText={text => setOldPassword(text)}
                    placeholder='Old Password'
                    secureTextEntry={!isShowOldPass}
                    style={{width:'80%' , height:45,borderTopLeftRadius:20,borderBottomLeftRadius:20,paddingHorizontal:10,borderWidth:0.5 ,
                    borderRightWidth:0,
                    position:'absolute'
                }}
                />
                </View>
               

                <View style={{width:'90%' , height:45,borderRadius:20,borderWidth:0.2,justifyContent:'center' , marginTop:20}}>
                        
                        <TouchableOpacity onPress={()=>setIsShowNewPass(!isShowNewPass)}>
                            <EntypoIcon name={isShowNewPass ? 'eye' : 'eye-with-line'} size={25} style={{alignSelf:'flex-end',paddingRight:10}}/>
                        </TouchableOpacity>

                        <TextInput 
                            value={newPassword}
                            onChangeText={text => setNewPassword(text)}
                            placeholder='New Password'
                            secureTextEntry={!isShowNewPass}
                            style={{width:'80%' , height:45,borderTopLeftRadius:20,borderBottomLeftRadius:20,paddingHorizontal:10,borderWidth:0.5 ,
                            borderRightWidth:0,
                            position:'absolute' }}
                        />
                </View>
                
                <View style={{width:'90%' , height:45,borderRadius:20,borderWidth:0.2,justifyContent:'center' , marginTop:20}}>
                        
                    <TouchableOpacity onPress={()=>setIsShowReConfirmPass(!isShowReConfirmPass)}>
                        <EntypoIcon name={isShowReConfirmPass ? 'eye' : 'eye-with-line'} size={25} style={{alignSelf:'flex-end',paddingRight:10}}/>
                    </TouchableOpacity>
                        <TextInput 
                            value={reConfirmPassword}
                            onChangeText={text => setReConfirmPassword(text)}
                            placeholder='Reconfirm Password'
                            secureTextEntry={!isShowReConfirmPass}

                            style={{width:'80%' , height:45,borderTopLeftRadius:20,borderBottomLeftRadius:20,paddingHorizontal:10,borderWidth:0.5 ,
                            borderRightWidth:0,
                            position:'absolute'}}
                        />
                </View>
                
                <View style={{marginTop:15,width:'90%'}}>
                    <Button title='Change Password' btnColor='#1D194D' handleButton={handleChangePassword}/>
                </View>

            </View>
            {/* </ScrollView> */}
        </View>
    )
}

const mapStateToProps = (state) =>{
    return null
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            justifyContent:'center'
        }
    }
)

export default ChangePassword;