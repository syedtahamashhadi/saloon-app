import React from 'react'
import {View , StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import HomeScreenBanner from '../component/HomeScreenBanner'
import SaloonBanner from '../component/SaloonBanner'
import Footer from '../component/Footer'
import { selectedSaloonBookingSuccess } from '../redux/authenticate/actions'
import { connect } from 'react-redux'


const SaloonList = (props) =>{

    const {nearestSaloons} = props.route.params
    const saloonData = [{time:8,name:'Toney & Guy',rating:4.7,distance:1.3},
                        {time:15,name:'La Coupe',rating:4.7,distance:1.3},
                        {time:17,name:'Slough Barber',rating:4.7,distance:1.3}
                        ]

    const handleSaloonPress = (data) =>{
        props.selectedSaloon(data)
        props.navigation.navigate('SaloonNavigation')
    }
    return(
        <View style={styles.container}>
            
            
            <View style={{marginHorizontal:20}}>
                <HomeScreenBanner nav={props.navigation}/>
                {/* <MapHeader name={name} imgUri={imgUri} nav={props} 
                    handleFilterPress={handleFilterPress}
                /> */}
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
                nav={props.navigation}
            />
           
        </View>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        selectedSaloon: (data) => dispatch(selectedSaloonBookingSuccess(data))

    }
}

export default connect(null,mapDispatchToProps)(SaloonList)

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
        },
       
    }
)