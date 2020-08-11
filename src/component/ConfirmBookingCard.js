import React from 'react'
import {View , Text , StyleSheet , TextInput , TouchableOpacity , ActivityIndicator} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useMutation , useLazyQuery } from '@apollo/react-hooks'
import Mutations from '../appolo/mutations'

const ConfirmBookingCard = (props) =>{

    const [applyPromoCode , { data , loading , error }] = useMutation(Mutations.APPLY_PROMO_CODE)


    console.log('Data is >>' , data)
    console.log('Loading is >>' , loading)
    console.log('Error is >>' , error)

    const handleApplyPromoCode = async() =>{
        console.log('Apply is Pressed >>>>')
        async function getToken(){
            try {
                const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')

                if(token !== null){
                    loading !== true &&
                    applyPromoCode(
                        {
                            variables:{ 
                                price: props.price , promoCode: props.promoCode
                            },
                            context:{
                                headers:{
                                    authorization: token
                                }
                            }
                        }
                    )
                }
            } catch (error) {
                console.log(error)
                alert('Error')
            }
        }
        getToken()
    }


    React.useEffect(()=>{
        if(data){
            console.log('Data >>>')
            props.discountedPrice(data.applyPromoCode.discountedPrice)
        }
    },[data,error])

    return(
        // <View style={styles.container}>
            <View style={{width:'100%',backgroundColor:'#fff',elevation:5,
                    borderTopLeftRadius:10,borderTopRightRadius:10}}>
                <View style={{marginHorizontal:20,marginTop:20}}>
                    <View>
                        <Text style={{fontSize:17,fontFamily:'AbrilFatFace'}}>{props.saloon}</Text>
                        <Text style={{fontSize:17,marginTop:5,fontFamily:'ExoBold'}}>{props.address}</Text>
                        <Text style={{fontSize:20 ,color:'grey',fontFamily:'ExoRegular'}}>{props.phone}</Text>
                    </View>

                    <View style={{borderWidth:0.8,marginVertical:15,borderColor:'grey'}}></View>

                    <View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
                            <Text style={{fontSize:15,color:'grey',fontFamily:'ExoRegular'}}>Service:</Text>
                            <Text style={{fontSize:16,fontFamily:'ExoBold'}}>{props.service}</Text>

                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:8}}>
                            <Text style={{fontSize:15,color:'grey',fontFamily:'ExoRegular'}}>Duration:</Text>
                            <Text style={{fontSize:16,fontFamily:'ExoBold'}}>{props.duration}</Text>

                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:8}}>
                            <Text style={{fontSize:15,color:'grey',fontFamily:'ExoRegular'}}>Staff:</Text>
                            <Text style={{fontSize:16,fontFamily:'ExoBold'}}>{props.staff}</Text>

                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:8}}>
                            <Text style={{fontSize:15,color:'grey',fontFamily:'ExoRegular'}}>Total:</Text>
                                {/* {(data && data.applyPromoCode.discountedPrice) ? 
                                    <Text style={{fontSize:16,fontFamily:'ExoBold'}}>{`£ ${data.applyPromoCode.discountedPrice}`}</Text>
                                    :<Text style={{fontSize:16,fontFamily:'ExoBold'}}>{props.total}</Text>} */}
                                    <Text style={{fontSize:16,fontFamily:'ExoBold'}}>{props.total}</Text>

                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:8}}>
                            <Text style={{fontSize:15,color:'grey',fontFamily:'ExoRegular'}}>Promo Code:</Text>
                            <TextInput 
                                value={props.promoCode}
                                onChangeText={(text)=>props.handleChangeText(text)}
                                style={{width:80,backgroundColor:'#fff',borderBottomWidth:2 ,height:20,
                                borderColor:'black',paddingLeft:5,fontFamily:'ExoBold'}}
                                fontSize={16}
                                textAlign='left'
                                placeholder='Cf8xzs84'
                                placeholderTextColor='#F1F3F8'
                                // fontFamily='ExoBold'
                            />
                            {/* <Text>test</Text> */}
                        </View>
            
                        <View style={{width:'100%',alignItems:'flex-end',marginTop:3}}>
                            {/* <View style={{width:'35%',height:30,justifyContent:'center',
                                        alignItems:'center',borderRadius:15,backgroundColor:'#49D3CE',marginBottom:8,marginRight:-4

                        }}> */}
                            <TouchableOpacity
                                style={{width:85,height:30,justifyContent:'center',
                                            alignItems:'center',borderRadius:15,backgroundColor:'#49D3CE',marginBottom:8,marginRight:-4
                                }}
                                activeOpacity={0.7}
                                onPress={()=>{handleApplyPromoCode()}}
                            >

                               {!loading ? <Text>Apply Code</Text> : <ActivityIndicator size={25} color='#fff'/>}
                            </TouchableOpacity>

                            {/* </View> */}
                        </View>

                    </View>
                </View>
            </View>
        // </View>
    )
}

export default ConfirmBookingCard;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            justifyContent:'center',
            alignItems:'center',
            marginHorizontal:20,
            // width
        }
    }
)