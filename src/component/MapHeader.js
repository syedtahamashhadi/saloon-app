import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity , TextInput , Image } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Helpers from '../Helpers'
import AsyncStorage from '@react-native-community/async-storage'
import { setIsLogin, setIsFilterView } from '../redux/authenticate/actions'

// import  { setIsLogin }  from '../redux/authenticate/actions/'
// import Helpers from '../Helpers'


const MapHeader = (props) =>{

    const [value, onChangeText] = React.useState('')  ;

    const exit = async() =>{
        // alert('check')
        try {
            await AsyncStorage.removeItem('@KOMB_JWT_TOKEN' , ()=>{
                // props.setIsLogin(false)             
                // alert('Check')   
                props.nav.navigation.navigate('SignIn')
            })
        } catch (error) {
            console.log('Error >>>' , error)
        }
    
    }
   
    const handleImagePress = ()=>{
        // if()
        console.log('Image is Pressed')
        props.imgUri ? props.nav.navigation.navigate('EditProfile') : Helpers.removeKey('@KOMB_JWT_TOKEN',()=>{
            props.setIsLogin(false)                
            props.nav.navigation.navigate('SignIn') 
        })
    }

    const handleFilterPress = () =>{
        // console.log('Filter is Pressedd >>>>>>')
        props.filterView == false ? props.setIsFilterView(true) : props.setIsFilterView(false)   
    }

    return(
        
        <View style={styles.overLay}>
            <View style={{marginHorizontal:20}}>

                <View style={{flexDirection:"row" , justifyContent:'space-between'}}>
                
                    <Text style={{fontSize:20 ,fontFamily:'AbrilFatFace'}}>
                        {Helpers.getGreet(props.name)}
                    </Text>
                    <TouchableOpacity onPress={()=>{ handleImagePress() } }>
                        <Image style={{borderRadius:40 , height:40 , width:40,borderWidth:3,borderColor:'#fff'}}
                            source={{uri : props.imgUri}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row" , justifyContent:'space-between' , top:20}}>
                    
                    <View style={styles.searchContainer}>
                        <Icon name="map-marker" size={25} style= {styles.searchIcon} />
                        
                        <TextInput
                            onChangeText={text => onChangeText(text)}
                            placeholder="Whats your style for today"
                            value={value}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <TouchableOpacity onPress={()=>props.handleFilterPress()}
                        hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}
                    >
                        <View style={{borderRadius:40 , backgroundColor:'white' , width:40 , height:40}}>
                            <AntIcon name='filter' size={25} style={{marginHorizontal:7 , marginVertical:6}}/>
                        </View>
                    </TouchableOpacity>
                   
                </View>
            </View>
        
        </View>

    )
}

const styles = StyleSheet.create(
    {
        overLay:{
            position: 'absolute',
            zIndex: 9999,
            width: '100%',
            top:40,
        },
        searchContainer:{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor:'white',
            borderRadius:10,
            padding:5,
            width:260
        },
        searchIcon:{
            color:'#505050' , 
            paddingRight:10 , 
            paddingLeft:10
        },
    }
)

const mapDispatchToProps = (dispatch) =>{
    return{
        setIsLogin : (data) => dispatch(setIsLogin(data)) ,
        setIsFilterView : (data) => dispatch(setIsFilterView(data))
    }
}

const mapStateToProps = (state) =>{
    return{
        filterView : state.setIsFilterViewReducer.data
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MapHeader);