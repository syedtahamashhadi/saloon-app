import React from 'react'
import {View , Text , StyleSheet ,ScrollView , TouchableOpacity , Image} from 'react-native'
// import AntIcon from 'react-native-vector-icons/AntDesign'

const CurrentBookingCard = () =>{

    return(
        <TouchableOpacity>

            <View style={styles.bookingCardContainer}>
                    
                <View style={{width:65,height:65,borderRadius:60,backgroundColor:'green'}}>
                    {/* <Image source={require('../../assets/cat.jpg')} style={styles.image}/> */}
                </View>
                    
                  
                <View style={{width:'74.5%',height:60,backgroundColor:'#fff',marginLeft:10,flexDirection:'column'}}>
                    <View style={{flexDirection:'row' , justifyContent:'space-between',flex:1,marginBottom:10}}>
                        <Text style={{fontSize:22}}>Hair Cut</Text>
                        <Text style={{fontSize:22}}>$ 24.99</Text>

                    </View>

                    <View style={{flexDirection:'row' , justifyContent:'space-between',flex:1}}>
                        <Text style={{fontSize:16}}>Afro Style</Text>
                        <View style={{flexDirection:'row'}}>

                            <View style={styles.blink}></View>
                            <Text style={{fontSize:16}}>22 Oct, 10:30 AM</Text>

                        </View>

                    </View>

                </View>
                    
            </View>
                
        </TouchableOpacity>
    )
}

export default CurrentBookingCard;

const styles = StyleSheet.create(
    {
        bookingCardContainer:{
            width:'100%',
            height:100,
            backgroundColor:'#fff',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,  
            flexDirection:'row',
            // justifyContent:'center',
            alignItems:'center',     
            marginBottom:20,
            paddingLeft:3,
            elevation:5
        },
        image:{
            resizeMode:'cover',
            height:'100%',
            width:'100%'
        },
        blink:{
            width:17,
            height:17,
            borderRadius:17,
            backgroundColor:'#C5C8D8',
            top:2,
            marginRight:5,
        }
        
    }
)