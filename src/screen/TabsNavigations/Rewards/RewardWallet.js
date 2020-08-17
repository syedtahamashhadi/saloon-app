import React from 'react'
import {View , Text , TouchableOpacity , StyleSheet , ScrollView} from 'react-native'
import RewardSlideBarCard from '../../../component/RewardSlideBarCard'
import RewardHairCutCard from '../../../component/RewardHairCutCard'





const RewardWallet = (props) =>{

    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={{marginTop:40 }}>
              
                {/* <RewardHairCutCard /> */}
                    <RewardSlideBarCard />

            </View>

            <View style={{marginTop:20 , marginBottom:20}}>
                <RewardHairCutCard />
            </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        }
    }
)

export default RewardWallet;