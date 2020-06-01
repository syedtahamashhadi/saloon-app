import React from 'react';
import {View,Text} from 'react-native'
import UserNav from './src/navigation/UserNav'
import { Provider } from 'react-redux'
import { configureStore } from './src/redux/store';
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './src/appolo/client'


const store = configureStore()

export default function App() {

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

