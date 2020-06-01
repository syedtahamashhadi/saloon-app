import React from 'react'
import {View , StyleSheet, Text, Dimensions , TextInput ,Image , TouchableOpacity} from 'react-native'
import MapView , { Marker } from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MapFooter from '../component/MapFooter'
import * as Location from 'expo-location'
import { connect } from 'react-redux'
import gql from 'graphql-tag'
import { useQuery , useLazyQuery } from '@apollo/react-hooks'
import { nearestSaloonSuccess } from '../redux/authenticate/actions'

import {Ionicons} from '@expo/vector-icons'

const Search = (props) =>{
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

    return(
        <View style={styles.overLay}>
            <View style={{marginHorizontal:20}}>

                <View style={{flexDirection:"row" , justifyContent:'space-between'}}>
                
                    <Text style={{fontSize:20 ,fontWeight:'bold'}}>{getGreet(props.name)}</Text>
                    
                    <Image style={{borderRadius:40 , height:40 , width:40,borderWidth:3,borderColor:'#fff'}}
                        source={{uri : props.imgUri}}
                    />
                
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
        status
        distance
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

    console.log('Props SignIn >>>>' , props.signIn)

    const [userLat,setUserLat] = React.useState(null)
    const [userLng,setUserLng] = React.useState(null)
    const [locError,setLocError] = React.useState('')

    const {data , loading , error} = useQuery(GET_NEAREST_SALOON ,
            {
                variables: { 
                    latitude: 24.929505 , longitude: 67.115988    //changing to current pos of user
                } ,
                context:{
                    headers:{
                        authorization: props.signIn.token
                    }
                }
            }
        )
    
    React.useEffect(()=>{
        if(data){
            console.log('Action is Fired >>',data)
            props.nearestSaloon(data)
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

    React.useEffect(()=>{
        console.log('Map is Mounted >>>>>>>>>>>>>>>>>>')
        getLoc()
        // getNearestSalons(
        //     {
        //         variables: {
        //             latitude: 24.929505 , longitude: 67.115988
        //         }
        //     }
        // )
    },[])

    let imgUri = props.signIn.data.loginUser.profileImageURL 
                // {uri : props.signIn.data.loginUser.profileImageURL } : 
                
    let name = props.signIn.data.loginUser.userName

    return(
        <View style={styles.container}>

            <Search name={name} imgUri={imgUri} />

            <View style={styles.map}>
                <MapView 
                    style={styles.map}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    region={
                        {
                            latitude:userLat,
                            longitude:userLng,
                            latitudeDelta:0.0922,
                            longitudeDelta:0.0421
                        }
                    }
                    showsCompass={false}
                    showsUserLocation={true}
                >
                 {  data && data.getNearestSalons.map((val,index)=>{
                     let loc = val.location.coordinates 
                    // let loc = val.loc
                     console.log('Loc is >>',loc)
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
                                onPress={()=>{
                                    console.log('Saloon Id is >>',val._id)
                                    props.navigation.navigate('Saloon',{
                                        saloonId: val._id
                                    })
                                }}
                            /> 
                            // {/* </Marker> */}
                        // </View>
                    ) 
                    })
                   
                 }                   
                </MapView>
            </View>

            <MapFooter />
           
        </View>
    )
}

const mapStateToProps = (state) =>{
    return{
        signIn: state.loginReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        nearestSaloon: (data) => dispatch(nearestSaloonSuccess(data))
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


