import React from 'react'
import { View , Text , TouchableOpacity , StyleSheet } from 'react-native'
import Button from '../component/Button'
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'



const EditProfile = (props) =>{

    const [storageErr,setStorageErr] = React.useState('')

    const storeData = async (value) => {        //https://react-native-community.github.io/async-storage/docs/usage
        try {
          await AsyncStorage.setItem('@storage_Key', value)
        } catch (err) {
          // saving error
          console.log('Error Accured >>>')
            setStorageErr(err)
        }
    }

    
    const getData = async () => {
        try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
            // value previously stored
            console.log('Stored Value is >>' , value)
        }
        } catch(e) {
        // error reading value
        console.log('Error Accured >>>')
        setStorageErr(err)
        }
    }
  
    const handleButton=()=>{
        console.log('Handle Button is Pressed >>')
        storeData('testing328')

    }

    React.useEffect(()=>{
        getData()
    },[])
    const myColor = storageErr ? 'red' : '#fff'
    return(
        <View style={styles.container}>

            <View style={styles.upperScreen}>

                <View style={{marginHorizontal:20}}>

                    <View style={{marginTop:35,flexDirection:'row',justifyContent:'flex-end'}}>
                        <TouchableOpacity onPress={()=>console.log('Edit is Pressed')}>
                            <Text style={{color:myColor,fontSize:16}}>Edit</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop:5,width:'100%',justifyContent:'center',alignItems:'center',}}>
                        <View style={{width:60,height:60,backgroundColor:'green',borderRadius:40,
                                        borderWidth:3,borderColor:'#fff'}}>

                        </View>
                        <Text style={{marginTop:3,color:'#fff',fontFamily:'AbrilFatFace',fontSize:15}}>
                            Jake
                        </Text>
                        <Text style={{marginTop:0,marginBottom:15,color:'#fff',fontFamily:'AbrilFatFace'}}>
                            testing328@yopmail.com
                        </Text>

                    </View>

                </View>

            </View>

            <View style={styles.lowerScreen}>

                <View style={{marginHorizontal:20}}>
                    
                    <View style={styles.cardsContainer}>
                        
                        <TouchableOpacity onPress={()=>console.log('Card is Pressed')}>
                            <View style={styles.card}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>console.log('Card is Pressed')}>
                            <View style={styles.card}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>console.log('Card is Pressed')}>
                            <View style={styles.card}></View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={()=>console.log('Card is Pressed')}>
                            <View style={styles.card}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>console.log('Card is Pressed')}>
                            <View style={styles.card}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>console.log('Card is Pressed')}>
                            <View style={styles.card}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>console.log('Card is Pressed')}>
                            <View style={styles.card}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>console.log('Card is Pressed')}>
                            <View style={styles.card}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>console.log('Card is Pressed')}>
                            <View style={styles.card}></View>
                        </TouchableOpacity>
                        

                        


                    </View>

                    <TouchableOpacity onPress={()=>console.log('Tos Is Pressed')}>
                        <Text style={styles.tos}> Terms and Privacy Policy </Text>
                    </TouchableOpacity>

                    <Button title='Log out' handleButton={handleButton} textSize={18}/>

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
        upperScreen:{
            flex:3,
            backgroundColor:'#49D3CE',
            borderBottomRightRadius:20,
            borderBottomLeftRadius:20,
        },
        userDetail:{
            justifyContent:'center',
        },
        lowerScreen:{
            flex:7,
            backgroundColor:'#fff'
        },
        cardsContainer:{
            marginTop:20,
            // backgroundColor:'red',
            width:'100%',
            // height:350,
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between'
        },
        card:{
            width:90,
            height:85,
            backgroundColor:'#fff',
            borderRadius:5,
            elevation:10,
            marginBottom:10,
        },
        tos:{
            fontFamily:'AbrilFatFace',
            fontSize:15,
            textAlign:'center',
            marginTop:10,
            textDecorationLine:'underline'
        },

    }
)


export default EditProfile;