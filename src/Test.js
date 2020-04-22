import React, {Component} from 'react';
import { View,StyleSheet,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Test extends Component {
    render() {
     return (
       <View style={styles.container}>
         <View style={{backgroundColor: 'white',alignItems: 'center',flexDirection: 'row',width:'90%'}}>
             <Icon name="map-marker" size={25} style= {{color:'#505050'}} />
               <TextInput
                 style={{backgroundColor: 'white'}}
                />
         </View>
       </View>
       );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8ee3ab',
  },
});