import React from 'react'
import {View , StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import HomeScreenBanner from '../component/HomeScreenBanner'
import SaloonBanner from '../component/SaloonBanner'
import Footer from '../component/Footer'

const SaloonList = () =>{
    
    const saloonData = [{time:8,name:'Toney & Guy',rating:4.7,distance:1.3},
                        {time:15,name:'La Coupe',rating:4.7,distance:1.3},
                        {time:17,name:'Slough Barber',rating:4.7,distance:1.3}
                        ]

    const handleSaloonPress = (name) =>{
        console.log(`Saloon ${name} is pressed`)
    }
    return(
        <View style={styles.container}>
            
            
            <View style={{marginHorizontal:20}}>
                <HomeScreenBanner />
            </View>
       
            <ScrollView style={{marginTop:40 , marginHorizontal:20}}>
                {saloonData.map((val,index)=> 
                    <TouchableOpacity onPress={()=>{handleSaloonPress(val.name)}}>
                         <SaloonBanner key={index}
                            time={val.time}
                            name={val.name}
                            rating={val.rating}
                            distance={val.distance}
                        />
                    </TouchableOpacity>
                   
                )}
            </ScrollView>

            <Footer />
           
        </View>
    )
}

export default SaloonList

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
        },
       
    }
)