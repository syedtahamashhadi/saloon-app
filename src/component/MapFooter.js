import React from 'react'
import {View ,Text,Image , StyleSheet,TouchableOpacity} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


const MapFooter = (props) =>{

    return(
            <View style={styles.container}>
                <View >
                    <TouchableOpacity onPress={()=>props.handleCurrentLoc} style={{marginLeft:20}}>
                        <View style={{width:40,height:40,justifyContent:'center',alignItems:'center',
                            borderRadius:40 , backgroundColor:'#fff'}}>
                                <MaterialIcon name='my-location' size={25}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>props.handleCurrentLoc} style={{marginLeft:20,marginTop:10 }}>
                        <View style={{width:40,height:40,justifyContent:'center',alignItems:'center',
                            borderRadius:40 , backgroundColor:'#fff'}}>
                                {/* <MaterialIcon name='my-location' size={25}/> */}
                                <Image source={require('../../assets/bar.png')}/>

                        </View>
                    </TouchableOpacity>

                    {/* <TouchableOpacity>
                        <View style={styles.nextPage}>
                            <Image source={require('../../assets/reverse-arrows.png') } style={{height:30}}/>
                        </View>
                    </TouchableOpacity> */}
                </View>
              
                
            </View>
    )
}

export default MapFooter;
const styles = StyleSheet.create(
    {
        container:{
            position:'absolute',
            zIndex:9999,
            bottom:25,
        },
        nextPage:{
            width:60,
            height:52,
            backgroundColor:'#19479c',
            borderTopLeftRadius:25,
            borderBottomLeftRadius:25,
            justifyContent:'center',
            alignItems:'center',
        },
    }
)

