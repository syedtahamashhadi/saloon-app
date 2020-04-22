import React from 'react'
import {View , Text , StyleSheet , Image , Dimensions , TouchableOpacity} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { Avatar } from 'react-native-elements'
import Rating from '../component/Rating'
import ShopInfo from '../component/ShopInfo'

const Overlay = () =>{
    return(
        <View style={styles.containerOverlay}>
            <View style={styles.overLay}>
                <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=>console.log('Back Button is Pressed...')}>
                        <AntIcon name="arrowleft" size={25} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>console.log('Heart is Pressed..')}>
                        <View style={styles.heartIcon}>
                            <AntIcon name="hearto" size={22} color="#FA7268" style={{padding:9}}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center' , top:15}}>
                    <Text style={{fontSize:25 , color:'white'}}>TONI&GUY</Text>
                </View>
                
            </View>
            
            <View style={{width:Dimensions.get("window").width  , flex:1}}>
                <Image source={require('../../assets/barber-shave.jpg') } 
                    style={{ height:'35%' , resizeMode:'cover'}}/>
            </View>
        </View>        

    )
}

// export default Overlay

const Shop = () =>{
    const [mannagerName,setMannagerName] = React.useState('Stella Mclaren')
    
    return(
           

        <View style={styles.container}>
            <Overlay />
            
            <View style={styles.containerShop}>
                <View style={styles.shopCard}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatar}>
                            <Avatar rounded source={require('../../assets/cat.jpg')} size={50} />
                        </View>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:20 , top:33 , fontWeight:'bold'}}>
                            {mannagerName}
                        </Text>
                        <Text style={{top:40 , fontWeight:'600'}}>Shop Mannager</Text>
                        <View style={{top:47}}>
                            <Rating rating={4.7}/>
                        </View>
                    </View>

                    <View style={styles.tabsContainer}>
                        <TouchableOpacity onPress={()=>{}}>
                            <Text style={{fontSize:16}}>Info</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}}>
                            <Text style={{fontSize:16}}>Offers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}}>
                            <Text style={{fontSize:16}}>Reviews</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{backgroundColor:'white' , flex:9 }}>
                    {/* <Text style={{top:20 , marginHorizontal:20}}>TEst</Text> */}
                    <ShopInfo />
                </View>
               
            </View>
            
        </View>

    )
}


export default Shop

const styles = StyleSheet.create(
    {
        tabsContainer:{
            flexDirection:'row',
            justifyContent:'space-around',
            top:54,
        },
        container:{
            flex:1,
            backgroundColor: '#fff',
        },
        avatarContainer:{
            alignItems:'center',
            position:'absolute' ,
            zIndex:9999 ,
            flex:1 ,
            width:'100%' ,
            top:-25 ,
        },
        avatar:{
            alignItems:'center',
            justifyContent:'center' ,
            height:53,
            width:53,
            borderRadius:40,
            backgroundColor:'#fff'
        },
        shopCard:{
            backgroundColor:'red',
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
            flex:3,
        },
        containerShop:{
            position:'absolute',
            zIndex:9999,
            width:'100%',
            height:'100%',
            top:150,
        },
        containerOverlay:{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent:'center',
            alignItems:'center',
            marginHorizontal:20,
        },
        overLay:{
            top:30,
            position:'absolute',
            zIndex:9999,
            width:'100%'
        },
        heartIcon:{
            width:40,
            height:40,
            borderRadius:20,
            backgroundColor:'white',
        }
    }
)
