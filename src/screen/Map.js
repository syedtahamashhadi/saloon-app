import React , {useEffect} from 'react'
import {View , StyleSheet, Text, Dimensions , TextInput ,Image , TouchableOpacity ,
        UIManager , LayoutAnimation} from 'react-native'
import MapView , { Marker  , Callout} from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MapFooter from '../component/MapFooter'
import * as Location from 'expo-location'
import MyCallOut from '../component/MyCallOut'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import { useQuery , useLazyQuery } from '@apollo/react-hooks'
import { nearestSaloonSuccess , selectedSaloonBookingSuccess ,setUserDetailSuccess } from '../redux/authenticate/actions'
import SvgMapScisorMarker from '../../MySvg/SvgMapScisorMarker'
import {Ionicons} from '@expo/vector-icons'
import MapMarker from '../component/MapMarker'
import AdvanceFilter from '../component/AdvanceFilter'
import AsyncStorage from '@react-native-community/async-storage'
import MapHeader from '../component/MapHeader'


const GET_NEAREST_SALOON = gql `
    query abc($latitude: Float! , $longitude: Float!){
        getNearestSalons(latitude: $latitude, 
    longitude: $longitude){
        _id
        displayName
        rating
        backgroundProfileImage
        distance
        profileImage
        portfolioImages
        managerName
        managerImage
        status
        address
        contactNo
        services{
            name
            _id
            description
            approxTime
            price
            serviceIcon
        }
        serviceProviders{
            firstName
            lastName
            _id
            status
            rating
            profileImageURL
            ratingCounter
            services{
                _id
                name
                approxTime
                price
                status
                description
                serviceIcon
            }
        }
        location{
            type
            coordinates
        }
        }
    }
`


const GET_USER_PROFILE = gql`
{
    getUserProfile{
        _id
        email
        password
        jwtToken{
            token
        }
        firstName
        lastName
        phone
        profileImageURL
        gender
        country
        city
        dateOfBirth
        language
    }
}
`


