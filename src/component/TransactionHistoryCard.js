import React from 'react'
import {View , Text , StyleSheet , ScrollView} from 'react-native'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'


const GET_TRANSACTION_HISTORY = gql `
{
    getUserPaymentHistory{
        _id
        amount
        isPromoCode
        createdAt
        salon{
            displayName
            distance
        }
        amount
        service{
            name
        }

    }
}
`


const TransactionHistoryCard = (props) =>{

    // const { data , loading , error } = useQuery(GET_TRANSACTION_HISTORY , 
    //         {
    //             context:{
    //                 headers:{
    //                     authorization: props.token
    //                 }
    //             }
    //         }
    //     )

    // console.log('Data is >>' , data)
    // console.log('Data is >>' , loading)
    // console.log('Data is >>' , error)

    return(
        <View style={styles.container}>
            <View style={{marginTop:60,width:'100%'}}>
                <View style={{marginHorizontal:20,paddingHorizontal:20,height:100,borderTopRightRadius:10,borderTopLeftRadius:10,
                                paddingVertical:10,elevation:5,backgroundColor:'#fff'}}>
                    <Text style={{fontSize:18 , fontFamily:'AbrilFatFace'}}>
                        La Coupe
                    </Text>

                    <View style={{marginTop:5 , flexDirection:'row'}}>
                        <AwsomeIcon name='map-marker' size={15} color='#FA7268'/>
                        <Text style={{fontSize:12 , paddingLeft:5}}>1.3 miles to your location</Text>
                    </View>
                    <View style={{marginTop:10 , flexDirection:'row'}}>
                        <Text style={{fontSize:18,fontFamily:'AbrilFatFace'}}>$ 10.00</Text>
                        <Text style={{fontSize:12 , paddingLeft:8 , color:'grey' , paddingTop:5}}>
                            / haircut
                        </Text>
                    </View>
                    <View style={{width:'100%',height:1,borderWidth:2,borderStyle:'dashed',borderColor:'grey',
                                marginBottom:0,borderRadius:5,opacity:0.3 ,marginTop:'2.5%',
                                }}></View>
                    {/* <View style={{height:2 , borderRadius:5 , borderStyle:'dashed' , borderColor:'red'}}></View> */}
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create(
    {
        container :{
            flex:1,
            backgroundColor:'#fff'
        }
    }
)


export default TransactionHistoryCard;

