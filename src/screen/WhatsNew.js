import React from 'react'
import { View , Text , ScrollView , Image , Touchable ,TouchableOpacity , StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { connect } from 'react-redux'


const GET_ALL_OFFERS = gql `
{
    offers{
          salonId
          discount
          offerDiscription
          status
          createdAt
          endDate
          service
    }
  }
`

const WhatsNew = (props) =>{

    const {data , loading , error} = useQuery(GET_ALL_OFFERS,
        {
            context:{
                headers:{
                    authorization: props.token,
                }
            },
            fetchPolicy:'network-only'  
        },
    )

        console.log('Data >>' , data)
        console.log('Loading >>' , loading)
        console.log('Error >>' , error)

    console.log("token >>" , props.token)
    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:20 , marginTop:35 , flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <AntIcon name='arrowleft' size={25}/>
                </TouchableOpacity>
            </View>
            
            <View style={styles.header}>    
                <Text style={{fontSize:30,fontFamily:'AbrilFatFace'}}>
                    What's New
                </Text>
                <View style={styles.searchContainer}>
                    <AntIcon name='search1' size={20}/>
                </View>
            </View>

            <View style={styles.contentContainer}>

                <Text style={{fontSize:20,fontFamily:'AbrilFatFace'}}>
                    Speacial offers
                </Text>

                <View style={{marginTop:15,width:'100%'}}>
                    
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    
                        <View style={styles.offerMainCard}>

                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/barber-shave.jpg')} style={styles.img}/>
                            </View>
                            
                            <View style={{marginHorizontal:20 , marginTop:10 , flexDirection:'row' , justifyContent:'space-between'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{fontSize:15 , fontFamily:'ExoBold' , opacity:0.6}}>
                                        Student Discount
                                    </Text>
                                    <Text style={{fontSize:13 , color:'grey', fontFamily:'ExoRegular' ,
                                                    marginTop:2}}>
                                        18 Offers available
                                    </Text>
                                </View>
                                
                                <View style={{marginTop:10}}>
                                    <Text>Icon</Text>
                                </View>

                            </View>
                        </View>

                        <View style={styles.offerMainCard}>

                            <View style={styles.imageContainer}>

                            </View>

                        </View>
                    
                    </ScrollView>
                
                </View>

                <View style={{marginTop:20}}>
                    <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
                        <Text style={{fontSize:20,fontFamily:'AbrilFatFace'}}>
                            Speacial offers
                        </Text>
                        <Text style={{fontSize:16 , fontFamily:'ExoRegular' , color:'grey' , opacity:0.8 ,}}>
                            See All
                        </Text>
                    </View>
                    

                    <View style={{marginTop:15}}> 
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                            <View style={styles.offerSmallCard}>
                                <View style={styles.imageSmallContainer}>
                                    <Image source={require('../../assets/barber-shave.jpg')} 
                                                style={styles.img}/>
                                </View>
                                <View style={{marginTop:10,marginHorizontal:15}}>
                                    <Text style={{fontSize:14,fontFamily:'ExoBold'}}>For</Text>
                                    <Text style={{fontSize:14,fontFamily:'ExoBold'}}>Mums</Text>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </View>

            </View>

        
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        },
        header:{
            marginTop:20,
            marginHorizontal:20,
            // flex:1,
            flexDirection:'row',
            justifyContent:'space-between'
        },
        searchContainer:{
            width:35,
            height:35,
            borderRadius:20,
            backgroundColor:'#fff',
            elevation:5,
            justifyContent:'center',
            alignItems:'center'
        },
        contentContainer:{
            marginTop:20,
            marginHorizontal:20,
            // width:'100%',    
            backgroundColor:'#fff'
        },
        offerMainCard:{
            height:200,
            width:295,
            elevation:5,
            borderRadius:12,
            backgroundColor:'#fff',
            marginRight:8
        },
        offerSmallCard:{
            height:130,
            width:130,
            elevation:8,
            borderRadius:12,
            backgroundColor:'#fff',
            marginRight:8
        },
        imageContainer:{
            height:'65%',
            borderTopLeftRadius:12,
            borderTopRightRadius:12,
            backgroundColor:'green'
        },
        imageSmallContainer:{
            height:'55%',
            borderTopLeftRadius:12,
            borderTopRightRadius:12,
            backgroundColor:'green'
        },
        img:{
            resizeMode:'cover',
            width:'100%',
            height:'100%',
            borderTopRightRadius:12,
            borderTopLeftRadius:12
        },

    }
)

const mapStateToProps = (state) =>{
    return{
        token: state.mfaReducer.token
    }
}

export default connect(mapStateToProps,null)(WhatsNew) ;