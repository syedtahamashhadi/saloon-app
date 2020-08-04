import React from 'react'
import { View, Text, StyleSheet,Dimensions } from 'react-native'
import CircleList from 'react-native-circle-list'
// import data from  '../advance_circle_filter/Data'
// import Icon from 'react-native-vector-icons/FontAwesome'
import SvgTrimerFilter from '../../MySvg/SvgTrimerFilter'


const {width, height} = Dimensions.get('window')
export default function AdvanceTreatmentFilter(){

    const renderItem = ({ item }) => {
        return(
            <View style={styles.container}>
                {/* <Icon size={20} style={styles.icon} name={item.icon} /> */}
                <View style={{width:45,height:45, borderRadius:45 ,backgroundColor:'#fff'
                ,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:25,height:25}}>
                    {/* <SvgScisorFilter/> */}
                    <SvgTrimerFilter/>

                </View>
                </View>
                <Text style={styles.text}>Trim</Text>
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
                radius={1.2 * (width / 2.5)}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                containerStyle={styles.circleContainer}
                swipeSpeedMultiplier={140}
                // visiblityPadding={4}
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
        padding: 20,
        borderWidth: 1,
    },
    text:{
        color: 'white',
        marginTop:10
    },  
    circleContainer:{
        backgroundColor: '#1D184D', 
        borderRadius: 220, 
        height: 440,
        padding: 15,
        width: 400,
        position: 'absolute',
        bottom: -140,
        left: 35
    }   
})