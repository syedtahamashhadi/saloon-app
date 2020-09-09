import React from 'react'
import {View , Text , StyleSheet ,ActivityIndicator, ScrollView} from 'react-native'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'
import gql from 'graphql-tag'
import { useQuery , useLazyQuery } from '@apollo/react-hooks'
import { connect } from 'react-redux'
import { setTabHeaderSuccess } from '../../../redux/authenticate/actions'
import AsyncStorage from '@react-native-community/async-storage'
import Queries from '../../../appolo/queries'
import TransactionHistoryCard from '../../../component/TransactionHistoryCard'


const TransactionHistory = (props) =>{
    console.log('Props History' , props)

    const [getUserBookingQuery,{data , loading , error}] = useLazyQuery(Queries.GET_USER_BOOKING)

    console.log('Data is  taransaction history>>' , data)
    console.log('Loading is >>' , loading)
    console.log('Error is >>' , error)

    React.useEffect(()=>{
        async function getToken(){
            try {
                const token = await AsyncStorage.getItem('@KOMB_JWT_TOKEN')
                if(token !== null){
                    getUserBookingQuery(
                        {variables:{
                                userId: props.userDetial.getUserProfile._id
                            },
                            context:{
                                headers:{
                                    authorization: token
                                }
                            }
                        }
                    )
                }
            } catch (error) {
                console.log(error)
            }
        }
        getToken()
    },[])

    React.useEffect(()=>{
        if(data){
            console.log('API CALL DATA' , data)
        }else if(error){
            console.log('API CALL Error' , error)
        }
    },[data,error])

    // React.useEffect(()=>{
    //     console.log('I am Mounted >>>')
    // },[props.navigation.route])

    return(
        <View style={styles.container}>
            {
                loading ? 
                <ActivityIndicator size='large' color='#49d3ce' />
                :
                <ScrollView>
                    {data && data.getUserAppointment.map((item, index) => {
                        return <TransactionHistoryCard key={index} data={item}/>
                    })
                    }
                </ScrollView>
            }
            
        </View>
    )
}

const styles= StyleSheet.create(
    {
        container :{
            flex:1,
            backgroundColor:'#fff'
        }
    }
)

const mapStateToProps = (state) =>{
    return{
        token: state.mfaReducer.token,
        userDetial: state.setuserDetailReducer.data,      
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         header: (data) => dispatch(setTabHeaderSuccess(data))
//     }
// }


export default connect(mapStateToProps,null)(TransactionHistory);

