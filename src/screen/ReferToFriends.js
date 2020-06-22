import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'
import Awsome5Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntIcon from 'react-native-vector-icons/Entypo'
// import AntIcon from 'react-native-vector-icons/AntDesign'





const ReferToFriends = () =>{

    const socialList = [    {icon: AwsomeIcon , icon_name:'facebook' , name:'facebook'},
                            {icon: Awsome5Icon , icon_name:'facebook-messenger' , name: 'Messenger'},
                            {icon: AwsomeIcon , icon_name:'whatsapp' , name: 'WhatsApp'},
                            {icon: AntIcon , icon_name:'twitter' , name: 'Twitter'},
                            {icon: EntIcon , icon_name:'dots-three-horizontal' , name: 'Other'},


                        ]

    return(
        <View style={styles.container}>
            {/* <View style={{marginHorizontal:20}}> */}

                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={()=>console.log('Back is Pressed >>')}>
                        <AntIcon name='arrowleft' size={25} color='black'/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.heading}>
                    Refer to friend
                </Text>

                <View style={styles.socialMainContainer}>
                    
                    {socialList.map((val,index)=>{
                        return(
                            <View style={styles.socialContainer}>
                                <TouchableOpacity onPress={()=>console.log('Social is Pressed')}>

                                    <View style={styles.socialContent}>
                                        <View style={styles.socialIcon}>
                                            <val.icon name={val.icon_name} size={20}/>
                                        </View>
                                        <Text style={styles.socialText}>
                                            {val.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                                
                    })}
                    

                    {/* <View style={styles.socialContainer}>
                        <TouchableOpacity onPress={()=>console.log('Social is Pressed')}>

                            <View style={styles.socialContent}>
                                <View style={styles.socialIcon}>
                                    <Awsome5Icon name='facebook-messenger' size={20}/>
                                </View>
                                <Text style={styles.socialText}>
                                        Messenger
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                
                </View>
                
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        },
        backContainer:{
            marginTop:35,
            marginHorizontal:20,
        },
        heading:{
            marginTop:15,
            // fontFamily:''
            fontSize:25,
            marginHorizontal:20,
            fontWeight:'bold'
        },
        socialMainContainer:{
            marginTop:40,
            width:'100%'
        },
        socialContainer:{
            width:'100%',
            height:50,
            // backgroundColor:'red',
            justifyContent:'center',
            // paddingLeft:10,
            borderBottomWidth:0.5,
            borderBottomColor:'grey'
        },
        socialContent:{
            flexDirection:'row',
            // justifyContent:'center'
            marginLeft:20,
            width:180,
            height:30,
            // backgroundColor:'red',
            // justifyContent:'space-between',
            alignItems:'center'

        },
        socialIcon:{
            // marginRight:10
        },
        socialText:{
            fontSize:15,
            marginLeft:20
            // justifyContent:'center',
            // alignItems:'center',
            // flex:1
        }

    }
)


export default ReferToFriends;