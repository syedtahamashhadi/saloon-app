import React from 'react'
import { View , Text , TouchableOpacity , StyleSheet , Image , ScrollView } from 'react-native'
import Button from '../component/Button'
import SvgBookings from '../../MySvg/SvgBookings'
import SvgFavourites from '../../MySvg/SvgFavourites'
import SvgMoments from '../../MySvg/SvgMoments'
import SvgHelpCenter from '../../MySvg/SvgHelpCenter'
import SvgRewards from '../../MySvg/SvgRewards'
import SvgPromoCode from '../../MySvg/SvgPromoCode'
import SvgSettings from '../../MySvg/SvgSettings'
import SvgTransactions from '../../MySvg/SvgTransactions'
import SvgWhatsNew from '../../MySvg/SvgWhatsNew'
import FooterBar from '../component/FooterBar'
import AsyncStorage from '@react-native-community/async-storage';
import { useMutation } from '@apollo/react-hooks'
import { connect } from 'react-redux'
import { setIsLogin } from '../redux/authenticate/actions'
import Helpers from '../Helpers'
import Mutations from '../appolo/mutations'
import * as Device from 'expo-device';


const EditProfile = (props) =>{

    const [logOut , { data , loading , error }] = useMutation(Mutations.LOGOUT)


    const [selectedCard,setSelectedCard] = React.useState(null)
    const cardData = [  
                        {img:<SvgBookings /> , desc:'Bookings',nav:'BookingsNavigation'},
                        {img:<SvgWhatsNew /> , desc:`What's New` , nav:'WhatsNew'},
                        {img:<SvgFavourites /> , desc:'Favourites' , nav:'Favourites'},
                        {img:<SvgMoments /> , desc:`Moment's` , nav:'Moments'},
                        {img:<SvgRewards /> , desc:'Reward Credits' , nav:'RewardsNavigation'},
                        {img:<SvgPromoCode /> , desc:'Promocode' , nav: 'PromoCode'},
                        {img:<SvgTransactions /> , desc:'Transaction History' , nav:'PaymentNavigation'},
                        {img:<SvgSettings /> , desc:'Settings' , nav:'SettingsNavigation'},
                        {img:<SvgHelpCenter /> , desc:'Help Center' , nav:'HelpCenterNavigation'}
                    ]
  

    const handleSelectedCard = (val)=>{
        setSelectedCard(val.desc)
        props.navigation.navigate(val.nav)
    }

    const handleLogOut = () =>{
        
        async function getToken (){
            try {
                const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
                if(token !== null){
                    loading !== true && logOut(
                        {
                            variables:{
                                deviceId: `${Device.osBuildId}_${Device.osInternalBuildId}`
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
                null
            }
        }
        getToken()
    }

    React.useEffect(()=>{
        if(data){
            Helpers.removeKey('@KOMB_JWT_TOKEN',()=>{
                props.setIsLogin(false)                
                props.navigation.navigate('SignIn')
            })
        }else if(error){
            alert('Something Went Wrong TryAgain....')
        }
    },[data,error])

    return(
        <View style={styles.container}>

            <View style={styles.upperScreen}>

                <View style={{marginHorizontal:20}}>
                   
                    <View style={{marginTop:35,flexDirection:'row',justifyContent:'flex-end'}}>
                        {/* <TouchableOpacity onPress={()=>props.navigation.navigate('UpdateUserProfile')}> */}
                            <Text style={{color:'#fff',fontSize:16}}>Edit</Text>
                        {/* </TouchableOpacity> */}
                    </View>

                    <View style={{marginTop:5,width:'100%',justifyContent:'center',alignItems:'center',}}>
                        <View style={{width:60,height:60,backgroundColor:'green',borderRadius:40,
                                        borderWidth:3,borderColor:'#fff'}}>
                            <Image source={{uri : props.userDetail.getUserProfile.profileImageURL }}
                                    style={{width:'100%',height:'100%',resizeMode:'cover' , borderRadius:40}}/>
                        </View>
                        <Text style={{marginTop:3,color:'#fff',fontFamily:'AbrilFatFace',fontSize:15}}>
                            {props.userDetail.getUserProfile.firstName}
                        </Text>
                        <Text style={{marginTop:0,marginBottom:15,color:'#fff',fontFamily:'AbrilFatFace'}}>
                            {props.userDetail.getUserProfile.email}
                        </Text>

                    </View>

                </View>

            </View>

            <View style={styles.lowerScreen}>
                <ScrollView>

                <View style={{marginHorizontal:20}}>
                    
                    <View style={styles.cardsContainer}>

                    {
                        cardData.map((val,index)=>{
                            const cardTextColor = selectedCard == val.desc ? '#49D3CE' : 'grey'

                            return(
                                <TouchableOpacity activeOpacity={0.9} key={index} onPress={()=>handleSelectedCard(val)}>
                                    <View style={styles.card}>
                                        <View style={styles.contentCard}>
                                            {val.img}
                                            <Text style={[{color: cardTextColor}, styles.cardContentText]}>
                                                {val.desc}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }                      

                    </View>

                    <TouchableOpacity onPress={()=>props.navigation.navigate('TosPpNavigation')}>
                        <Text style={styles.tos}> Terms and Privacy Policy </Text>
                    </TouchableOpacity>
                   
                    <View style={{marginTop:'4%'}}>
                        <Button title='Log out' handleButton={handleLogOut} textSize={18}/>
                    </View>

                </View>
                <View style={{marginBottom:10 , alignItems:'flex-end'}}>
                    <FooterBar nav={props.navigation}/>
                </View>
                </ScrollView>

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
        upperScreen:{
            flex:3,
            backgroundColor:'#49D3CE',
            borderBottomRightRadius:20,
            borderBottomLeftRadius:20,
        },
        userDetail:{
            justifyContent:'center',
        },
        lowerScreen:{
            flex:7,
            backgroundColor:'#fff'
        },
        cardsContainer:{
            marginTop:'5%',
            // backgroundColor:'red',
            width:'100%',
            // height:350,
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between'
        },
        contentCard:{
            width:'100%',
            height:'40%',
            marginTop:12,
            alignItems:'center',
            backgroundColor:'#fff'
        },
        cardContentText:{
            marginTop:9,
            textAlign:'center',
            fontSize:11,
            // color:'grey',
            fontFamily:'ExoRegular'
        },
        card:{
            width:90,
            height:100,
            backgroundColor:'#fff',
            borderRadius:5,
            elevation:10,
            marginBottom:10,
            // justifyContent:'center',
            alignItems:'center'
        },
        tos:{
            fontFamily:'AbrilFatFace',
            fontSize:15,
            textAlign:'center',
            marginTop:'5%',
            textDecorationLine:'underline'
        },

    }
)

const mapStateToProps = (state) =>{
    return{
        token: state.mfaReducer.token ,
        mfa: state.mfaReducer.data , 
        userDetail : state.setuserDetailReducer.data , 
        isLogin : state.setIsLoginReducer.data ,

    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        setIsLogin : (data) => dispatch(setIsLogin(data)) ,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditProfile);