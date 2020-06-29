import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity } from 'react-native'



const SaloonReviews = (props) =>{

    return(
        <View style={styles.container}>
            <View style={{alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:15}}>
                    Saloon Reviews
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

export default SaloonReviews;











