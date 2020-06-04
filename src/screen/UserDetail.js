import React from 'react'
import {View , Text , StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import SetProfileInfo from './SetProfileInfo'
import SetBillingDetail from './SetBillingDetail'
import ChangePassword from './ChangePassword'
import AntIcon from 'react-native-vector-icons/AntDesign'


const UserDetail = (props) =>{

    const {currentScreen} = props.route.params

    let screen = currentScreen ? currentScreen : 'Profile Detail'

    const [highlight,setHighLight] = React.useState(screen)
    const pages = [{name:'Profile Detail'} , {name:'Payment Method'} , {name:'Change Password'}]

    const getComponent = (val) =>{
        
        switch (true) {
            case val == 'Profile Detail': return <SetProfileInfo />
            case val == 'Payment Method': return  <SetBillingDetail />
            case val == 'Change Password': return   <ChangePassword />      
            default: return <SetProfileInfo />
        }
    }

    return(
        <View style={styles.container}>
            
            <View style={styles.header}>
                <View style={{marginTop:35 , marginHorizontal:20}}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <AntIcon name='arrowleft' size={25}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:15 , marginHorizontal:20}}>
                    <Text style={{fontSize:30}}>User Detail</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:10 , 
                    marginHorizontal:20}}>
                    <View style={{flexDirection:'row',marginBottom:0 , justifyContent:'space-between'}}>

                    {
                        pages.map((val,index)=>{
                            return(
                                <View style={{marginRight:20}}>
                                    <TouchableOpacity onPress={()=>setHighLight(val.name)} key={index}>
                                        <Text style={{fontSize:18}}>{val.name}</Text>
                                    </TouchableOpacity>
                                    {val.name == highlight ? 
                                            <View style={{height:3,width:'100%' ,backgroundColor:'#49D3CE'}}></View> :
                                        null}
                                </View>
                            )
                        })
                    }
                    </View>
                </ScrollView>
            </View>           

            <ScrollView showsVerticalScrollIndicator={false}>
                {getComponent(highlight)}

            </ScrollView>


        </View>
    )
}

export default UserDetail;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            position:'relative'
        },
        header:{
            // marginHorizontal:20,
            height:'28%',
            backgroundColor:'#fff',
            borderBottomWidth:0.5,
            elevation:5,
        },
    }
)