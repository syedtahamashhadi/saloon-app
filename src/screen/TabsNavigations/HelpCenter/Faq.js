import React from 'react'
import { View , StyleSheet , Text , Touchable , TouchableOpacity , ScrollView } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import gql from 'graphql-tag'
import {useQuery , useLazyQuery} from '@apollo/react-hooks'
import { connect } from 'react-redux'


const GET_HELP_TOPICS = gql `
{
    getHelpTopic {
        title
        description
    }
  }
`


const Faq = (props) =>{

    console.log('Props  >> ' , props)
    const {data , loading , error} = useQuery(GET_HELP_TOPICS , 
            {
                context:{
                    headers:{
                        authorization: props.token
                    }
                }
            }
        )

    console.log('Data >>',data)
    console.log('Loading >>',loading)
    console.log('Data >>',error)


    return(
        <View style={styles.container}>

            <View style={{marginHorizontal:20}}>

                <Text style={{fontSize:18 , fontFamily:'ExoBold' , marginTop:20}}>
                    How can we help you?
                </Text>

            </View>
            <View style={{marginTop:20 , marginHorizontal:20}}>
                {
                    data && data.getHelpTopic.map((val,index)=>{
                        return(
                            <View style={{marginBottom:18 ,backgroundColor:'#fff',  flexDirection:'row' , justifyContent:'space-between'}}>
                                <Text style={{fontSize:16 , fontFamily:'ExoRegular'}}>
                                    {`${val.title}`}
                                </Text>
                                <View style={{justifyContent:'flex-end'}}>
                                    <AntIcon name='right' size={16} />
                                </View>
                            </View>
                        )
                    })
                }
                

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
        token : state.mfaReducer.token
    }
}

export default connect(mapStateToProps,null)(Faq);