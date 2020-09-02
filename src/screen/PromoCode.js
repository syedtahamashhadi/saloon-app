import React from 'react';
const {width, height} = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {View, StyleSheet, Text, ScrollView, Dimensions , TouchableOpacity} from 'react-native'
import SafeAreaView from "react-native-safe-area-view";
import {SafeAreaProvider} from "react-native-safe-area-context";
import PromoCodeCard from "../component/PromoCodeCard";
import PromoCardCarousel from "../component/PromoCodeCardCarousel";
import AntIcon from 'react-native-vector-icons/AntDesign'
import {setPromoCodeCopied} from '../redux/authenticate/actions'
import gql from 'graphql-tag'
import { useQuery , useLazyQuery } from '@apollo/react-hooks'
import { useLinkProps } from '@react-navigation/native';
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';

const GET_PROMO_CODE = gql `
{
    getPromoCode {
        discount
        startedAt
        expiredAt
        allowCounter
        code
        couponType
        status
        pictureURL
    }
}
`
const PromoCode = (props) => {

    const [copiedCode,setCopiedCode] = React.useState(null)

    const [getPromoCodeQuery,{data , loading , error}] = useLazyQuery(GET_PROMO_CODE)

    React.useEffect(()=>{
        async function getToken(){
            try {
                const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
                if(token !== null){
                    getPromoCodeQuery(
                        {
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
            }
        }
        getToken()
    },[])

    React.useEffect(()=>{
        if(copiedCode){
            props.copyPromoCode(copiedCode)
        }
    },[copiedCode])
    
    return (
    
        <View style={styles.container}>
            <View style={{marginTop:35 , marginHorizontal:20 , flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
                    <AntIcon name='arrowleft' size={25}/>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={[styles.fontSize_30]}>Promo Code</Text>
            </View>

            {/* {data && <PromoCardCarousel detail={data.getPromoCode}/> } */}

            <View>
                {/* <View style={styles.header}>
                    <Text style={styles.fontSize_20}>NEAR YOU</Text>
                </View> */}
                <ScrollView style={styles.momentsHeader}>
                    {
                        data && data.getPromoCode.map((val,index)=>{
                            console.log('Promo Code Data >>>>>>' , val)
                            // let date = new Date()
                            // let currentDateIntoTime = date.getTime()
                            // let expDateIntoTime = new Date(val.expiredAt).getTime()
                            // console.log('Exp Date >>',expDateIntoTime , ' Current Time  ' , currentDateIntoTime)
                            
                            return(
                               <PromoCodeCard detail={val} setCode={setCopiedCode} copiedCode={copiedCode}/>
                            )

                        })
                    }
                
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        marginHorizontal: 20,
        marginTop: 8,
    },
    fontSize_30:{
        fontSize: 30
    },
    fontSize_20:{
        fontSize: 20
    },
    momentsHeader: {
        height: hp('100%'),
    },
})

const mapStateToProps = (state) =>{
    return{
        token: state.mfaReducer.token
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        copyPromoCode: (data)=> dispatch(setPromoCodeCopied(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PromoCode)