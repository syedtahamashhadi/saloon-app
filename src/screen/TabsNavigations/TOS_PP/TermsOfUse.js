import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet} from 'react-native'





const TermsOfUse = (props) =>{

    return(
        <View style={styles.container}>
            <View style={{marginTop:40 , justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18}}>
                    Terms of Use
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

export default TermsOfUse;