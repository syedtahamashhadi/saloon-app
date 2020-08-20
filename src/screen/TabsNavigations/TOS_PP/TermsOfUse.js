import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet} from 'react-native'
import { connect } from 'react-redux'





const TermsOfUse = (props) =>{

    return(
        <View style={styles.container}>
            {/* <View style={{marginTop:40 , justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18}}>
                    Terms of Use
                </Text>
            </View> */}
            <View style={{marginHorizontal:20,marginTop:20}}>
                <Text style={{fontSize:20,fontFamily:'ExoBold'}}>Overview</Text>
                {props.tosPp.getPolicy[0].description && 
                <Text style={{fontSize:14,fontFamily:'ExoRegular' , marginTop:16}}>
                        {props.tosPp.getPolicy[0].description}
                </Text>}
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

const mapStateToProps = (state) =>{
    return{
        tosPp : state.tosPpSuccessReducer.data
    }
}

export default connect(mapStateToProps,null)(TermsOfUse);