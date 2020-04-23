import React from 'react'
import {View , Text , Image , StyleSheet, TouchableOpacity} from 'react-native'
import { Avatar } from 'react-native-elements'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'
import CheckBox from '../component/CheckBox'


const ChooseStylist = () =>{

    const services= [{icon:'dummy'},{icon:'dummy'},{icon:'dummy'},{icon:'dummy'}]
    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row",width:'100%',height:100,backgroundColor:'#fff',alignItems:'center'}}>
                
                <View style={styles.avatarContainer}>
                    <Avatar rounded source={require('../../assets/cat.jpg')} size={60}/>
                </View>
                
                <View style={{marginLeft:20,width:'73.5%',backgroundColor:'#fff',height:60}}>
                    
                    <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:1}}>
                        <Text style={{fontSize:20}}>Sherry Palmel</Text>
                        <View style={{marginTop:-8}}>
                            <CheckBox />
                        </View>
                    </View>
                    
                    <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:6,alignItems:'center'}}>
                    
                        <View style={{flexDirection:'row',marginLeft:2}}>
                            {services.map((val,index)=>
                                 <View style={styles.serviceAvatarContainer} key={index}>

                                 </View>
                            )}
                        </View>
                        
                        <View style={{flexDirection:'row',alignItems:'center',marginBottom:6}}>
                            <AwsomeIcon name='star' size={16} color='#FFA800' style={{paddingRight:6}}/>
                            <Text style={{fontSize:16}}>5.0</Text>
                        </View>
                    
                    </View>

                </View>
            </View>
        </View>
    )
}

export default ChooseStylist;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            // marginHorizontal:20,
        },
        avatarContainer:{
            justifyContent:'center',
            width:65,
            height:65,
            backgroundColor:'blue',
            borderRadius:40,
            alignItems:'center'
        },
        serviceAvatarContainer:{
            width:27,
            height:27,
            borderRadius:15,
            backgroundColor:'#F1F3F8',
            marginRight:10,
            bottom:3,
        }
    }
)