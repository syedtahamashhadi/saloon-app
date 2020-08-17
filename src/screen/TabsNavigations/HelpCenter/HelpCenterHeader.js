import React from 'react'
import { View , Text , TouchableOpacity , StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import { connect } from 'react-redux'


const HelpCenterHeader = (props) =>{

    console.log('State >>' , props)

    const [showSearchIcon,setShowSearchIcon] = React.useState(false)

    React.useEffect(()=>{
        if(props.navProps.route.state && props.navProps.route.state.index==1){
            setShowSearchIcon(true)
        }else{
            setShowSearchIcon(false)
        }
    },[props.navProps])

    return(
        <View style={styles.container}>
            <View style={{marginTop:35 , marginHorizontal:20 ,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>props.nav.goBack()}>
                    <AntIcon name='arrowleft' size={25} />
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal:20 , marginTop:10 , marginBottom:5 , flexDirection:'row' , justifyContent:'space-between'}}>
                <Text style={{fontFamily:'AbrilFatFace' , fontSize:30}}>
                    Help Center
                    {/* {props.header.data} */}
                </Text>
                {showSearchIcon && <TouchableOpacity onPress={()=>props.nav.navigate('FaqSearch',{data:null})}>
                    <View style={{width:40,height:40,borderRadius:35,backgroundColor:'#fff',elevation:5,justifyContent:'center',alignItems:'center'}}>
                        <AntIcon name='search1' size={25}/>
                    </View>
                </TouchableOpacity>}
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

