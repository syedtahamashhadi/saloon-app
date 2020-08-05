import React from 'react'
import {View, Text, StyleSheet , TouchableOpacity} from 'react-native'
import AdvanceCircleFilter from './AdvanceCircleFilter'
import AdvanceTreatmentFilter from './AdvanceTreatmentFIlter'
// import { SwipeableModal } from 'react-native-swipeable-modal';
import Modal from 'expo-react-native-modalbox';


const AdvanceFilters = (props) =>{
    return(
        <Modal
        isOpen={() => props.handleFilterPress()}
        onClosed={() => props.handleFilterPress()}
        swipeToClose={true}
        position={"bottom"}
        swipeArea={50}
        animationDuration={300}
        style={{
            position:'relative', 
                zIndex:9999, 
                width:'100%',
                height:350,
                backgroundColor:'#fff',
                bottom:0,
                borderTopLeftRadius:20 ,
                borderTopRightRadius:20}}
                >
                               
            <View style={{alignItems:'center',top:10}}>               
                <TouchableOpacity  
                style={{flexDirection:'row', justifyContent:'center',marginTop:0}}>
                    <View style={{height:20,width:60}}>
                        <View style={{width:60,height:2,backgroundColor:'grey',borderRadius: 10,  opacity:0.5}}></View>
                    </View>
                </TouchableOpacity>
            </View>
            
            <Text style={{textAlign:'center' ,marginTop:5,fontSize:25,fontFamily:'AbrilFatFace'}}>
                Advance filters
            </Text>
            <Text style={styles.treatment}>
                Treatments
            </Text>

            <View style={styles.container}>
                <AdvanceCircleFilter />
                <AdvanceTreatmentFilter />
            </View>
         </Modal>
    )
}

export default AdvanceFilters;

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        position: 'absolute',
        bottom: -130,
        left: -55
    },
    treatment:{
        color: 'white',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        left: 130,
        top: 150,
        zIndex: 9999,
        fontSize: 18,
        fontWeight: 'bold'
    }
})