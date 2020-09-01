import React from 'react';
import {View,Text} from 'react-native'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import UserNav from './src/navigation/UserNav'
import { Provider } from 'react-redux'
import { configureStore } from './src/redux/store';
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './src/appolo/client'
// import AsyncStorage from '@react-native-community/async-storage'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
// import { isAirplaneModeSync } from 'react-native-device-info';


const store = configureStore()
const App = (props) => {
  // const [origin, setOrigin] = React.useState('')
  const [notificationData, setNotificationData] = React.useState(null)

console.log('App js props >>>>', props)
  // const notificationListener = useRef();
  const responseListener = React.useRef();
  // console.log("NOtificaiton origin" ,origin)
  console.log("NOtificaiton notificationData" ,notificationData)

  React.useEffect(()=>{
    console.log("app.js Notification add lister", Notifications.addListener)
    Notifications.addListener(handlePushNotification) 
  },[] )

  const handlePushNotification = (notification) => {
    console.log("orign >>>>> ",notification)
  // setOrigin(origin)
  // setNotificationData(null)
  setNotificationData(notification)
  };

  const [fontLoaded] = useFonts(
    {
      AbrilFatFace : require('./assets/fonts/AbrilFatface-Regular.ttf'),
      ExoRegular : require('./assets/fonts/Exo-Regular.ttf'),
      ExoBold : require('./assets/fonts/Exo-Bold.ttf'),
      DosisExtraBold : require('./assets/fonts/Dosis-ExtraBold.ttf')
    }
  )
  
  if(!fontLoaded){
    return <AppLoading />
  }

  
  return (

    <Provider store={store}>

      <ApolloProvider client={client}> 
        
        <UserNav notificationData={notificationData} /> 

      </ApolloProvider> 
    
    </Provider>
  
  );
}



export default App;