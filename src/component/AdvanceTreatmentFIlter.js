import React from 'react'
import { View, Text, StyleSheet,Dimensions, Image , TouchableOpacity } from 'react-native'
import CircleList from 'react-native-circle-list'
// import data from  '../advance_circle_filter/Data'
// import Icon from 'react-native-vector-icons/FontAwesome'
import SvgTrimerFilter from '../../MySvg/SvgTrimerFilter'
import myIcon from '../../assets/Icon--24.png'


const {width, height} = Dimensions.get('window')
export default function AdvanceTreatmentFilter(){

    const [selectedStyle,setSelectedStyle] = React.useState(null)
    const [mainText,setMainText] = React.useState(null)


    const renderItem = ({ item }) => {
        let bColor = item.name == selectedStyle ? 'red' : '#fff'

        return(
            <View style={styles.container}>
                {/* <Icon size={20} style={styles.icon} name={item.icon} /> */}
                <TouchableOpacity onPress={()=>setSelectedStyle(item.name)} activeOpacity={0.6}>
                <View style={{width:45,height:45, borderRadius:45 ,backgroundColor: bColor
                ,justifyContent:'center',alignItems:'center'}}>
                <View style={{overflow: 'hidden'}}>
                    <Image style={styles.icon} source={item.icon} />
                </View>
                </View>
                {item.id== mainText+1 ? <Text style={{color: 'white',marginTop:15,fontSize: 12,textAlign:'center'}}>{item.name}</Text> : 
                    <Text style={{color: '#1D184D',marginTop:10,fontSize: 12,textAlign:'center',}}>{item.name}</Text>    
                }
                </TouchableOpacity>
            </View>
        )
    }

    const data  = [
                    {name:'Beard Trim',id:1,value:'t1',icon:require('../../assets/Icon--24.png')},
                    {name:'Head Shave',id:2,value:'t2', icon:require('../../assets/Icon--26.png')},
                    {name:'Full Shave',id:3,value:'t3', icon:require('../../assets/Icon--27.png')},
                    {name:'Test4',id:4,value:'t4', icon:require('../../assets/Icon--28.png')},
                    {name:'Hair Cut',id:5,value:'t5', icon:require('../../assets/Icon--65.png')},
                    {name:'Full Shave',id:6,value:'t3', icon:require('../../assets/Icon--27.png')},
                    {name:'Test4',id:7,value:'t4', icon:require('../../assets/Icon--28.png')},
                    {name:'Test5',id:8,value:'t5', icon:require('../../assets/Icon--65.png')},
                    {name:'Hair Cut',id:9,value:'t5', icon:require('../../assets/Icon--65.png')},
                ]


        return (
            <CircleList
                data={data}
                elementCount={6}
                radius={1.2 * (width / 2.5)}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                containerStyle={styles.circleContainer}
                swipeSpeedMultiplier={80}
                onScrollEnd={(item)=>setMainText(item)}

                // visiblityPadding={4}
            />
        )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    icon:{
        borderRadius: 50,
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor: 'black'
    },
    text:{
        color: 'white',
        marginTop:10,
        fontSize: 12,
        textAlign:'center',
    },  
    circleContainer:{
        backgroundColor: '#1D184D', 
        borderRadius: 220, 
        height: 470,
        paddingVertical: 50,
        paddingHorizontal: 25,
        width: 400,
        position: 'absolute',
        bottom: -180,
        left: 35
    }   
})