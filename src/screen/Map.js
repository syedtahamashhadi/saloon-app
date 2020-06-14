import React , {useEffect} from 'react'
import {View , StyleSheet, Text, Dimensions , TextInput ,Image , TouchableOpacity} from 'react-native'
import MapView , { Marker  , Callout} from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MapFooter from '../component/MapFooter'
import * as Location from 'expo-location'
import MyCallOut from '../component/MyCallOut'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import { useQuery , useLazyQuery } from '@apollo/react-hooks'
import { nearestSaloonSuccess , selectedSaloonBookingSuccess } from '../redux/authenticate/actions'

import {Ionicons} from '@expo/vector-icons'

const Search = (props) =>{
    console.log('Search Props >>' , props)
    const [value, onChangeText] = React.useState('');
    const getGreet = (name) =>{
        let hour = new Date().getHours()
        switch(true){
            case (hour>8 && hour <12):
                return `Good Morning ${name}`
            case (hour>12 && hour<17):
                return `Good Afternoon ${name}`
            default:
                return `Good Evening ${name}`
        }
    }

    const handleImagePress = ()=>{
        console.log('Image is Pressed')
        props.nav.navigation.navigate('EditProfile')

        // props.nav.navigation.navigate('SetProfileInfo')
    }
    return(
        <View style={styles.overLay}>
            <View style={{marginHorizontal:20}}>

                <View style={{flexDirection:"row" , justifyContent:'space-between'}}>
                
                    <Text style={{fontSize:20 ,fontWeight:'bold'}}>{getGreet(props.name)}</Text>
                    <TouchableOpacity onPress={()=>handleImagePress()}>
                        <Image style={{borderRadius:40 , height:40 , width:40,borderWidth:3,borderColor:'#fff'}}
                            source={{uri : props.imgUri}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row" , justifyContent:'space-between' , top:20}}>
                    
                    <View style={styles.searchContainer}>
                        <Icon name="map-marker" size={25} style= {styles.searchIcon} />
                        
                        <TextInput
                            onChangeText={text => onChangeText(text)}
                            placeholder="Whats your style for today"
                            value={value}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <TouchableOpacity onPress={()=>console.log("Filter is pressed")}>
                        <View style={{borderRadius:40 , backgroundColor:'white' , width:40 , height:40}}>
                            <AntIcon name='filter' size={25} style={{marginHorizontal:7 , marginVertical:6}}/>
                        </View>
                    </TouchableOpacity>
                   
                </View>
            </View>
        
        </View>

    )
}
// query getNearestSalons($latitude: Float! , $longitude: Float!)
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
            name
            _id
            status
            rating
            profileImageURL
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
        status
    }
}
`

const Map = (props) =>{

    console.log('Map Props' , props)

    const [userLat,setUserLat] = React.useState(null)
    const [userLng,setUserLng] = React.useState(null)
    const [currentLat,setCurrentLat] = React.useState(null)
    const [currentLng,setCurrentLng] = React.useState(null)

    const [locError,setLocError] = React.useState('')

    const {data , loading , error} = useQuery(GET_NEAREST_SALOON ,
            {
                variables: { 
                    latitude: 24.929505 , longitude: 67.115988    //changing to current pos of user
                } ,
                context:{
                    headers:{
                        authorization: props.token
                    }
                }
            }
        )
    
    useEffect(()=>{
        if(data){
            console.log('Action is Fired >>',data)
            props.nearestSaloon(data)
            data.getNearestSalons.forEach(val => {
                setCurrentLat(Number(val.location.coordinates[0]))
                setCurrentLng(Number(val.location.coordinates[1]))
            });
        }
    },[data])
       
    console.log('Data is >>' , data)
    console.log('Error is >>' , error)
    console.log('Loading is >>' , loading)


    const getLoc = async() =>{
        let { status } = await Location.requestPermissionsAsync() ;
        if(status !== 'granted'){
            setLocError('Permision To Access Location is Denied')
            setUserLat(0.0922) ; setUserLng(0.0421)
        }

        let { coords } = await Location.getCurrentPositionAsync({});
        setUserLat(coords.latitude) ; setUserLng(coords.longitude)
    }

    const handleLocButton = () =>{
        console.log('Current Loc Button is Pressed.....')
    }

    useEffect(()=>{
        console.log('Map is Mounted >>>>>>>>>>>>>>>>>>')
        getLoc()
    },[])

    const handleBarPress = () =>{
        console.log('Bar is Pressed')
        data && props.navigation.navigate('SaloonList',{
            nearestSaloons:data.getNearestSalons
        })
    }

    const handleMarkerPress = (data) =>{
        console.log('Saloon Data >>' , data)
        props.selectedSaloon(data)
        props.navigation.navigate('Saloon')
    }

    let imgUri = props.mfa.verifyCode.profileImageURL 
                // {uri : props.signIn.data.loginUser.profileImageURL } : 
                
    let name = props.mfa.verifyCode.userName

    return(
        <View style={styles.container}>

            <Search name={name} imgUri={imgUri} nav={props}/>

            <View style={styles.map}>
                <MapView 
                    style={styles.map}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
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
                >
                 {  data && data.getNearestSalons.map((val,index)=>{
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
                                pinColor='red'
                                // onPress={()=>handleMarkerPress(val)}
                            > 
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
            />
           
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
        selectedSaloon: (data) => dispatch(selectedSaloonBookingSuccess(data))

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


