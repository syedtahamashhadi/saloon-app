import React from 'react'
import {View , Text , Image , TextInput , StyleSheet , TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'

const HomeScreenBanner = () =>{
    const [value, onChangeText] = React.useState('');
    const getGreet = (name) =>{
        let hour = new Date().getHours()
        switch(true){
            case (hour>8 && hour <12):
                return `Good Morning ${name}`
            case (hour>12 && hour<17):
                return `Good Afternoon ${name}`
            default:
                return `Good Evening ${name}`
        }
    }
    return(
        <View style={{marginTop:35}}>
            <View style={{flexDirection:"row" , justifyContent:'space-between'}}>
               
                <Text style={{fontSize:20 ,fontWeight:'bold'}}>{getGreet("Taha")}</Text>
                <Image style={{borderRadius:40 , height:40 , width:40}}
                    source={require('../../assets/cat.jpg')}
                />
            
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
                    <View style={{borderRadius:40 , backgroundColor:'green' , width:40 , height:40}}>
                        <AntIcon name='filter' size={25} style={{marginHorizontal:7 , marginVertical:6}}/>
                    </View>
                </TouchableOpacity>
                
                    
            </View>
           
        </View>
    )
}

export default HomeScreenBanner;

const styles = StyleSheet.create(
    {
        searchContainer:{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor:'red',
            borderRadius:10,
            padding:5,
            width:240
        },
        searchIcon:{
            color:'green' , 
            paddingRight:10 , 
            paddingLeft:10
        },
    }
)