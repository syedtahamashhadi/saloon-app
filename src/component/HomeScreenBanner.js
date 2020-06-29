import React from 'react'
import {View , Text , Image , TextInput , StyleSheet , TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'

const HomeScreenBanner = (props) =>{
    console.log('HomeScreen Banner >>' , props)
    const [value, onChangeText] = React.useState('');
    const getGreet = (name) =>{
        let hour = new Date().getHours()
        switch(true){
            case (hour >= 1 && hour <12):
                return `Good Morning! ${name}`
            case (hour >= 12 && hour<17):
                return `Good Afternoon! ${name}`
            case (hour >= 17 && hour <= 24):
                return `Good Evening! ${name}`
            default:
                return `Good Evening! ${name}`
        }
    }
    return(
        <View style={{marginTop:35}}>
            <View style={{flexDirection:"row" , justifyContent:'space-between'}}>
               
                <Text style={{fontSize:20 ,fontWeight:'bold'}}>{getGreet(props.mfa.verifyCode.firstName)}</Text>
                
                <View style={{borderRadius:40,borderWidth:2,borderColor:'#fff',elevation:5}}>
                    <Image style={{borderRadius:38,height:38,width:40}}
                        source={require('../../assets/user.png')}
                    />
                </View>
                
            
            </View>

            <View style={{flexDirection:"row" , justifyContent:'space-between' , top:20}}>
                   
                <View style={styles.searchContainer}>
                    <Icon name="map-marker" size={25} style= {styles.searchIcon} />
                    
                    <TextInput
                        onChangeText={text => onChangeText(text)}
                        placeholder="Whats your style for today"
                        value={value}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <TouchableOpacity onPress={()=>console.log("Filter is pressed")}>
                    <View style={{borderRadius:40 , backgroundColor:'green' , width:40 , height:40 ,
                                    elevation:5 ,justifyContent:'center',alignItems:'center',
                                    backgroundColor:'#fff' }}>
                        <AntIcon name='filter' size={25} />
                    </View>
                </TouchableOpacity>
                
                    
            </View>
           
        </View>
    )
}


const mapStateToProps = (state) =>{

    return{
        mfa: state.mfaReducer.data
    }
}


export default connect(mapStateToProps,null)(HomeScreenBanner);

const styles = StyleSheet.create(
    {
        searchContainer:{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor:'#fff',
            borderRadius:10,
            padding:5,
            width:240,
            elevation:5,
        },
        searchIcon:{
            color:'black' , 
            paddingRight:10 , 
            paddingLeft:10
        },
    }
)