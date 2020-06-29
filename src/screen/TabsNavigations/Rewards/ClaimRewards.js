import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet} from 'react-native'
import SvgShareIcon from '../../../../MySvg/SvgShareIcon'
import SvgClaimRewardIcon from '../../../../MySvg/SvgClaimRewardIcon'
import Button from '../../../component/Button'



const ClaimReward = (props) =>{

    const handleButton = ()=>{
        console.log('Button is Pressed >>')
    }

    return(
        <View style={styles.container}>
            <View style={{marginTop:40 , marginHorizontal:20 , justifyContent:'center',alignItems:'center'}}>
                {/* <Text style={{fontSize:18}}>
                    ClaimReward
                </Text> */}
               
                <View style={styles.card}>
                    <View style={styles.rewardIconContainer}>
                        <SvgClaimRewardIcon width='80%'height='80%'/>
                    </View>
                    {/* <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{width:15,height:15,borderRadius:10,backgroundColor:'#D1D5DF',marginStart:-8 , opacity:1}}></View>
                        <View style={{width:30,height:30,borderRadius:20,backgroundColor:'red'}}></View>


                    </View> */}
                    <View style={{marginTop:30}}>
                        <Text style={{fontFamily:'AbrilFatFace',fontSize:16 , textAlign:'center'}}>
                            Free Hair Cut
                        </Text>
                        <Text style={{fontFamily:'ExoRegular',fontSize:12,color:'grey',marginTop:3}}>
                            Every 10th haircut as a gift
                        </Text>
                    </View>
                    <View style={{width:'80%',marginTop:20}}>
                        <Button title='Claim reward' height={45} btnColor='#49d3ce' handleButton={handleButton}/>
                    </View>
                    <View style={{position:'absolute' , width:'100%' , zIndex:9999 }}>
                        <View style={{marginLeft:'90%' , marginTop:-15}}>
                            <View style={styles.shareContainer}>
                                <TouchableOpacity style={{width:'50%',height:'80%'}} 
                                        onPress={()=>props.navigation.navigate('ReferToFriends')}>
                                    <SvgShareIcon width='100%'height='100%' />
                                </TouchableOpacity>
                            </View>
                            {/* <Text>Test</Text> */}
                        </View>
                    </View>
                </View>
                {/* <View style={styles.shareContainer}></View> */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fcfcfc'
        },
        card:{
            width:'100%' ,
            height:240 ,
            borderRadius:20 ,
            backgroundColor:'#fff' ,
            elevation:5,
            alignItems:'center'
        },
        shareContainer:{
            width:40,
            height:40,
            borderRadius:20,
            backgroundColor:'#fff',
            elevation:3,
            justifyContent:'center',
            alignItems:'center',
            // marginLeft:30
        },
        rewardIconContainer:{
            width:60,
            height:60 ,
            backgroundColor:'#fff' ,
            justifyContent:'center',
            borderTopLeftRadius:30 ,
            borderTopRightRadius:30 ,
            alignItems:'center',
            marginTop:-15
        }
    }
)

export default ClaimReward;