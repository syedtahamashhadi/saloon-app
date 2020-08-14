import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet , ScrollView , RefreshControl} from 'react-native'

const EditPayment = (props) =>{

    return(
        <View style={styles.container}>
            
            <View style={{marginTop:40 , justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18}}>
                    Edit Payment
                </Text>
            </View>
        
        </View>
    )
}

const mapStateToProps = (state) =>{
    return null
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        }
    }
)

export default EditPayment;