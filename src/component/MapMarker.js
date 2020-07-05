import React from 'react'
import { View , Text , Animated , UIManager  , LayoutAnimation } from 'react-native'
import SvgMapScisorMarker from '../../MySvg/SvgMapScisorMarker'
import SvgMapPointerMarker from '../../MySvg/SvgMapPointerMarker'
import { Easing } from 'react-native-reanimated'


if(Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental){
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

const MapMarker = (props) =>{


    const [viewBanner , setViewBanner] = React.useState(false)

    const dropAnim = React.useRef(new Animated.Value(0)).current

    const dropingBanner = () =>{
        Animated.timing(dropAnim,
                {
                    toValue:1,
                    duration:2000,
                    // easing:Easing.inOut(Easing.ease)
                    // useNativeDriver:true
                }
            ).start()
    } 

    React.useEffect(()=>{
        // setInterval(()=>{
        //     // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        //     // dropingBanner()
        //     setViewBanner(true)
        // },6000)
            dropingBanner()

        console.log('I am Mounted Map Marker >>>>')
    },[])

    const droppingDown = dropAnim.interpolate(
        {
            inputRange:[0,1],
            outputRange: [-1000,1]
        }
    )

    const _renderDroppingBanner = () =>{
        return(
        <Animated.View  style={{ top:droppingDown , position:'absolute',width:65,height:55,bottom:-4 }}>
            {/* <View style={{width:65,height:55,bottom:-4,backgroundColor:'#fff'}}> */}
                <View style={{position:'absolute',zIndex:999,marginLeft:15,marginTop:12}}>
                    <Text style={{color:'#fff',fontSize:10}}>15mins</Text>
                </View>
                <SvgMapPointerMarker />
            {/* </View> */}
        </Animated.View>
        )
    }

    return(
        <View style={{height:80,width:70,alignItems:'center',justifyContent:'flex-end' , position:'relative'}}>
            {/* {viewBanner && <View style={{width:65,height:55,bottom:-12}}>
                <View style={{position:'absolute',zIndex:999,marginLeft:15,marginTop:12}}>
                    <Text style={{color:'#fff',fontSize:10}}>15mins</Text>
                </View>
                <SvgMapPointerMarker />
            </View> } */}
            <_renderDroppingBanner/>
            <View style={{width:50,height:35,top:-2}}>
                <SvgMapScisorMarker />
            </View>
        </View>
    )
}

export default MapMarker;