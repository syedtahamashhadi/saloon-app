import React from 'react'
import {View , Text, StyleSheet , ScrollView} from 'react-native'
import {connect} from 'react-redux'


const Languages = (props) =>{

     return(
        <View style={styles.container}>
          
            <View style={{marginTop:40 , justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18}}>
                    Languages
                </Text>
            </View>

        </View>
    )
}


const mapStateToProps = (state) =>{
    return null ;
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        }
    }
)

export default Languages;