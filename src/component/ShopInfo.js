import React from 'react'
import {View , Text , StyleSheet , ScrollView ,FlatList ,Button} from 'react-native'
import Heading from './Heading'
import { Avatar } from 'react-native-elements'


const ShopInfo = () =>{
    const [crew,setCrew] = React.useState(ourCrew)
    let ourCrew = [{name:'Sherry',src:'../../assets/cat.jpg'},{name:'Matt' ,src:'../../assets/cat.jpg'},
                {name:'Kelly M.',src:'../../assets/cat.jpg'},{name:'Linda',src:'../../assets/cat.jpg'},
                {name:'Dillan',src:'../../assets/cat.jpg'},{name:'Kelly T.',src:'../../assets/cat.jpg'},
                {name:'Dillan',src:'../../assets/cat.jpg'},{name:'Kelly T.',src:'../../assets/cat.jpg'},
                {name:'Dillan',src:'../../assets/cat.jpg'},{name:'Kelly T.',src:'../../assets/cat.jpg'},
                {name:'Dillan',src:'../../assets/cat.jpg'},{name:'Kelly T.',src:'../../assets/cat.jpg'},
                {name:'Dillan',src:'../../assets/cat.jpg'},{name:'Kelly T.',src:'../../assets/cat.jpg'}


            ]
    // setCrew(ourCrew)
    return(
        <View style={{marginHorizontal:20,top:20}}>
            
            <FlatList>
                <Text style={styles.heading}>Our Crew</Text>
                <View style={styles.avatarContainer}>
                    {
                        ourCrew.map( (val,index)=>{
                                console.log('Avatar Images are >>', typeof val.src)
                                return(
                                    // <View  key={index}>
                                        <View style={styles.avatar} key={index}>
                                            <Avatar rounded source={require('../../assets/cat.jpg')} size={50} />
                                        </View>
                                    // </View>
                                )
                            }
                        )
                    }
                </View>
                    
                
            </FlatList>

                
            {/* <View style={{top:20 , borderRadius:40 , width:200 , height:80}}>
                <Button 
                    title='Book Now'
                    onPress={()=>console.log('Button is Pressed')}
                    color='#49D3CE'
                />
            </View> */}
            
        </View>
    )
}

export default ShopInfo;


const styles = StyleSheet.create(
    {
        avatarContainer:{
            flexDirection:'row',
            // justifyContent:'space-between',
            flexWrap:'wrap',
            // flexGrow:20
        },
        avatar:{
            alignItems:'center',
            justifyContent:'center' ,
            height:53,
            width:53,
            borderRadius:40,
            backgroundColor:'red',
            marginRight:27,
            marginVertical:20,
            // marginEnd:0,
        },
        heading:{
            color:'#1D194D' , 
            // fontFamily:'Abril Fatface' , 
            fontSize:27,
        }
    }
)