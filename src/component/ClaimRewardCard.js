import React from 'react'
import {View , Text , ScrollView , StyleSheet} from 'react-native'


const ClaimRewardCard = () =>{

    return(
        <View style={styles.container}>

            <View style={{marginTop:60,marginHorizontal:20}}>
                <View style={styles.card}>

                </View>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        },
        card:{
            width:'100%',
            height:150,
            elevation:5,
            justifyContent:'center'
        }

    }
)

export default ClaimRewardCard;
