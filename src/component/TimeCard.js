import React from 'react'
import {View , Text , StyleSheet , TouchableOpacity, ScrollView, TextInput} from 'react-native'


const TimeCard = () =>{

    const [time,setTime] = React.useState(false)
    const timeData = [{tm:'09:00'},{tm:'09:30'},{tm:'10:00'},{tm:'10:30'},{tm:'11:00'},{tm:'11:30'},]
    return(
        <View style={styles.container}>
            
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {timeData.map((val,index)=>{
                    const myStyle = (val.tm==time) ? styles.selectedTimeContainer : styles.timeContainer
                    const myTextColor = (val.tm==time) ? '#fff' : 'black'
                    return(
                        <TouchableOpacity onPress={()=>setTime(val.tm)} key={index}>
                            <View style={myStyle}>
                                <Text style={{ fontSize:20 , color:myTextColor}}>{val.tm}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}            
            </ScrollView>
               
            
        </View>
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