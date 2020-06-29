import React from 'react'
import { View , Text , TouchableOpacity , StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'


const HelpCenterHeader = (props) =>{

    console.log('State >>' , props)
    return(
        <View style={styles.container}>
            <View style={{marginTop:35 , marginHorizontal:20 ,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>props.nav.goBack()}>
                    <AntIcon name='arrowleft' size={25} />
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal:20 , marginTop:10 , marginBottom:5}}>
                <Text style={{fontFamily:'AbrilFatFace' , fontSize:30}}>
                    Help Center
                    {/* {props.header.data} */}
                </Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            // flex:1,
            backgroundColor:'#fff'
        }
    }
)

// const mapStateToProps = (state) =>{
//     return{
//         header : state.setHeaderReducer
//     }
// }

export default HelpCenterHeader;

