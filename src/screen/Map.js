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
import { useQuery , useLazyQuery } from '@apollo/react-hooks'
import { nearestSaloonSuccess , selectedSaloonBookingSuccess ,
         setUserDetailSuccess , favSaloonSuccess } from '../redux/authenticate/actions'
import SvgMapScisorMarker from '../../MySvg/SvgMapScisorMarker'
import {Ionicons} from '@expo/vector-icons'
import MapMarker from '../component/MapMarker'
import AdvanceFilters from '../component/AdvanceFilters'
import AsyncStorage from '@react-native-community/async-storage'
import MapHeader from '../component/MapHeader'
import Queries from '../appolo/queries'


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
                loading , error }] = useLazyQuery(Queries.GET_NEAREST_SALOON)
    
    const [userDetailQuery , { data: dataUserDetail , error : errorUserDetail , 
                        loading : loadingUserDetail}] = useLazyQuery(Queries.GET_USER_PROFILE)

    /***************************** Exit  ***********************************/

    // const removeKey = async () =>{
    //     try {
    //         await AsyncStorage.removeItem('@KOMB_JWT_TOKEN' , ()=>{
    //             // props.setIsLogin(false)                
    //             props.navigation.navigate('SignIn')
    //         })
    //     } catch (error) {
    //         console.log('Error >>>' , error)
    //     }
    // }
    // removeKey()
    /***************************************************************************/

    useEffect(()=>{
        if(dataNearestSaloon){
            console.log('Action is Fired >>',dataNearestSaloon)
            props.nearestSaloon(dataNearestSaloon) 
            dataNearestSaloon.getNearestSalons.forEach(val => {
                setCurrentLat(Number(val.location.coordinates[0]))
                setCurrentLng(Number(val.location.coordinates[1]))
            });
        }else if(error){
            console.log('Map Errror >>>>>>>>>>>>>>>' , error)
        }
    },[dataNearestSaloon])
       
    useEffect(()=>{
        if(dataUserDetail){
            console.log('Data USer Detail Action is Fired >>',dataUserDetail)
            props.userDetail(dataUserDetail)
            // props.favSaloon(dataUserDetail.getUserProfile.favouriteSaloon)
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
            // setUserLat(0.0922) ; setUserLng(0.0421)
            setUserLat(51.5074) ; setUserLng(0.1278)
        }

        let { coords } = await Location.getCurrentPositionAsync({});
        console.log('Coords >>>' , coords.latitude)
        setUserLat(coords.latitude) ; setUserLng(coords.longitude)
    }

    const getToken = async()=>{
        console.log('Async Fired >>>>')
        try {
            const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
            if(token !== null){
                console.log('Async storage token is >>>', token)
                console.log('Use lAt >>>' , userLat , '  ' , userLng)
                nearestSaloonQuery(
                    {
                        variables: { 
                            latitude: userLat , longitude: userLng    //changing to current pos of user
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
        // getToken()
    },[])

    useEffect(()=>{
        if(userLat && userLng){
            getToken()
        }
    },[userLat , userLng])

    const handleFilterPress = () =>{
        // console.log('Filter View Current State >>>' , filterView)
        // setFilterView(!filterView)
        filterView == false ? setFilterView(true) : setFilterView(false)
        // props.filterView == false ? props.setIsFilterView(true) : props.setIsFilterView(false) 
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
                handleFilterPress={handleFilterPress}
                />

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
                    // showsUserLocation={true}
                    // showsMyLocationButton={false}
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

            {
            filterView == false && 
                <MapFooter 
                    handleBarPress={handleBarPress}
                    handleCurrentLoc={handleCurrentLoc}
                    handleFilterPress={handleFilterPress}
                />
            }

            {filterView == true ? <AdvanceFilters  handleFilterPress={handleFilterPress}/> : null}
            {/* {props.filterView == true ? <Text>Testing</Text> : null} */}

                
        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        token: state.mfaReducer.token ,
        mfa: state.mfaReducer.data ,
        filterView : state.setIsFilterViewReducer.data ,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        nearestSaloon: (data) => dispatch(nearestSaloonSuccess(data)) ,
        selectedSaloon: (data) => dispatch(selectedSaloonBookingSuccess(data)) ,
        userDetail: (data) => dispatch(setUserDetailSuccess(data)) ,
        // favSaloon: (data) => dispatch(favSaloonSuccess(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Map);


const styles= StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: 'transparent',
       
    },
    map:{
        flex:1,
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


