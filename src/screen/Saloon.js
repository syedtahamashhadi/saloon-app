import React from 'react'
import {View,ScrollView,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Rating from '../component/Rating'
import SaloonInfo from '../component/SaloonInfo'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { connect } from 'react-redux'


const GET_SALOON_BY_ID = gql `
    query abc($_id: ID!)
    {
        salon(_id: $_id) {
            displayName
            backgroundProfileImage
            rating
            profileImage
            portfolioImages

            services{
                name
                _id
                description
                approxTime
                price
            }

            serviceProviders{
                name
                _id
                status
                rating
                profileImageURL
            }
        }
    }
`

const Saloon = (props) =>{

    const {saloonId} = props.route.params
    console.log('ID IS >>>>' , typeof saloonId)

    const [highlight,setHighLight] = React.useState('Info')

    const pages = [{name:'Info'} , {name:'Offers'} , {name:'Reviews'}]

    const {data , loading , error} = useQuery(GET_SALOON_BY_ID , 
            {
                variables: {
                    _id: saloonId
                } ,
                // fetchPolicy: 'network-only',
                context:{
                    headers:{
                        authorization:  props.signIn.token
                    }
                }
            }
        )
    
    console.log('Data is >>',data)
    console.log('Error is >>',error)
    console.log('loading is >>',loading)

    const getComponent = (val,data) =>{
        console.log('Data is >>' , data)
        switch (true) {
            case val == 'Info': return  <SaloonInfo
                                            stylist={data.salon.serviceProviders}
                                            services={data.salon.services} 
                                            portfolioImg={data.salon.portfolioImages}
                                            navigation={props.navigation}
                                       />
            case val == 'Offers': return  <View style={{justifyContent:'center',alignItems:'center'}}><Text>Offers</Text></View>
            case val == 'Reviews': return   <View style={{justifyContent:'center',alignItems:'center'}}><Text>Reviews</Text></View>      
            default: return <SaloonInfo />
        }
    }

    let bannerImg = (data && data.salon.backgroundProfileImage !== 'background.jpg') ? {uri : data.salon.backgroundProfileImage} :
                    require('../../assets/barber-shave.jpg')

    const handleNavPress = (val) =>{
        setHighLight(val.name)
    }
  
    return(
        <View style={styles.container}>
            <View style={{flex:3,backgroundColor:'red'}}>
                <View>
                    <Image source={bannerImg} style={styles.image}/>

                    <View style={{position:'absolute',zIndex:999,width:'100%'}}>
                        <View style={{flexDirection:'row' , justifyContent:'space-between',marginHorizontal:20
                                        ,marginTop:30}}>
                            <TouchableOpacity onPress={()=>console.log('Back Button is Pressed...')}>
                                <AntIcon name="arrowleft" size={25} color="white"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>console.log('Heart is Pressed..')}>
                                <View style={styles.heartIcon}>
                                    <AntIcon name="hearto" size={22} color="#FA7268" style={{padding:9}}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop:0,alignItems:'center'}}>
                            <Text style={{fontSize:30,fontWeight:'bold',color:'#fff'}}>
                               { (data && data.salon.displayName) ? data.salon.displayName : 'TONI&GUY'}
                            </Text>
                        </View>
                    </View>
                    
                </View>
            </View>

            <View style={{flex:7.5,backgroundColor:'#fff',borderTopLeftRadius:20,borderTopRightRadius:20
                            ,top:-16}}>
                <View style={{alignItems:'center',height:'35%',backgroundColor:'#fff',width:'100%',
                borderTopLeftRadius:20,borderTopRightRadius:20,elevation:1}}>
                    <View style={{width:55,height:55,borderRadius:45,backgroundColor:'red',borderWidth:3,
                                        borderColor:'#fff',elevation:5,top:-25}}>
                            <Image source={require('../../assets/mannager.png')} style={styles.imgMannager}/>
                    </View>
                    <Text style={{top:-10,fontWeight:'bold',fontSize:15}}>Stella Mclarren</Text>
                    <Text style={{top:0,color:'grey'}}>Shop Mannager</Text>
                    <View style={{marginTop:5}}></View>
                    <Rating rating={(data && data.salon.rating ) ? data.salon.rating : 4.7}/>
                   
                   <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',marginTop:5}}>
                       
                       {
                           pages.map((val,index)=>{
                            return(
                                <View style={{width:80 , backgroundColor:'#fff',alignItems:'center'}} >
                                    <TouchableOpacity onPress={()=>handleNavPress(val)} key={index}>
                                        <Text>{val.name}</Text>
                                    </TouchableOpacity>
                                    {val.name == highlight ? 
                                            <View style={{height:3,width:'100%' ,backgroundColor:'#49D3CE'}}></View> :
                                        null}
                                </View>
                            )
                        })
                       }
                        
                   </View>
                </View>
                
                <View style={{marginHorizontal:20}}>
                    {data !== undefined ? getComponent(highlight,data) : null}
                </View>


            </View>
        </View>
    )
}


const mapStateToProps = (state) =>{
    return{
        signIn: state.loginReducer
    }
}

export default connect(mapStateToProps,null)(Saloon);


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
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
            backgroundColor:'#fff',
            elevation:5,
        }
    }
)
