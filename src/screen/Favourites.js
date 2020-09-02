import React from 'react'
import {View , Text , TouchableOpacity , Image ,ScrollView , StyleSheet} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'
import Rating from '../component/Rating'
import gql from 'graphql-tag'
import {useQuery , useLazyQuery} from '@apollo/react-hooks'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'


const GET_FAVOURITE_SALOON = gql `
    {
        getFavoriteSalons{
            favoriteSalon{
                displayName
            }
        }
    }
`

const Favourites = (props) =>{

    const [getFavoriteSalonsQuey ,{ data , loading , error }] = useLazyQuery(GET_FAVOURITE_SALOON)
    
        console.log('Data >>' , data)
        console.log('Loading >>' , loading)
        console.log('Error >>' , error)


    React.useEffect(()=>{
        async function getToken(){
            try {
                const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
                if(token !== null){
                    getFavoriteSalonsQuey(
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

    return(
        <View style={styles.container}>

            <View style={styles.backContaier}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <AntIcon name='arrowleft' size={25} />
                </TouchableOpacity>
            </View>

            <View style={styles.header}>
                <Text style={styles.heading}>   
                    Favourites
                </Text>
                <View style={styles.filterContainer}>
                    <AntIcon name='filter' size={25}/>
                </View>
            </View>

            <View style={styles.favouriteMainContainer}>

                <TouchableOpacity>


                <View style={styles.favouriteContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/barber-shave.jpg')} style={styles.image}/>
                    </View>

                    <View style={styles.favouriteContentContainer}>
                        <View style={{width:200,height:'100%' , backgroundColor:'#fff'}}>

                            <Text style={styles.shopName}>
                                Slough Barber
                            </Text>
                            <View style={styles.distanceContainer}>
                                <AwsomeIcon name='map-marker' size={15} color='#FA7268'/>

                                <Text style={styles.locationText}>
                                    1.3 m to your location
                                </Text>
                            </View>

                            <View style={styles.lineSeprator}>

                            </View>

                            <View style={styles.ratingContainer}>
                                <Rating rating={4.2} starSize={12} textSize={12}/>
                            </View>

                        </View>
                        
                    </View>
                        
                </View>
                </TouchableOpacity>

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
        backContaier:{
            marginTop:35,
            marginHorizontal:20,
            flexDirection:'row'
            // backgroundColor:'red'
        },
        header:{
            marginTop:15,
            marginHorizontal:20,
            flexDirection: 'row',
            justifyContent:'space-between',
            // backgroundColor:'red',
            alignItems:'center'
        },
        heading:{
            fontSize:25,
            // fontWeight:'bold',
            fontFamily: 'AbrilFatFace' ,
        },
        filterContainer:{
            width:35,
            height:35,
            borderRadius:20,
            backgroundColor:'#fff',
            elevation:5,
            justifyContent:'center',
            alignItems:'center'
        },
        favouriteMainContainer:{
            marginTop:30,
            marginHorizontal:20,
        },
        favouriteContainer:{
            width:'100%',
            height:90,
            borderRadius:10,
            elevation:5,
            flexDirection:'row',
            backgroundColor:'#fff'
        },
        imageContainer:{
            // height:'100%',
            width:'30%',
            backgroundColor:'red',
            borderTopLeftRadius:10,
            borderBottomLeftRadius:10
        },
        image:{
            resizeMode:'cover',
            height:'100%',
            width:'100%',
            borderTopLeftRadius:10,
            borderBottomLeftRadius:10
        },
        favouriteContentContainer:{
            marginHorizontal:10,
            marginVertical:6,
            // backgroundColor:'blue',
            // width:'0%'
        },
        shopName:{
            fontSize:18,
            fontFamily:'AbrilFatFace',
            marginBottom:5
        },
        distanceContainer:{
            flexDirection:'row',
            // justifyContent:'center',
            alignItems:'center',
            marginBottom:8
        },
        locationText:{
            fontSize:12,
            marginLeft:5
        },
        lineSeprator:{
            width:'100%',
            height:0.7,
            backgroundColor:'grey',
            // marginBottom:5
        },
        ratingContainer:{
            width:100,
            backgroundColor:'#fff',
            marginTop:3
        }
    }
)

const mapStateToProps = (state) =>{
    return{
        token: state.mfaReducer.token
    }
}

export default connect(mapStateToProps,null)(Favourites)