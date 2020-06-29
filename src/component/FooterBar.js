import React from 'react'
import { View , Text , TouchableOpacity , UIManager , StyleSheet , LayoutAnimation , Platform } from 'react-native'
import SvgFooterBarBack from '../../MySvg/SvgFooterBarBack'
import SvgFooterBarBell from '../../MySvg/SvgFooterBarBell'
import SvgFooterBarProfile from '../../MySvg/SvgFooterBarProfile'
import SvgFooterBarMap from '../../MySvg/SvgFooterBarMap'
import SvgFooterBarDiscover from '../../MySvg/SvgFooterBarDiscover'



if(Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental){
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

const FooterBar = () =>{

    // const [fullView,setFullView] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false);

    const [selectedFooter , setSelectedFooter] = React.useState('')

    const footerData = [{name:'Discover' , svg:<SvgFooterBarDiscover height={30} width={25}/>} , {name:'Map' , svg:<SvgFooterBarMap height={30} width={25}/>} , 
                        {name:'Notifications' , svg:<SvgFooterBarBell height={30} width={25}/>} , {name:'Profile' , svg:<SvgFooterBarProfile height={30} width={25}/>} ]

    const handleFooterPress = (val) =>{
        console.log('Selected Value >>>' , val)
        setSelectedFooter(val)
    }
    return(
        // <View style={{flex:1 , marginTop:150}}>
            <View>

                
            <View style={{alignItems:'flex-end',marginTop:0}}>

                {!expanded ? <View style={{width:65,height:60,backgroundColor:'#1D194D',justifyContent:'center',
                    borderTopLeftRadius:30,borderBottomLeftRadius:30,paddingLeft:15,paddingVertical:5}}>
                            <TouchableOpacity 
                                onPress={() => {
                                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                    setExpanded(!expanded);
                                }}
                            >
                                {/* <Text>TEst</Text> */}
                                {/* <SvgFooterBarBack/> */}
                                <View style={{width:40,height:45,backgroundColor:'#1D194D'}}>
                                <SvgFooterBarBack/>

                                </View>
                            </TouchableOpacity>
                </View> :

                <View style={{width:'95%',height:60,backgroundColor:'#1D194D',alignItems:'center',justifyContent:'space-between',
                                borderTopLeftRadius:30,borderBottomLeftRadius:30,flexDirection:'row',
                                    paddingHorizontal:10,paddingVertical:5}}>
                    <TouchableOpacity 
                        onPress={() => {
                            LayoutAnimation.configureNext(LayoutAnimation.Presets.decay);
                            setExpanded(!expanded);
                        }}
                    >
                      
                        <View style={{width:40,height:45,marginRight:10}}>
                            <SvgFooterBarBack/>
                        </View>

                    </TouchableOpacity>
                    {
                        footerData.map((val,index)=>{
                            console.log('My Value >>>' , val)
                            let myColor = selectedFooter.name == val.name ? '#49D3CE' : '#fff'
                            return(
                                <TouchableOpacity activeOpacity={0.7} onPress={()=>handleFooterPress(val)}>
                                    <View style={{width:65,height:45,alignItems:'center' , backgroundColor:'1D194D'}}>
                                
                                        {val.svg }
                                        <Text style={{color:myColor , fontSize:11}}>{val.name}</Text>

                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    {/* <View style={{width:65,height:45,alignItems:'center' , backgroundColor:'1D194D'}}>
                                
                                <SvgFooterBarDiscover height={30} width={25}/>
                                <Text style={{color:'#fff' , fontSize:11}}>Discover</Text>
                    </View>

                    <View style={{width:65,height:45,alignItems:'center' , backgroundColor:'1D194D'}}>
                                
                                <SvgFooterBarMap height={30} width={25}/>
                                <Text style={{color:'#fff' , fontSize:11}}>Map</Text>
                    </View>
                   
                   <View style={{width:65,height:45,alignItems:'center' , backgroundColor:'1D194D'}}>
                                
                                <SvgFooterBarBell height={30} width={25}/>
                                <Text style={{color:'#fff' , fontSize:11}}>Notifications</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={}>
                    
                    <View style={{width:65,height:45,alignItems:'center' , backgroundColor:'1D194D'}}>
                                <SvgFooterBarProfile height={30} width={25}/>
                                <Text style={{color:'#fff' , fontSize:11}}>Profile</Text>
                                
                    </View> 
                    </TouchableOpacity> */}

                </View> 
 
                }

            </View>


            </View>
        // </View>
    )    
   
}

// const styles = StyleSheet.create(
//     {

//     }
// )

export default FooterBar;