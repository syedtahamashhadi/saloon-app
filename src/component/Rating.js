import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import AwsomeIcon from 'react-native-vector-icons/FontAwesome'


const Rating = (props) =>{
    
    let rating = props.rating ? props.rating : 0
    console.log('Rating is >>',props.rating)
    const getStars = (rating)=>{
        let starArr = ['star-o','star-o','star-o','star-o','star-o']

        switch(true){
            case rating == 0: return [...starArr]
            
            case rating>0 && rating<1: return ['star-half-o','star-o','star-o','star-o','star-o']
            
            case rating == 1: return ['star','star-o','star-o','star-o','star-o']
            
            case rating>1 && rating<2: return ['star','star-half-o','star-o','star-o','star-o']
            
            case rating == 2: return ['star','star','star-o','star-o','star-o']
            
            case rating>2 && rating<3: return ['star','star','star-half-o','star-o','star-o']
            
            case rating == 3: return ['star','star','star','star-o','star-o']
            
            case rating>3 && rating<4: return ['star','star','star','star-half-o','star-o']
            
            case rating == 4: return ['star','star','star','star','star-o']
           
            case rating>4 && rating<5: return ['star','star','star','star','star-half-o']
           
            case rating == 5: return ['star','star','star','star','star']
           
            default: return starArr            

        }
    }

    return(
        <View style={{flexDirection:'row' , justifyContent:'center',alignItems:'center' }}>
            <View style={styles.starsContainer}>
                {getStars(rating).map( (val,index) =>{
                    // console.log('Star Value is >>',val)
                    return(
                        <View key={index} style={{paddingHorizontal:3}}>
                            <AwsomeIcon name={val} size={16} color='#FFA800'/>
                        </View>
                    )
                })}
            </View>
            <Text style={{fontSize:16}}>{rating}</Text>
        </View>
    )   
}

const styles = StyleSheet.create(
    {
        starsContainer:{
            flexDirection:'row',
            marginRight:5
        }
    }
)

export default Rating
