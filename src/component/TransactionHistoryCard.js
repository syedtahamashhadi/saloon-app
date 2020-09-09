import React from 'react'
import {View , Text , StyleSheet , ScrollView} from 'react-native'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const TransactionHistoryCard = (props) =>{
    console.log('props in TransactionHistoryCard', props.data )
    const {amount, createdAt, salon:{displayName, address}, services} = props.data
    // const {displayName, address} = props.data.salon
    // const {name} = props.data.services
    console.log(amount, createdAt, displayName, services, address)
    return(
        // <View style={styles.container}>
            <View style={{marginBottom:20,marginTop: 10, width:'100%'}}>
                <View style={{marginHorizontal:20,paddingHorizontal:20,borderTopRightRadius:10,borderTopLeftRadius:10,
                                paddingVertical:10,elevation:5,backgroundColor:'#fff'}}>

                    <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                    <Text style={{fontSize:18 , fontFamily:'AbrilFatFace'}}>
                       {displayName}
                    </Text>
                    <Text style={{fontSize:12 , fontFamily:'AbrilFatFace', color: 'gray'}}>
                       {createdAt.slice(0, 10)}
                    </Text>
                    </View>
                    <View style={{marginTop:5 , flexDirection:'row'}}>
                        <AwsomeIcon name='map-marker' size={15} color='#FA7268'/>
                        <Text style={{fontSize:12 , paddingLeft:5}}>{address}</Text>
                    </View>
                    <View style={{marginTop:10 , flexDirection:'row'}}>
                        <Text style={{fontSize:18,fontFamily:'AbrilFatFace'}}>$ {amount}.00</Text>
                        <Text style={{fontSize:12 , paddingLeft:8 , color:'grey' , paddingTop:5}}>
                            / {services.map(item => {
                                return item.name
                            })}
                        </Text>
                    </View>
                    {/* <View style={{width:'100%',height:1,borderWidth:2,borderStyle:'dashed',borderColor:'grey',
                                marginBottom:0,borderRadius:5,opacity:0.3 ,marginTop:'2.5%',
                                }}></View> */}
                    {/* <View style={{height:2 , borderRadius:5 , borderStyle:'dashed' , borderColor:'red'}}></View> */}
                </View>
            </View>
        // </View>
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

