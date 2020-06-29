import React , {useEffect} from 'react';
import {View,Text} from 'react-native'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import UserNav from './src/navigation/UserNav'
import { Provider } from 'react-redux'
import { configureStore } from './src/redux/store';
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './src/appolo/client'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'


const store = configureStore()

export default function App() {

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
        
        <UserNav /> 
        {/* <View>
          <Text>TEst</Text>
        </View> */}

      </ApolloProvider> 
    
    </Provider>
  
  );
}

