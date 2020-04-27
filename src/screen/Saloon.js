import React from 'react'
import {View,ScrollView,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Rating from '../component/Rating'
import SaloonInfo from '../component/SaloonInfo'


const Saloon = () =>{

    const [highlight,setHighLight] = React.useState('Info')

    const pages = [{name:'Info'} , {name:'Offers'} , {name:'Reviews'}]

    const getComponent = (val) =>{
        
        switch (true) {
            case val == 'Info': return <SaloonInfo />
            case val == 'Offers': return  <View style={{justifyContent:'center',alignItems:'center'}}><Text>Offers</Text></View>
            case val == 'Reviews': return   <View style={{justifyContent:'center',alignItems:'center'}}><Text>Reviews</Text></View>      
            default: return <SaloonInfo />
        }
    }
  
    return(
        <View style={styles.container}>
            <View style={{flex:3,backgroundColor:'red'}}>
                <View>
                    <Image source={require('../../assets/barber-shave.jpg')} style={styles.image}/>

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
                                TONI&GUY
                            </Text>
                        </View>
                    </View>
                    
                </View>
            </View>

            <View style={{flex:7.5,backgroundColor:'#fff',borderTopLeftRadius:20,borderTopRightRadius:20
                            ,top:-16}}>
                <View style={{alignItems:'center',height:'35%',backgroundColor:'#fff',width:'100%',
                borderTopLeftRadius:20,borderTopRightRadius:20,elevation:5}}>
                    <View style={{width:55,height:55,borderRadius:45,backgroundColor:'red',borderWidth:3,
                                        borderColor:'#fff',elevation:5,top:-25}}>
                            <Image source={require('../../assets/mannager.png')} style={styles.imgMannager}/>
                    </View>
                    <Text style={{top:-10,fontWeight:'bold',fontSize:15}}>Stella Mclarren</Text>
                    <Text style={{top:0,color:'grey'}}>Shop Mannager</Text>
                    <View style={{marginTop:5}}></View>
                    <Rating rating={4.7}/>
                   
                   <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',marginTop:5}}>
                       
                       {
                           pages.map((val,index)=>{
                            return(
                                <View >
                                    <TouchableOpacity onPress={()=>setHighLight(val.name)} key={index}>
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
                    {getComponent(highlight)}
                </View>


            </View>
        </View>
    )
}

export default Saloon;


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
