import React from 'react'
import {View, Text, StyleSheet , TouchableOpacity} from 'react-native'
import AdvanceCircleFilter from './AdvanceCircleFilter'
import AdvanceTreatmentFilter from './AdvanceTreatmentFIlter'
import { SwipeableModal } from 'react-native-swipeable-modal';


const AdvanceFilters = (props) =>{
    return(
        <View 
        style={{flex:1}}
        // style={{position:'absolute' , zIndex:9999 , width:'100%' , height:340 ,
        //                     backgroundColor:'#fff',bottom:-20,borderTopLeftRadius:20 ,
        //                     borderTopRightRadius:20}}
                            >
             <SwipeableModal
        closeModal={()=>props.handleFilterPress()}
        panClose={0.1}
        style={{position:'relative' , 
                zIndex:9999 , height:320 ,
                backgroundColor:'#fff',
                bottom:0,
                borderTopLeftRadius:20 ,
                borderTopRightRadius:20}}
                >
            <View style={{alignItems:'center',top:10}}>
                
                <TouchableOpacity  
                style={{flexDirection:'row', justifyContent:'center',marginTop:0}}>
                    <View style={{height:20,width:60}}>
                        <View style={{width:60,height:2,backgroundColor:'grey' , opacity:0.5}}></View>
                    </View>
                </TouchableOpacity>

            </View>
            
            <Text style={{textAlign:'center' ,marginTop:5,fontSize:25,fontFamily:'AbrilFatFace'}}>
                Advance filters
            </Text>

            <View style={styles.container}>
                <AdvanceCircleFilter />
                <AdvanceTreatmentFilter />
            </View>
            </SwipeableModal>

        </View>
    )
}

export default AdvanceFilters;

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        position: 'absolute',
        // bottom: -130,
        left: -55
    }
})