import React from 'react'
import {View , Text , Image , TouchableOpacity , StyleSheet, ScrollView ,TextInput} from 'react-native'
import {Avatar} from 'react-native-elements'
import Button from '../component/Button'
import SocialCard from '../component/SocialCard'


const SetProfileInfo = () =>{

   
    const [fName , setFName] = React.useState('')
    const [email , setEmail] = React.useState('')
    const [lName , setLName] = React.useState('')
    const [phone , setPhone] = React.useState(null)
    const [dob, setDob] = React.useState(null)
    const [countryState , setCountryState] = React.useState(null)
    const [city , setCity] = React.useState('')
    const [address, setAddress] = React.useState(null)
    const [zipCode , setZipCode] = React.useState()
    const [gender,setGender] = React.useState('')
   
    const genderData = [{value:'Male'},{value:'Female'}]
    const socialData = [{icon:'facebook',link:'www.facebook.com',bColor:'#3b5998'},
                            {icon:'twitter',link:'www.twitter.com',bColor:'#00acee'},
                            {icon:'google',link:'www.gmail.com',bColor:'#00acee'}
                            ]
    const handleButton = (val) =>{
        console.log('Button is Pressed',val)
    }

    return(
        <View style={styles.container}>
            <View style={{marginTop:40,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20}}>Set Profile Info</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:10}}>
                <View style={styles.avatarContainer}>
                    <Avatar rounded source={require('../../assets/cat.jpg')} size={65} showEditButton
                        onEditPress={()=>console.log('Edit the avatar')}
                    />
                </View>
                <View style={{alignItems:'center',marginTop:20}}>
                    <TextInput 
                            style={styles.textInput}
                            onChangeText= {val=>setFName(val)}
                            value={fName}
                            placeholder='First Name'
                        />
                    <TextInput 
                            style={styles.textInput}
                            onChangeText= {val=>setLName(val)}
                            value={lName}
                            placeholder='Last Name'
                        />
                        <TextInput 
                            style={styles.textInput}
                            onChangeText= {val=>setEmail(val)}
                            value={email}
                            placeholder='Email'
                        />
                        <View style={styles.genderContainer}>
                            {genderData.map((val,index)=>{
                                let myStyle= val.value == gender ? styles.genderBtnPressed : styles.genderBtn
                                let textColor= val.value == gender ? '#49D3CE' : 'black'
                                return(
                                    <TouchableOpacity onPress={()=>setGender(val.value)} key={index}>
                                        <View style={myStyle}>
                                            <Text style={{fontSize:17 , color:textColor}}>{val.value}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                    
                        </View>
                        <TextInput 
                            style={styles.textInput}
                            onChangeText= {val=>setPhone(val)}
                            value={phone}
                            placeholder='Phone number'
                        />
                        <TextInput 
                            style={styles.textInput}
                            onChangeText= {val=>setDob(val)}
                            value={dob}
                            placeholder='DOB'
                        />
                        <TextInput 
                            style={styles.textInput}
                            onChangeText= {val=>setAddress(val)}
                            value={address}
                            placeholder='Address'
                        />
                        <TextInput 
                            style={styles.textInput}
                            onChangeText= {val=>setCity(val)}
                            value={city}
                            placeholder='City'
                        />
                        <TextInput 
                            style={styles.textInput}
                            onChangeText= {val=>setCountryState(val)}
                            value={countryState}
                            placeholder='State'
                        />
                        <TextInput 
                            style={styles.textInput}
                            onChangeText= {val=>setZipCode(val)}
                            value={zipCode}
                            placeholder='Zip Code'
                        />
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:15}}>Connect</Text>
                </View>

                <View style={{marginTop:10,flexDirection:'row',flex:1,justifyContent:'space-around',
                                marginHorizontal:25}}>
                    
                    {socialData.map((val,index)=>
                        <SocialCard link={val.link} icon={val.icon} bColor={val.bColor} />
                    )}

                </View>

                
            </ScrollView>

            <Button title='Continue' textSize={18} btnColor='#19479c' handleButton={handleButton}/>
            
        </View>
    )   
}

export default SetProfileInfo


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
        },
        avatarContainer:{
            marginTop:20,
            justifyContent:'center',
            alignItems:'center'
        },
        genderContainer:{
            flexDirection:'row',
            width:240,
            marginTop:5,
            marginBottom:15,
            justifyContent:'space-around'
        },
        button:{
            marginVertical:20,
        },
        socialCardsContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
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
        },
        genderBtn:{
            width:100,
            height:45,
            borderRadius:20,
            backgroundColor:'#fafafa',
            justifyContent:'center',
            alignItems:'center',
        },
        genderBtnPressed:{
            width:100,
            height:45,
            borderRadius:20,
            backgroundColor:'#fff',
            justifyContent:'center',
            alignItems:'center',
            borderWidth:2,
            borderColor:'#49D3CE',
        },
    }
)
