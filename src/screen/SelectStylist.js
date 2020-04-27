import React from 'react'
import {View,Text,StyleSheet,ScrollView , Dimensions , TouchableOpacity,Image} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { Avatar } from 'react-native-elements'
import Button from '../component/Button'
import ScreenBackgroundImage from '../component/ScreenBackgroundImage'
import Chat from '../component/Chat'
import ChooseStylist from '../component/ChooseStylist'

const SelectStylist = () =>{
    const [pageView,setPageView] = React.useState(3.5)
    const [selectedStylist,setSelectedStylist]=React.useState('')

    const getStylist = (stylist) =>{
        setSelectedStylist(stylist)
    }

    const stylistData = [{img:require('../../assets/stylist-1.png'),name:'Sherry Palmel',rating:5.0},
                        {img:require('../../assets/stylist-2.png'),name:'Matt Perry',rating:5.0},
                        {img:require('../../assets/stylist-3.png'),name:'Kelly Menston',rating:4.5},
                        {img:require('../../assets/stylist-4.png'),name:'Martin.T',rating:3.5}]
    

    const handlePageView= () =>{
        pageView==3.5 ? setPageView(1) : setPageView(3.5)
    }

    const handleButton = () =>{
        console.log('Button is Presse....')
    }

    return(
        <View style={styles.container}>
            
            <View style={{flex:pageView , backgroundColor:'#fff', marginHorizontal:20}}>
                
                <View style={{flexDirection:"row" , justifyContent:'space-between' , top:35 }}>
                        <TouchableOpacity onPress={()=>console.log('Back Button is Pressed...')}>
                            <AntIcon name="arrowleft" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>console.log('Heart is Pressed..')}>
                            <FeatherIcon name="shopping-bag" size={22} color="black" />
                            <View style={styles.badge}>
                                <Text style={{alignItems:'center',fontSize:12}}>5</Text>
                            </View>
                        </TouchableOpacity>
                </View>
                <View style={{marginTop:50}}>
                    <Chat 
                        desc='Hey, time to choose a speacilist you need and a service you want'
                    />
                </View>

            </View>

            <View style={{flex:6.5 , backgroundColor:'#fff'}}>
                
                <ScreenBackgroundImage 
                    title='TONI&GUY' 
                    desc='Book and experience our stylist'
                    time={22}
                    handlePageView={handlePageView}
                    bannerImg= {require('../../assets/barber-shave.jpg')}
                />

                <View style={{marginTop:15 , marginHorizontal:20 }}>
                    <Text style={{fontSize:25}}>Choose a stylist</Text>
                </View>

                <ScrollView style={{marginTop:15 , marginHorizontal:20}} showsVerticalScrollIndicator={false}>
                    {stylistData.map( (val,index)=>{
                        return(
                            <View key={index}>
                                <ChooseStylist 
                                    name={val.name}
                                    img={val.img}
                                    rating={val.rating}
                                    getStylist={getStylist}
                                    selectedStylist={selectedStylist}
                                />
                            </View>
                            
                        )
                    } )}
                   
                </ScrollView>

                <Button title='Next' handleButton={handleButton}/>

            </View>
        </View>
    )
}

export default SelectStylist;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
        },
        badge:{
            position:'absolute' , 
            height:12,
            width:12,
            borderRadius:40,
            left:12,
            backgroundColor:'#49D3CE'
        },
        messageContainer:{
            width:'80%',
            backgroundColor:'#f5f9ff',
            borderTopLeftRadius:12,
            borderTopRightRadius:12,
            borderBottomRightRadius:12,
        },
     
    }
)