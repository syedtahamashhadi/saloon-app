import React from 'react'
import {View , StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import HomeScreenBanner from '../component/HomeScreenBanner'
import SaloonBanner from '../component/SaloonBanner'
import Footer from '../component/Footer'

const SaloonList = (props) =>{
    console.log('SaloonList Props' , props)

    const {nearestSaloons} = props.route.params
    console.log('Nearest Saloons' , nearestSaloons)
    const saloonData = [{time:8,name:'Toney & Guy',rating:4.7,distance:1.3},
                        {time:15,name:'La Coupe',rating:4.7,distance:1.3},
                        {time:17,name:'Slough Barber',rating:4.7,distance:1.3}
                        ]

    const handleSaloonPress = (val) =>{
        console.log(`Saloon is pressed`)
        props.navigation.navigate('Saloon',{
            saloon: val
        })
    }
    return(
        <View style={styles.container}>
            
            
            <View style={{marginHorizontal:20}}>
                <HomeScreenBanner />
            </View>
        
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:40 , marginHorizontal:20}}>
                {nearestSaloons.map((val,index)=> 
                    <TouchableOpacity onPress={()=>{handleSaloonPress(val)}}>
                         <SaloonBanner key={index}
                            time={15}
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

export default SaloonList

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
        },
       
    }
)