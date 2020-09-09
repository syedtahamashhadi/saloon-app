import React from 'react'
import { View , Text , TouchableOpacity , StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'
import AsyncStorage  from '@react-native-community/async-storage'
import { useLazyQuery } from '@apollo/react-hooks'
import Queries from '../../../appolo/queries'
import { TosPpSuccess } from '../../../redux/authenticate/actions'


const TransactionHeader = (props) =>{

    console.log('State in tos>>' , props)

    const [getPolicy , {data , loading , error}] = useLazyQuery(Queries.GET_POLICY)

    const getToken = async() =>{
        try {
            const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
            if(token !== null){
                getPolicy(
                    {
                        context:{
                            headers:{
                                authorization: token,
                            }
                        },
                    }
                )
            }
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(()=>{
        getToken()
    },[])

    React.useEffect(()=>{
        if(data){
            console.log('Tos && PP >>> ',data)
            props.tosPp(data)
        }else if (error){
            console.log('Tos && PP Error >>> ',error)
        }
    },[data,error])
 

    return(
        <View style={styles.container}>
            <View style={{marginTop:35 , marginHorizontal:20 ,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>props.nav.goBack()}>
                    <AntIcon name='arrowleft' size={25} />

                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal:20 , marginTop:10 , marginBottom:5}}>
                <Text style={{fontFamily:'AbrilFatFace' , fontSize:27}}>
                    Terms and Privacy Policy
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

const mapDispatchToProps = (dispatch) =>{
    return{
        tosPp : (data) => dispatch(TosPpSuccess(data))
    }
}

export default connect(null,mapDispatchToProps)(TransactionHeader);

