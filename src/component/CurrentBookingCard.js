import React from 'react'
import {View , Text , StyleSheet ,ScrollView , TouchableOpacity , Image} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'

const CurrentBookingCard = () =>{

    return(
        <TouchableOpacity>

            <View style={styles.bookingCardContainer}>
                <View style={styles.bookingContentContainer}>
                    <View style={{width:55,height:55,borderRadius:50,backgroundColor:'green'}}>
                        {/* <Image source={require('../../assets/cat.jpg')} style={styles.image}/> */}
                    </View>
                    
                  
                <View style={{width:'74.5%',height:60,backgroundColor:'#fff',marginLeft:10,flexDirection:'column'}}>
                    <View style={{flexDirection:'row' , justifyContent:'space-between',flex:1,backgroundColor:'#fff'}}>
                        <Text style={{fontSize:17,fontFamily:'ExoBold'}}>Hair Cut</Text>
                        <Text style={{fontSize:17,fontFamily:'ExoBold'}}>£ 24.99</Text>
                    </View>

                    <View style={{flexDirection:'row' , justifyContent:'space-between',marginBottom:14}}>
                        <Text style={{fontSize:13,fontFamily:'ExoRegular'}}>Afro Style</Text>
                        <View style={{flexDirection:'row'}}>

                            {/* <View style={styles.blink}></View> */}
                            <AntIcon name='clockcircleo' size={14} style={styles.blink}/>
                            <Text style={{fontSize:13,fontFamily:'ExoBold',opacity:0.6}}>22 Oct, 10:30 AM</Text>

                        </View>

                    </View>

                </View>
                </View>
                <View style={{width:'100%',height:2,borderWidth:1,borderStyle:'dashed',borderColor:'grey',
                                marginTop:'0.5%',marginBottom:0,borderRadius:5,opacity:0.3}}>

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
            height:90,
            backgroundColor:'#fff',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,  
            marginBottom:20,
            paddingLeft:3,
            paddingRight:3,
            elevation:2,
            borderWidth:0.1
        },
        bookingContentContainer:{
            flexDirection:'row',
            width:'100%',
            height:'85%',
            marginTop:10,
            justifyContent:'center',
            alignItems:'center',  
            backgroundColor:'#fff'   
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
            // backgroundColor:'#C5C8D8',
            top:2,
            marginRight:5,
        }
        
    }
)