import React from 'react'
import { View , Text , TouchableOpacity } from 'react-native'
import CircleList from 'react-native-circle-list'
import SvgScisorFilter from '../../MySvg/SvgScisorFilter'
import SvgTrimerFilter from '../../MySvg/SvgTrimerFilter'


const AdvanceFilter = (props) =>{
    
    const MyUpperCircle = (props) =>{

        return(
            <View>
                <View style={{width:55,height:55, borderRadius:55 ,backgroundColor:'#fff'
                ,justifyContent:'center',alignItems:'center'}}>
                    {/* <Text style={{color:'#fff'}}>{props.text}</Text> */}
                    <View style={{width:40,height:40}}>
                        <SvgScisorFilter/>
                    </View>
                </View>
                    <Text style={{textAlign:'center',top:5,fontFamily:'ExoBold',fontSize:12}}>
                        Hair Cut</Text>
            </View>
        )
    }

    const _keyExtractor = item => item.id

    const _renderUpperItem = ({ item }) => <MyUpperCircle text={item.name} value={item.value}/>

    const MyLowerCircle = (props) =>{

        return(
            <View>
                <View style={{width:45,height:45, borderRadius:45 ,backgroundColor:'#fff'
                ,justifyContent:'center',alignItems:'center'}}>
                    {/* <Text style={{color:'#fff'}}>{props.text}</Text> */}
                    <View style={{width:35,height:35}}>
                        <SvgTrimerFilter/>
                    </View>
                </View>
                    <Text style={{textAlign:'center',top:5 ,color:'#fff',fontSize:12}}>Trim</Text>
            </View>
        )
    }
    const _renderLowerItem = ({ item }) => <MyLowerCircle text={item.name} value={item.value}/>


    const data  = [{name:'Test1',id:1,value:'t1'},{name:'Test2',id:2,value:'t2'},
                        {name:'Test3',id:3,value:'t3'},
                        {name:'Test4',id:4,value:'t4'},{name:'Test5',id:5,value:'t5'},
                        {name:'Test6',id:6,value:'t6'},{name:'Test7',id:7,value:'t7'},
                        {name:'Test8',id:8,value:'t8'},
                        {name:'Test9',id:9,value:'t9'},{name:'Test10',id:10,value:'t10'},
                        {name:'Test11',id:11,value:'t11'},{name:'Test12',id:12,value:'t12'}
                    
                    ]

    return(
        // <View>
            <View style={{position:'absolute' , zIndex:9999 , width:'100%' , height:'55%' ,
                            backgroundColor:'#fff',bottom:-20,borderTopLeftRadius:20 ,
                            borderTopRightRadius:20}}>
                    
                    <View style={{alignItems:'center',top:10}}>
                  
                    <TouchableOpacity  onPress={()=>props.handleFilterPress()}
                    style={{flexDirection:'row', justifyContent:'center',marginTop:0}}>
                        <View style={{height:20,width:60}}>
                            <View style={{width:60,height:2,backgroundColor:'grey' , opacity:0.5}}></View>
                        </View>
                    </TouchableOpacity>

                    </View>

                    <Text style={{textAlign:'center' ,marginTop:5,fontSize:25,fontFamily:'AbrilFatFace',
                        }}>
                     Advance filters
                    </Text>
                   
                    <View style={{marginTop:10}}>
                    <View style={{backgroundColor:'#49D3CE' , height:'100%' , borderTopLeftRadius:150,
                            borderTopRightRadius:150}}>
                        <CircleList
                            data={data}
                            keyExtractor={_keyExtractor}
                            renderItem={_renderUpperItem}
                            // swipeSpeedMultiplier={20}
                            containerStyle={
                                {
                                    width:'100%',
                                    height:180,
                                    backgroundColor:'#49D3CE',
                                    // marginTop:80,
                                    borderTopStartRadius:150,
                                    borderTopRightRadius:150,
                                    paddingTop:5

                                }
                            }
                            flatness={0}
                            swipeSpeedMultiplier={200}
                            // radius={180}
                        />
                        <View style={{marginTop:-70,width:'100%',height:180,backgroundColor:'#1D194D',
                                borderTopStartRadius:150,borderTopEndRadius:150,
                                borderBottomLeftRadius:-20}}>
                            <Text style={{marginTop:10 , textAlign:'center',color:'#fff',fontFamily:'ExoBold'}}>
                                Treatments</Text>
                            
                                <CircleList
                            data={data}
                            keyExtractor={_keyExtractor}
                            renderItem={_renderLowerItem}
                            // swipeSpeedMultiplier={20}
                            containerStyle={
                                {
                                    width:'100%',
                                    height:'100%',
                                    backgroundColor:'#1D194D',
                                    // marginTop:80,
                                    // borderTopStartRadius:10,
                                    // borderTopRightRadius:150,
                                    borderTopLeftRadius:140,
                                    borderTopRightRadius:140,
                                    paddingTop:5

                                }
                            }
                            flatness={0}
                            swipeSpeedMultiplier={200}
                            // radius={180}
                        />

                        </View>
                        </View>

                    </View>

            </View>
        // </View>
    )
}

export default AdvanceFilter;