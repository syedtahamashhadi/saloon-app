import React from 'react'
import {View , Text , StyleSheet , TouchableOpacity, ScrollView, TextInput} from 'react-native'


const TimeCard = (props) =>{

    return(
            
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {props.timeData.map((val,index)=>{
                    const myStyle = (val.tm==props.time) ? styles.selectedTimeContainer : styles.timeContainer
                    const myTextColor = (val.tm==props.time) ? '#fff' : 'black'
                    return(
                        <TouchableOpacity onPress={()=>props.getTime(val.tm)} key={index}>
                            <View style={myStyle}>
                                <Text style={{ fontSize:20 , color:myTextColor}}>{val.tm}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}            
            </ScrollView>
               
            
    )
}

export default TimeCard

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            marginHorizontal:20,
            top:80,
        },
        selectedTimeContainer:{
            width : 80 ,
            height:60 ,
            borderRadius:20,
            backgroundColor:'#49D3CE',
            alignItems:'center',
            justifyContent:'center',
            marginRight:10,
        },
        timeContainer:{
            width : 80 ,
            height:60 ,
            borderRadius:20,
            backgroundColor:'#F1F3F8',
            alignItems:'center',
            justifyContent:'center',
            marginRight:10,
        },
        

    }
)