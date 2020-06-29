import React from 'react'
import {View,ScrollView,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Rating from '../../../component/Rating'
import gql from 'graphql-tag'
import { useQuery , useMutation } from '@apollo/react-hooks'
import { connect } from 'react-redux'


const SET_FAV_SALOON = gql `
mutation abc($id: String! , $status:  Boolean!) {
    setFavoriteSalons(salonId: $id, status: $status)
    {
     email
     favoriteSalon{
         displayName
     }
    }  
  }
`

const Saloon = (props) =>{

    const [setFavSaloon , { data , loading , error }] = useMutation(SET_FAV_SALOON)
  
    const [favPressed,setFavPressed] = React.useState(false)
    
    const saloon = props.selectedSaloon.data
    console.log('ID IS >>>>' , saloon)

    let mannagerImg = (saloon.managerImage) ? {uri : saloon.managerImage} : require('../../../../assets/mannager.png')
    
    const handleHeartPress = () =>{
        console.log('Heart is Presses')
        loading !== true && setFavSaloon(
            {
                variables:{
                    id: saloon._id , status: 'true'
                },
                context:{
                    headers:{
                        authorization: props.token
                    }
                }
            }
        )
    }

    React.useEffect(()=>{
        if(data){
            console.log('Fav Saloon Data >>' , data)
        }else if(error){
            console.log('Fav Saloon Error >>' , error)
        }
    },[data,error])

    let heartBackgroundColor = favPressed ? '#FA7268' : '#fff'
    let heartColor = favPressed ? '#fff' : '#FA7268'
    
    return(
        <View style={styles.container}>
            <View style={{flex:1.8,backgroundColor:'#fff'}}>
                <View>
                    <Image source={require('../../../../assets/barber-shave.jpg')} style={styles.image}/>

                    <View style={{position:'absolute',zIndex:999,width:'100%'}}>
                        <View style={{flexDirection:'row' , justifyContent:'space-between',marginHorizontal:20
                                        ,marginTop:30}}>
                            <TouchableOpacity onPress={()=>props.nav.goBack()}>
                                <AntIcon name="arrowleft" size={25} color="white"/>
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={()=>handleHeartPress()}>
                                <View style={styles.heartIcon}>
                                    <AntIcon name="hearto" size={22} color="#FA7268" style={{padding:9}}/>
                                </View>
                            </TouchableOpacity> */}
                             <TouchableOpacity onPress={()=>setFavPressed(!favPressed)}>
                                <View style={[{backgroundColor:heartBackgroundColor},styles.heartIcon]}>
                                    <AntIcon name="hearto" size={22} color={heartColor}  style={{padding:9}}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop:0,alignItems:'center'}}>
                            <Text style={{fontSize:30,fontWeight:'bold',color:'#fff'}}>
                               { saloon.displayName ? saloon.displayName : 'TONI&GUY'}
                            </Text>
                        </View>
                    </View>
                    
                </View>
            </View>

            <View style={{flex:1.5,backgroundColor:'#fff',borderTopLeftRadius:20,borderTopRightRadius:20,
                            top:-16,marginBottom:-16}}>
                <View style={{alignItems:'center',backgroundColor:'#fff',width:'100%',
                borderTopLeftRadius:20,borderTopRightRadius:20}}>
                    <View style={{width:55,height:55,borderRadius:45,backgroundColor:'#fff',borderWidth:3,
                                        borderColor:'#fff',elevation:5,top:-25}}>
                            <Image source={mannagerImg} style={styles.imgMannager}/>
                    </View>
                    <Text style={{top:-10,fontFamily:'AbrilFatFace',fontSize:18}}>{saloon.managerName}</Text>
                    <Text style={{top:0,color:'grey',fontSize:12,fontFamily:'ExoRegular'}}>Shop Mannager</Text>
                    <View style={{marginTop:5}}></View>
                    <Rating rating={ saloon.rating ? saloon.rating : 4.7}/>
                 
                </View>
                {/*                 
                <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:20}}>
                    {getComponent(highlight,saloon)}
                </ScrollView> */}

            </View>
            {/* <Text style={{marginTop:20,alignItems:'center',fontSize:18}}>Saloon</Text> */}
        </View>
    )
}


const mapStateToProps = (state) =>{
    return{
        signIn: state.loginReducer ,
        selectedSaloon: state.selectedSaloonBookingReducer
    }
}

export default connect(mapStateToProps,null)(Saloon);


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'red'
        },
        image:{
            resizeMode:'cover',
            height:'100%',
            width:'100%'
        },
        imgMannager:{
            resizeMode:'cover',
            height:'100%',
            width:'100%',
            borderRadius:40,
        },
        heartIcon:{
            width:40,
            height:40,
            borderRadius:40,
            // backgroundColor:'#fff',
            elevation:5,
        }
    }
)
