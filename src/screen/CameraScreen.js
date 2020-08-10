import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const CameraScreen = (props) => {
    console.log('props in camera screen', props)
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [photo, setPhoto] = useState(null)

useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync()
      setHasPermission(status === 'granted');
    })();
  }, []);

const cameraHandle = async() => {
        if(cameraRef){
            cameraRef.takePictureAsync({ skipProcessing: true }).then((data) => {
                onPictureSaved(data);
              });
        }
      }

const onPictureSaved = (data) => {
    const asset = MediaLibrary.createAssetAsync(data.uri);
    setPhoto(asset)
    console.log(asset, 'asset')
}

if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{flex: 1}}>
        <View>
            {photo ? 
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon color="white" name="arrow-left" size={30}/>
                </TouchableOpacity>                
                <Text style={{fontSize: 15, marginLeft: 10, color: 'white'}}>Photo save in Gallery!</Text>
            </View>
            :
            <Text></Text>    
             }
        </View>
    <Camera style={{ flex: 1, justifyContent: 'flex-end'}} type={type} ref={ref => {
        setCameraRef(ref)}}>      
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <TouchableOpacity
            style={{
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, color: '#49D3CE' }}> 
                <Icon size={30} name="camera-retake" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={cameraHandle}>
            <View style={{ 
               borderWidth: 2,
               borderRadius:50,
               borderColor: '#49D3CE',
               height: 50,
               width:50,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'}}
            >
              <View style={{
                 borderWidth: 2,
                 borderRadius:50,
                 borderColor: 'white',
                 height: 40,
                 width:40,
                 backgroundColor: 'white'}} >
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
            //   flex: 0.1,
            //   alignSelf: 'flex-end'
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>  </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#49D3CE',
        flexDirection: 'row',
        alignItems: 'center',
    }
})


export default CameraScreen ;