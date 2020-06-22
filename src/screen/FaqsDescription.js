import React from 'react'
import { View , Text , StyleSheet  , Image , ScrollView} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'



const FaqsDescription = (props) =>{

    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:20}}>

                <View style={{flexDirection:'row',marginTop:35}}>
                    <AntIcon name='arrowleft' size={25}/>
                </View>

                <View style={{marginTop:20}}>
                    <Text style={{fontFamily:'AbrilFatFace' , fontSize:30}}>
                        How do I use Alipay to pay?
                    </Text>
                </View>

                <View style={{marginTop:15}}>
                    <Text style={{fontSize:14,fontFamily:'ExoRegular' ,textAlign:'justify'}}>
                        GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and
                        data.

                        A GraphQL service is created by defining types and fields on those types, 
                        then providing 
                    </Text>
                </View>

                <View style={{width:'100%',height:170 , backgroundColor:'powderblue' , marginTop:10}}>
                    <Image source={require('../../assets/barber-shave.jpg')} style={styles.img}/>
                </View>

                <View style={{marginTop:10,alignItems:'center'}}>
                    <Text style={{fontSize:15 , fontFamily:'ExoRegular' , textAlign:'center'}}>
                        Was this answer helpful?
                    </Text>
                </View>



            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        },
        img:{
            resizeMode:'cover',
            width:'100%',
            height:'100%'
        }
    }
)



export default FaqsDescription;