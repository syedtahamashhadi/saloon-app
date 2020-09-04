import React from 'react'
import {View , Text , StyleSheet , TextInput, TouchableOpacity, Image , ScrollView, ActivityIndicator} from 'react-native'
import Button from '../component/Button'
import AntIcon from 'react-native-vector-icons/AntDesign'

const UpdateUserProfile = (props) =>{


    const [firstName,setFirstName] = React.useState('')
    const [lastName,setLastName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [country,setCountry] = React.useState('')
    const [phone,setPhone] = React.useState('')
    const [fieldErr,setFieldErr] = React.useState(null)


    const handleButton = ()=>{
        console.log('Button is pressed' , typeof phone)
        switch (true) {
            case (firstName == '' && lastName == '' && email == '' && country == '' && phone == ''):
                setFieldErr('All fields are empty !')
                break;
            case (firstName == ''):
                setFieldErr('Enter Your First-Name !')
                break;
            case (lastName == ''):
                setFieldErr('Enter Your Last-Name !')
                break;
            case (email == ''):
                setFieldErr('Enter Your Email !')
                break;
            case (country == ''):
                setFieldErr('Enter Your country !')
                break;
            case (phone == ''):
                setFieldErr('Enter Your Contact Number !')
                break;
            case (phone.length < 12):
                setFieldErr('Format of Contact Number is wrong !')
                break;
            default:
                loading !== true && signupUser(
                    {
                        variables:{
                            firstName: firstName , lastName: lastName , email: email , country: country , phone: `${phone}`
                        }
                    }
                )
                break;
        }

    }

    
    
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal:20}}>
            <View style={{marginTop:35}}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <AntIcon name="arrowleft" size={25} />
                </TouchableOpacity>
            </View>
            <View style={{marginTop:0,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:90 , height:50 }}>
                    <Image source={require('../../assets/create-account-badge.png')} style={styles.image} />
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:25 , fontFamily:'AbrilFatFace'}}>Edit Profile</Text>
                </View>
            </View>
            <View style={{width:'100%',marginTop:5}}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputField}
                        onChangeText= {val=>setFirstName(val)}
                        value={firstName}
                        placeholder='First Name'
                        fontSize={16}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputField}
                        onChangeText= {val=>setLastName(val)}
                        value={lastName}
                        placeholder='Last Name'
                        fontSize={16}

                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputField}
                        onChangeText= {val=>setEmail(val)}
                        value={email}
                        placeholder='Email'
                        fontSize={16}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputField}
                        onChangeText= {val=>setCountry(val)}
                        value={country}
                        placeholder='Country'
                        secureTextEntry={true}
                        fontSize={16}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputField}
                        onChangeText= {val=>setPhone(val)}
                        value={phone}
                        placeholder='Phone'
                        fontSize={16}
                    />
                </View>

                <View style={{marginTop:30}}>
                    <Button title='Update' btnColor='#1D194D' handleButton={handleButton}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>props.navigation.goBack()}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>Cancel</Text>
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}


const mapDispatchToProps = (dispatch)=>{
    return{
        signUp: (data) => dispatch(signUpSuccess(data))
    }
}

export default UpdateUserProfile;


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            // marginHorizontal:20
        },
        inputContainer:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:20
        },
        image:{
            resizeMode:'contain',
            height:'100%',
            width:'100%'
        },
        inputField:{
            width:'100%',
            height:50,
            borderRadius:25,
            borderWidth:1,
            paddingLeft:10,
            borderColor:'gray'
        },
        button:{
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:-8,
            borderRadius: 25,
            backgroundColor: '#49D3CE'
        }
    }
)