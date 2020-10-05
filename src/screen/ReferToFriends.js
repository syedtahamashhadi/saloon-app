import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity, Share } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'
import Awsome5Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntIcon from 'react-native-vector-icons/Entypo'
// import AntIcon from 'react-native-vector-icons/AntDesign'





const ReferToFriends = (props) =>{
    console.log('props in ReferToFriends', props)
 
    const socialList = [    {icon: AwsomeIcon , icon_name:'facebook' , name:'Facebook'},
                            {icon: Awsome5Icon , icon_name:'facebook-messenger' , name: 'Messenger'},
                            {icon: AwsomeIcon , icon_name:'whatsapp' , name: 'WhatsApp'},
                            {icon: AntIcon , icon_name:'twitter' , name: 'Twitter'},
                            {icon: EntIcon , icon_name:'dots-three-horizontal' , name: 'Other', action: othersShare},
                        ]

   function othersShare() {
       console.log('Others Share Logic >> ')
    // try {
    //   const result =  Share.share({
    //     message:`Share message`,
    //     title:"React Native Camera Expo Example",
    //     url: beforeImage
    //   });

    //   if (result.action === Share.sharedAction) {
    //     alert("Post Shared")
    //   } else if (result.action === Share.dismissedAction) {
    //     // dismissed
    //     alert("Post cancelled")
    //   }
    // } catch (error) {
    //   alert(error.message);
    // }
  };

    return(
        <View style={styles.container}>

                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <AntIcon name='arrowleft' size={25} color='black'/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.heading}>
                    Refer to friend
                </Text>

                <View style={styles.socialMainContainer}>
                    
                    {socialList.map((val,index)=>{
                        console.log("val in share >>",val)
                        return(
                            <View style={styles.socialContainer} key={index}>
                                <TouchableOpacity onPress={val.action} >

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
        backContainer:{
            marginTop:35,
            marginHorizontal:20,
            flexDirection:'row'
        },
        heading:{
            marginTop:15,
            // fontFamily:''
            fontSize:25,
            marginHorizontal:20,
            // fontWeight:'bold'
            fontFamily:'AbrilFatFace'
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
            marginLeft:20,
            fontFamily:'ExoRegular'
            // justifyContent:'center',
            // alignItems:'center',
            // flex:1
        }

    }
)


export default ReferToFriends;