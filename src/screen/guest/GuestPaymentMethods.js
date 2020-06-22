import React , {useEffect , useState} from 'react'
import { View , Text , TouchableOpacity , StyleSheet , ScrollView} from 'react-native'
import Chat from '../../component/Chat'
import AntIcon from 'react-native-vector-icons/AntDesign'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'





const GuestPaymentMethods = (props) =>{

    const [pageView , setPageView] = useState(3)
    const [slectedCard , setSelectedCard] = useState('')
    console.log('Testing Props >>>>>' , props)
    const handleCardPress = (val) =>{
        console.log('Button is Pressed....',val.cardId)
        setSelectedCard(val)
        props.navigation.navigate('GuestConfirmBooking', {
            slectedCard: val
        })
        
    }

    const cardDetail = [{number:'8564' , cardId: "cfbb"},{number:'9387' , cardId: "cfbb"},{number:'6363' , cardId: "cfbb"}]
    return(

        <View style={{flex:1 , backgroundColor:'#fff' , }}>

            {/* <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:35}}> */}
                <View style={{flex:pageView, marginHorizontal:20}}>
                    <View style={{flexDirection:'row',marginTop:35}}>
                        <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
                            <AntIcon name='arrowleft' size={25}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:25}}>
                        <Chat 
                            desc= 'How do you want to pay?'
                        />
                    </View>
                </View>

                <View style={{flex:6.5,borderTopLeftRadius:15,borderTopRightRadius:15 ,
                                 elevation:30 ,width:'100%',backgroundColor:'#fff'}}>
                    
                    <View style={{alignItems:'center',top:10 , marginHorizontal:20}}>
                        <TouchableOpacity  onPress={()=>{pageView==3 ? setPageView(1) : setPageView(3)}}
                        style={{flexDirection:'row', justifyContent:'center',marginTop:0}}>
                            <View style={{height:20,width:60}}>
                                <View style={{width:60,height:2,backgroundColor:'#49D3CE'}}></View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop:15 , justifyContent:'center' , alignItems:'center'}}>
                        <Text style={{fontSize:20,fontFamily:'AbrilFatFace'}}>Payment Methods</Text>
                    </View>

                    <View style={{marginTop:35,marginHorizontal:20}}>
                        {
                            cardDetail.map((val,index)=>{
                                console.log('Card Details >>' , val)
                                let myColor = val.number == slectedCard.number ? '#49D3CE' : 'black'
                                return(
                                    <TouchableOpacity onPress={()=>{handleCardPress(val)}}>
                                        <View style={styles.card}>
                                            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
                                                <View>
                                                    <AwsomeIcon name='cc-visa' size={50} color='blue' />
                                                </View>
                                                <View style={{justifyContent:'center'}}>
                                                    <Text style={{fontSize:16 , fontWeight:'bold' , color:myColor}}>
                                                        {`***${val.number}`}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }

                        <View style={styles.addCard}>
                            {/* <TouchableOpacity onPress={()=>props.navigation.navigate('UserDetail',{
                                currentScreen: 'Payment Method'
                            })}> */}
                                <AntIcon name='plus' size={50} color='#49D3CE' />
                            {/* </TouchableOpacity>                             */}
                        </View>
                    </View>
                </View>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        card:{
            width:'100%',
            height:80 ,
            borderRadius:10 ,
            elevation:5,
            justifyContent:'center',
            backgroundColor:'#fff',
            marginBottom:12 ,
        } ,
        addCard:{
            width:'100%',
            height:100 ,
            borderRadius:10 ,
            justifyContent:'center',
            backgroundColor:'#fff',
            marginTop:12 ,
            marginBottom:15,
            borderWidth:2,
            borderStyle:'dashed',
            alignItems:'center'
        }
    }
)


export default GuestPaymentMethods;