import React from 'react'
import { View , Text , TouchableOpacity , UIManager , StyleSheet , LayoutAnimation , Platform } from 'react-native'
import SvgFooterBarBack from '../../MySvg/SvgFooterBarBack'
import SvgFooterBarBell from '../../MySvg/SvgFooterBarBell'


if(Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental){
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

const FooterBar = () =>{

    // const [fullView,setFullView] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false);


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
                    <View style={{width:65,height:45,alignItems:'center' , backgroundColor:'1D194D'}}>
                                
                                <SvgFooterBarBell height={30} width={25}/>
                                <Text style={{color:'#fff' , fontSize:11}}>Discover</Text>
                    </View>

                    <View style={{width:65,height:45,alignItems:'center' , backgroundColor:'1D194D'}}>
                                
                                <SvgFooterBarBell height={30} width={25}/>
                                <Text style={{color:'#fff' , fontSize:11}}>Map</Text>
                    </View>
                   
                   <View style={{width:65,height:45,alignItems:'center' , backgroundColor:'1D194D'}}>
                                
                                <SvgFooterBarBell height={30} width={25}/>
                                <Text style={{color:'#fff' , fontSize:11}}>Notifications</Text>
                </View>
                    <View style={{width:65,height:45,alignItems:'center' , backgroundColor:'1D194D'}}>
                                
                                <SvgFooterBarBell height={30} width={25}/>
                                <Text style={{color:'#fff' , fontSize:11}}>Profile</Text>
                    </View> 
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