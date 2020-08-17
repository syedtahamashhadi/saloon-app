import React from 'react'
import { View , Text , StyleSheet  , Image , ScrollView , TouchableOpacity } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { WebView } from 'react-native-webview'


const FaqsDescription = (props) =>{

    return(
        <View style={styles.container}>
           
            <View style={{marginTop:35,flexDirection:'row',marginHorizontal:20}}>
            
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <AntIcon name='arrowleft' size={25}/>
                </TouchableOpacity>

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginHorizontal:20,marginTop:25}}>
                    <Text style={{fontSize:22,fontFamily:'ExoBold'}}>
                        {props.route.params.helpTopic.title}
                    </Text>
                </View>

                <View style={{marginTop:20,marginHorizontal:20}}>
                    <Text style={{fontSize:14,fontFamily:'ExoRegular'}}> 
                        {props.route.params.helpTopic.description}
                    </Text>
                    {/* <WebView 
                        source={{ html: `<p style='text-align: justify;'>Testing</p>` }}
                    /> */}
                </View>

                <View style={{marginHorizontal:20}}>
                    <View style={{marginTop:15,width:'100%',height:180,backgroundColor:'red'}}>
                        <Image source={require('../../assets/barber-shave.jpg')} style={styles.img}/>
                    </View>
                </View>

                <View style={{marginTop:20}}>
                    <Text style={{fontSize:15,fontFamily:'ExoRegular',textAlign:'center'}}>
                        Was this answer helpfull?
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={()=>console.log('Yes is Pressed')}>
                        <Text style={styles.yesButton}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>console.log('No is Pressed')}>
                        <Text style={styles.noButton}>No</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

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
        },
        buttonContainer: {
            marginTop: 20,
            marginBottom:20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal:20,
            // backgroundColor:'green',
            // width:'100%'
        },
        yesButton: {
            fontSize: 18,
            textAlign: 'center',
            borderWidth: 2,
            borderColor: '#49d3ce',
            color:'#ffff',
            backgroundColor:'#49d3ce',
            borderRadius: 50,
            width: 140,
            padding: 8
        },
        noButton: {
            fontSize: 18,
            color: 'black',
            textAlign: 'center',
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 50,
            width: 140,
            padding: 8,
            backgroundColor: '#fff'
        },
    }
)



export default FaqsDescription;