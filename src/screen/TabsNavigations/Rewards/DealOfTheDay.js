import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet , Image , ImageBackground} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Avatar } from 'react-native-elements'
import SvgDodCross from '../../../../MySvg/SvgDodCross'
import SvgDodHeart from '../../../../MySvg/SvgDodHeart'




const DealOfTheDay = (props) =>{

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop:30 , justifyContent:'center',alignItems:'center' , marginHorizontal:20}}>
                <View style={{width:'90%',height:380,backgroundColor:'#fff',elevation:5 ,
                             padding:15 , borderRadius:10}}>
                    {/* <View style={{alignItems:'center',justifyContent:'center'}}> */}
                        <ImageBackground source={ require('../../../../assets/shop-1.png')}
                            style={{width:'100%',height:220,borderRadius:6,overflow:'hidden',resizeMode:'cover'}}
                        >
                            <View>
                            <Text>Test</Text>

                            </View>
                        </ImageBackground>
                    {/* </View> */}

                    {/* <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
                        <Image source={require('../../../../assets/rightCurve.png')} />
                    </View> */}
                    <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:16,fontFamily:'AbrilFatFace'}}>La Coupe</Text>
                        <Text style={{fontSize:16,fontFamily:'ExoBold',color:'#FA7268'}}>£ 10.99</Text>
                    </View>
                    <View style={{marginTop:2,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:13,fontFamily:'ExoBold' , color:'grey'}}>
                            1640 Camino Del Rio 
                        </Text>
                        <Text style={{fontSize:13,fontFamily:'ExoBold' , color:'grey' , 
                                       textDecorationLine:'line-through' }}>
                            £ 20.99
                        </Text>
                    </View>


                    <View style={{flexDirection:'row', marginTop:20 ,alignItems:'center'}}>
                        <View style={styles.avatarsContainer}>
                            <View style={{borderRadius:30,borderWidth:3,borderColor:'white',elevation:5}}>
                                <Avatar size={30} rounded source={require('../../../../assets/stylist-5.png')}/>
                                
                                <View style={styles.avatarRow}>
                                    <Avatar size={30} rounded source={require('../../../../assets/stylist-3.png')}/>
                                    <View style={styles.avatarRow}>
                                        <Avatar size={30} rounded source={require('../../../../assets/stylist-4.png')}/>
                                    </View>
                                </View>
                            </View>
                            
                        </View>
                        <View style={{marginHorizontal:65}}>
                            <Text style={{fontSize:12,color:'grey',fontFamily:'ExoBold' , opacity:0.7}}>
                                120 Interested
                            </Text>
                        </View>
                    </View>

                </View>
              

            </View>

            <View style={{marginHorizontal:20 , marginVertical:'5%'}}>
                <View style={{width:'100%',height:55,backgroundColor:'#fcfcfc' , flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{marginLeft:'10%',width:60,height:'90%',backgroundColor:'#fcfcfc'}}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <SvgDodCross width='100%' height='100%'/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginRight:'10%',width:60,height:'90%',backgroundColor:'#fcfcfc'}}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <SvgDodHeart width='100%' height='100%'/>   
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
                
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fcfcfc'
        },
        avatarsContainer:{
            flexDirection:'row'
        },
        avatarRow:{
            borderRadius:30,
            borderWidth:3,
            borderColor:'white',
            position:'absolute',
            zIndex:999,
            left:25,
            top:-3,
            elevation:5,
        },
    }
)

export default DealOfTheDay;