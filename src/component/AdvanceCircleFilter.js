import React from 'react'
import { View, Text, StyleSheet,Dimensions } from 'react-native'
import CircleList from 'react-native-circle-list'
// import data from  '../advance_circle_filter/Data'
import Icon from 'react-native-vector-icons/FontAwesome'
import SvgScisorFilter from '../../MySvg/SvgScisorFilter'


const {width, height} = Dimensions.get('window')
export default function AdvanceCircleFilter(){

    const renderItem = ({ item }) => {
        return(
            <View style={styles.container}>
                <Text style={{color:'#fff'}}>Hair Cut</Text>
                {/* <Icon size={20} style={styles.icon} name={item.icon} /> */}
                <View style={{width:55,height:55, borderRadius:55 ,backgroundColor:'#fff'
                ,justifyContent:'center',alignItems:'center',marginTop:10}}>
                <View style={{width:40,height:40}}>
                    <SvgScisorFilter/>
                </View>
                </View>
            </View>
        )
    }

    const data  = [{name:'Test1',id:1,value:'t1'},{name:'Test2',id:2,value:'t2'},
                        {name:'Test3',id:3,value:'t3'},
                        {name:'Test4',id:4,value:'t4'},{name:'Test5',id:5,value:'t5'},
                        {name:'Test6',id:6,value:'t6'},{name:'Test7',id:7,value:'t7'},
                        {name:'Test8',id:8,value:'t8'},
                        {name:'Test9',id:9,value:'t9'},{name:'Test10',id:10,value:'t10'},
                        {name:'Test11',id:11,value:'t11'},{name:'Test12',id:12,value:'t12'}
                    
                    ]


        return (
            <CircleList
                data={data}
                radius={1.2 * (width / 2)}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                containerStyle={styles.circleContainer}
                // swipeSpeedMultiplier={120}
            />
        
        )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        borderRadius: 50,
        backgroundColor: 'white',
        padding: 25,
        borderWidth: 1,
    },
    circleContainer:{
        backgroundColor: '#49D3CE', 
        borderRadius: 300, 
        height: 460,
        padding: 10,
        width: 470,
        bottom: -50,

    }   
})