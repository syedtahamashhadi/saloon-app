import React from 'react'
import {View , Text , Image , TouchableOpacity , Dimensions, StyleSheet} from 'react-native'
import Chat from '../component/Chat'
import Button from '../component/Button'
import { guestUserSuccess } from '../redux/authenticate/actions'
import { connect } from 'react-redux'


const Welcome = (props) =>{
    console.log('Welcome Props >>',props)
    
    const handleSignIn = () =>{
        console.log('SignIn is Clicked...')
        props.guestUser(false)
        props.signIn.isLogin ? props.navigation.navigate('Map') : props.navigation.navigate('SignIn')
    }

    const handleGuest = () =>{
        console.log('SignIn is Clicked...')
        props.guestUser(true)
        props.navigation.replace('GuestMap')
    }

    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:20}}>
                <View style={{marginTop:60}}>
                    <Text style={{fontSize:25}}>WELCOME TO</Text>
                    <Text style={{fontSize:60 , fontWeight:'bold' ,color:'#FFA800'}}>Slough</Text>
                </View>

                <View style={{marginTop:30}}>
                    <Chat 
                        desc='Hey its me Salah , I am your personal digital stylist...'
                    />
                </View>

                <View style={{marginTop:90,width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Button title='Sign In' handleButton={handleSignIn}/>
                    <Text style={{fontSize:20,color:'grey' }}>
                        or
                    </Text>
                    <Button title='Guest' btnColor='#19479c' handleButton={handleGuest}/>

                </View>
            </View>
        </View>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        guestUser : (data) => dispatch(guestUserSuccess(data))
    }
}

const mapStateToProps = state =>{
    return{
        signIn: state.loginReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Welcome);

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            // marginHorizontal:20
        }
    }
)
