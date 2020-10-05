import React from 'react';
import {View,Text} from 'react-native'
import { useFonts } from '@use-expo/font'
// import {useFonts} from 'expo-font'
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import UserNav from './src/navigation/UserNav'
import { Provider } from 'react-redux'
import { configureStore } from './src/redux/store';
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './src/appolo/client'
// import AsyncStorage from '@react-native-community/async-storage'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import { loadAsync } from 'expo-font';

// const Abril = require('./assets/fonts/AbrilFatface-Regular.ttf')
// const ExoRegular = require('./assets/fonts/Exo-Regular.ttf')
// const ExoBold = require('./assets/fonts/Exo-Bold.ttf')
// import {} from './assets/fonts/'
// import { isAirplaneModeSync } from 'react-native-device-info';


const store = configureStore()
const App = (props) => {
  // const [origin, setOrigin] = React.useState('')
  const [notificationData, setNotificationData] = React.useState(null)
  const [fontloaded,setfontloaded]=React.useState(false);

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

  // const fontLoaded = Font.loadAsync(
  //   {
  //         AbrilFatFace : Abril,
  //         ExoRegular : ExoRegular,
  //         ExoBold : ExoBold,
  //         DosisExtraBold : require('./assets/fonts/Dosis-ExtraBold.ttf')
  //   }
  // )
  
  // console.log('Fonts >>' , fontLoaded.isLoaded)

  // const fetchFonts = () =>{
  //   return Font.loadAsync(
  //     {
  //           AbrilFatFace : require('./assets/fonts/AbrilFatface-Regular.ttf'),
  //           ExoBold : require('./assets/fonts/Exo-Bold.ttf'),
  //           DosisExtraBold : require('./assets/fonts/Dosis-ExtraBold.ttf'),
  //           ExoRegular : require('./assets/fonts/Exo-Regular.ttf'),
  //     }
  //   )
  // }

  if(!fontLoaded){
    return <AppLoading />
  }else {
    console.log('Font is Loaded >>>')

    return (

      <Provider store={store}>
  
        <ApolloProvider client={client}> 
          
          {/* <UserNav notificationData={notificationData} />  */}
          <UserNav notificationData={notificationData} /> 
  
  
        </ApolloProvider> 
      
      </Provider>
    
    );
  }

  
  
}



export default App;