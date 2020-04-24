import React from 'react'
import {View , Text , StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import SetProfileInfo from './SetProfileInfo'
import SetBillingDetail from './SetBillingDetail'


const UserDetail = () =>{

    const [highlight,setHighLight] = React.useState('Profile Detail')
    const pages = [{name:'Profile Detail'} , {name:'Payment Method'}]

    return(
        <View style={styles.container}>
            
            <View style={styles.header}>
                <View style={{marginTop:45}}>
                    <Text style={{fontSize:30}}>User Detail</Text>
                </View>
                <View style={{flexDirection:'row',marginBottom:0 , justifyContent:'space-between'}}>
                    {
                        pages.map((val,index)=>{
                            return(
                                <View >
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
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            {highlight == 'Profile Detail' ? <SetProfileInfo/> : <SetBillingDetail /> }

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
            // elevation:5,
            // marginHorizontal:20
        },
        header:{
            marginHorizontal:20,
            height:'22%',
            backgroundColor:'#fff',
            flexDirection:'column',
            justifyContent:'space-between',
        },
    }
)