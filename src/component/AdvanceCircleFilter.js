import React from 'react'
import { View, Text, StyleSheet,Dimensions, Image , TouchableOpacity} from 'react-native'
import CircleList from 'react-native-circle-list'
// import data from  '../advance_circle_filter/Data'
import SvgScisorFilter from '../../MySvg/SvgScisorFilter'
import Shave from '../../assets/Shave.png'
import HairStyling from '../../assets/HairStyling.png'
import Spa from '../../assets/Spa.png'
import BeardTrim from '../../assets/BeardTrim.png'
import HairCut from '../../assets/HairCut.png'



const {width, height} = Dimensions.get('window')
export default function AdvanceCircleFilter(){


    const [selectedStyle,setSelectedStyle] = React.useState(null)
    const [mainText,setMainText] = React.useState(null)


    const updateMainText = (val) =>{

    }

    const renderItem = ({ item, index }) => {
        console.log("item id", item.id)
        console.log('index>>>', index)

        let bColor = item.name == selectedStyle ? 'red' : 'black'
        // if(item.id == 1){
            return(
            <View style={styles.container} key={item.id}>
                <TouchableOpacity onPress={()=>setSelectedStyle(item.name)} activeOpacity={0.6}>
                {item.id==mainText+1 ? <Text style={{color:'#1D184D', fontSize: 12, fontFamily:'AbrilFatFace',textAlign:'center'}}>
                    {item.name}
                    </Text>:
                    <Text style={{color:'#49D3CE', fontSize: 12, fontFamily:'AbrilFatFace'}}>{item.name}</Text>
                }
                <View style={{width:55,height:55, borderRadius:55 ,backgroundColor:'#fff'
                ,justifyContent:'center',alignItems:'center',marginTop:10}}>
                <View style={{overflow: 'hidden'}}>
                    <Image style={[{borderColor:bColor},styles.icon]} source={item.icon} />
                    {/* <SvgScisorFilter/> */}
                </View>
                </View>
                </TouchableOpacity>
            </View>
            )
    
    }
    


    const data  = [{name:'Hair Cut',id:1,value:'t1', icon:HairCut },
                    {name:'Shave',id:2,value:'t2', icon:Shave},
                    {name:'Hair Styling',id:3,value:'t3', icon:HairStyling},
                    {name:'Spa',id:4,value:'t4', icon:Spa},
                    {name:'Beard Trim',id:5,value:'t5', icon:BeardTrim},
                    {name:'Hair Cut',id:6,value:'t6', icon:HairCut},
                    {name:'Shave',id:7,value:'t7', icon:Shave},
                    {name:'Hair Styling',id:8,value:'t8', icon:HairStyling},
                    {name:'Beard Trim',id:9,value:'t9', icon:BeardTrim},    
                    ]


        return (
            <CircleList
                data={data}
                flatness={0.2}
                radius={1.2 * (width / 2)}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                containerStyle={styles.circleContainer}
                swipeSpeedMultiplier={120}
                onScrollEnd={(item)=>setMainText(item)}
            />
        
        )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    icon:{
        borderRadius: 50,
        // backgroundColor: 'white',
        // padding: 30,
        height: 70,
        width: 70,
        borderWidth: 1,
        // borderColor: 'black'
    },
    circleContainer:{
        marginTop: 10,
        backgroundColor: '#49D3CE', 
        borderRadius: 300, 
        height: 455,
        padding: 12,
        width: 470,
        bottom: -40,

    }   
})