import React from 'react'
import {View , StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import HomeScreenBanner from '../../component/HomeScreenBanner'
import SaloonBanner from '../../component/SaloonBanner'
import Footer from '../../component/Footer'

const GuestSaloonList = (props) =>{

    const saloonData = [{time:8,name:'Toney & Guy',rating:4.7,distance:1.3},
                        {time:15,name:'La Coupe',rating:4.7,distance:1.3},
                        {time:17,name:'Slough Barber',rating:4.7,distance:1.3}
                        ]

    const handleSaloonPress = () =>{
        console.log(`Saloon is pressed`)
        props.navigation.navigate('GuestSaloon')
    }
    
    return(
        <View style={styles.container}>
            
            
            <View style={{marginHorizontal:20}}>
                <HomeScreenBanner />
            </View>
       
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:40 , marginHorizontal:20}}>
                {saloonData.map((val,index)=> 
                    <TouchableOpacity onPress={()=>{handleSaloonPress(val)}}>
                         <SaloonBanner key={index}
                            time={val.time}
                            name={val.displayName}
                            rating={val.rating}
                            distance={val.distance}
                            backgroundImg={val.backgroundProfileImage}
                        />
                    </TouchableOpacity>
                   
                )}
            </ScrollView>

            <Footer 
                // handleLoc = {()=>props.navigate.goBack()}
                handLocPress = {()=>{props.navigation.goBack()}}
            />
           
        </View>
    )
}

export default GuestSaloonList

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
        },
       
    }
)