if(Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental){
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

const Map = (props) =>{

    console.log('Map Props' , props)

    const [userLat,setUserLat] = React.useState(null)
    const [userLng,setUserLng] = React.useState(null)
    const [currentLat,setCurrentLat] = React.useState(null)
    const [currentLng,setCurrentLng] = React.useState(null)
    const [filterView,setFilterView] = React.useState(false)
    const [locError,setLocError] = React.useState('')

    const [nearestSaloonQuery,{data : dataNearestSaloon , 
                loading , error }] = useLazyQuery(GET_NEAREST_SALOON)
    
    const [userDetailQuery , { data: dataUserDetail , error : errorUserDetail , 
                        loading : loadingUserDetail}] = useLazyQuery(GET_USER_PROFILE)

    useEffect(()=>{
        if(dataNearestSaloon){
            console.log('Action is Fired >>',dataNearestSaloon)
            props.nearestSaloon(dataNearestSaloon) 
            dataNearestSaloon.getNearestSalons.forEach(val => {
                setCurrentLat(Number(val.location.coordinates[0]))
                setCurrentLng(Number(val.location.coordinates[1]))
            });
        }
    },[dataNearestSaloon])
       
    useEffect(()=>{
        if(dataUserDetail){
            console.log('Data USer Detail Action is Fired >>',dataUserDetail)
            props.userDetail(dataUserDetail)
        }else if(errorUserDetail){
            console.log('User Detail Error >>' , errorUserDetail)
        }
    },[dataUserDetail,errorUserDetail])

    // console.log('Data is >>' , dataNearestSaloon)
    // console.log('Error is >>' , error)
    // console.log('Loading is >>' , loading)


    const getLoc = async() =>{
        let { status } = await Location.requestPermissionsAsync() ;
        if(status !== 'granted'){
            setLocError('Permision To Access Location is Denied')
            setUserLat(0.0922) ; setUserLng(0.0421)
        }

        let { coords } = await Location.getCurrentPositionAsync({});
        setUserLat(coords.latitude) ; setUserLng(coords.longitude)
    }

    const getToken = async()=>{
        console.log('Async Fired >>>>')
        try {
            const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
            if(token !== null){
                console.log('Async storage token is >>>', token)
                nearestSaloonQuery(
                    {
                        variables: { 
                            latitude: 24.929505 , longitude: 67.115988    //changing to current pos of user
                        } ,
                        context:{
                            headers:{
                                authorization: token
                            }
                        }
                    }
                )
                userDetailQuery(
                    {
                        context:{
                            headers:{
                                authorization: token
                            }
                        }
                    }
                )
                // setToken(token)
            }else{
                console.log('Testing Async')
            }
        } catch (error) {
            console.log('Error Getting AssyncStorage Token >>' , error)
        }
    }

    useEffect(()=>{
        console.log('Map is Mounted >>>>>>>>>>>>>>>>>>')
        getLoc()
        getToken()
    },[])

    const handleFilterPress = () =>{
        setFilterView(!filterView)
    }

    const handleBarPress = () =>{
        // console.log('Bar is Pressed')
        dataNearestSaloon && props.navigation.navigate('SaloonList',{
            nearestSaloons:dataNearestSaloon.getNearestSalons
        })
    }

    const handleMarkerPress = (data) =>{
        console.log('Saloon Data >>' , data)
        props.selectedSaloon(data)
        props.navigation.navigate('SaloonNavigation')
    }

    const handleCurrentLoc =() =>{
        console.log('Loc is Pressed >>>' , userLng , userLat)
        setCurrentLat(userLat)
        setCurrentLng(userLng)
    }

    const handleRegionChanged = (region) =>{
        console.log('Region Changed >>',region)
        // setCurrentLat(region.latitude)
        // setCurrentLng(region.longitude)
    }
    // props.mfa.verifyCode.profileImageURL 

    let imgUri = dataUserDetail && dataUserDetail.getUserProfile.profileImageURL
                // {uri : props.signIn.data.loginUser.profileImageURL } : 
                
    let name = dataUserDetail ? dataUserDetail.getUserProfile.firstName : ''

    return(
        <View style={styles.container}>

            <MapHeader name={name} imgUri={imgUri} nav={props} 
                handleFilterPress={handleFilterPress}/>

            <View style={styles.map}>
                <MapView 
                    style={styles.map}
                    showsUserLocation={true}
                    showsMyLocationButton={false}
                    initialRegion={
                        {
                            latitude:userLat,
                            longitude:userLng,
                            latitudeDelta:0.0922,
                            longitudeDelta:0.0421
                        }
                    }
                    region={
                        { 
                          latitude: currentLat,
                          longitude: currentLng,
                          latitudeDelta: 0.0922,
                          longitudeDelta: 0.0421,
                        }
                      }
                    showsCompass={false}
                    showsUserLocation={true}
                    showsMyLocationButton={false}
                    onRegionChangeComplete={(region)=>{
                       
                        handleRegionChanged(region)
                        // setCurrentLat(region.latitude)
                        // setCurrentLng(region.longitude)
                    }
                    }
                >
                 {  dataNearestSaloon && dataNearestSaloon.getNearestSalons.map((val,index)=>{
                     let loc = val.location.coordinates 
                    // let loc = val.loc
                     console.log('Val is >>',val)
                        return(
                        // <View key={index}>
                            <Marker
                                coordinate={
                                    {
                                        latitude:Number(loc[0]),
                                        longitude:Number(loc[1])
                                    }
                                }
                                // tracksViewChanges={false}
                                // pinColor='red'
                                // liteMode={true}
                                onPress={(e)=>console.log('Marker is Pressed >>>>',e.nativeEvent)}
                            > 
                                {/* <View style={{width:50,height:35}}>
                                    <SvgMapScisorMarker/>
                                </View> */}
                                <MapMarker />
                                <Callout tooltip={true} onPress={()=>handleMarkerPress(val)}>
                                        <MyCallOut marker={val} />
                                </Callout>
                            </Marker>
                        // </View>
                    ) 
                    })
                   
                 }                   
                </MapView>
            </View>

            <MapFooter 
                handleBarPress={handleBarPress}
                handleCurrentLoc={handleCurrentLoc}
            />

            {filterView && <AdvanceFilter handleFilterPress={handleFilterPress}/>}
                
        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        token: state.mfaReducer.token ,
        mfa: state.mfaReducer.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        nearestSaloon: (data) => dispatch(nearestSaloonSuccess(data)) ,
        selectedSaloon: (data) => dispatch(selectedSaloonBookingSuccess(data)) ,
        userDetail: (data) => dispatch(setUserDetailSuccess(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Map);


const styles= StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#fff',
       
    },
    map:{
        flex:8,
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height
    },
    overLay:{
        position: 'absolute',
        zIndex: 9999,
        width: '100%',
        top:40,
    },
    searchContainer:{
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'white',
        borderRadius:10,
        padding:5,
        width:260
    },
    searchIcon:{
        color:'#505050' , 
        paddingRight:10 , 
        paddingLeft:10
    },
    
    
})


