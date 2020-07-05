import React from 'react'
import { View , Text } from 'react-native'
import MapMarker from '../component/MapMarker'


const Testing = () =>{
    return(
        <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
            <View >
                <MapMarker />
            </View>
        </View>
    )
}

export default Testing;

