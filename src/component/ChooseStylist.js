import React from 'react'
import {View , Text , Image , StyleSheet, TouchableOpacity} from 'react-native'
import { Avatar } from 'react-native-elements'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'
import CheckBox from '../component/CheckBox'
import AntIcon from 'react-native-vector-icons/AntDesign'


const ChooseStylist = (props) =>{
    // const [isPressed,setIsPressed] = React.useState(false)
    const services= [{icon:'dummy',img:require('../../assets/scisor-icon.png')},
                        {icon:'dummy',img:require('../../assets/trimmer-icon.png')},
                        {icon:'dummy',img:require('../../assets/blade-icon.png')},
                        {icon:'dummy',img:require('../../assets/scisor-icon.png')}]

    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row",width:'100%',height:100,backgroundColor:'#fff',alignItems:'center'}}>
                
                <View style={styles.avatarContainer}>
                    <Avatar rounded source={props.img} size={60}/>
                </View>
                
                <View style={{marginLeft:20,width:'73.5%',backgroundColor:'#fff',height:60}}>
                    
                    <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:1}}>
                        <Text style={{fontSize:20}}>{props.name}</Text>
                        <View style={{marginTop:-8}}>

                            <TouchableOpacity onPress={()=>props.getStylist(props.name)}>

                                {props.name==props.selectedStylist ?
                                    <AntIcon name='checkcircle' size={30} style={{color:'#49D3CE'}}/> :

                                    <View style={styles.unChecked}></View>
                                }                       
                    
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:6,alignItems:'center'}}>
                    
                        <View style={{flexDirection:'row',marginLeft:2}}>
                            {services.map((val,index)=>
                                 <View style={styles.serviceAvatarContainer} key={index}>
                                     <Image source={val.img} style={styles.serviceImg}/>
                                 </View>
                            )}
                        </View>
                        
                        <View style={{flexDirection:'row',alignItems:'center',marginBottom:6}}>
                            <AwsomeIcon name='star' size={16} color='#FFA800' style={{paddingRight:6}}/>
                            <Text style={{fontSize:16}}>{props.rating}</Text>
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
            backgroundColor:'#fff',
            borderRadius:40,
            alignItems:'center',
            elevation:5,
        },
        serviceAvatarContainer:{
            width:27,
            height:27,
            borderRadius:15,
            backgroundColor:'#F1F3F8',
            marginRight:10,
            bottom:3,
        },
        unChecked:{
            width:30,
            height:30,
            borderRadius:40,
            backgroundColor:'#fff',
            borderWidth:3,
            borderColor:'#C5C8D8'
        },
        serviceImg:{
            resizeMode:'cover',
            width:'100%',
            height:'100%',
            borderRadius:15

        }
    }
)