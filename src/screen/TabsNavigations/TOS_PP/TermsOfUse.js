import React from 'react'
import {View , Text , ActivityIndicator , StyleSheet} from 'react-native'
import { connect } from 'react-redux'





const TermsOfUse = (props) =>{
    console.log('props in terms of use', props)

    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:20,marginTop:20}}>
                <Text style={{fontSize:20,fontFamily:'ExoBold'}}>{props.tosPp && props.tosPp.getPolicy[1].title}</Text>
                {props.tosPp && props.tosPp.getPolicy[1].description && 
                <Text style={{fontSize:18,fontFamily:'ExoRegular' , marginTop:16}}>
                        {props.tosPp.getPolicy[1].description}
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