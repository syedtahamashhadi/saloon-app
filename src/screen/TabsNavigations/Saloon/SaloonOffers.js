import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity } from 'react-native'



const SaloonOffers = (props) =>{

    return(
        <View style={styles.container}>
            <View style={{alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:15}}>
                    Saloon Offers
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        }
    }
)

export default SaloonOffers;











