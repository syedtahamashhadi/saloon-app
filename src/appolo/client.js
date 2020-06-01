import ApoloClient from 'apollo-boost'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { configureStore } from '../redux/store'
import { InMemoryCache } from 'apollo-cache-inmemory';

// let test = (state) => state.loginReducer

// console.log('LoginReducer State is >>' , test)


// console.log('My State is ', myState)
// let myState = store.getState()

let myFunc = (state)=>{console.log('Testing >>>>>>>>>>>>>>>>',state.loginReducer.data.loginUser.jwtToken.token)}
const store = configureStore()
let state = store.getState()

console.log('My State >>>>>>>' , state)

// const header = (operation) => {
//     // const store = configureStore()
//     // let state = store.getState()
//     // myFunc(state)
//     const token = state.loginReducer.loginUser.data.jwtToken.token ? 
//                     state.loginReducer.loginUser.data.jwtToken.token : null;
//     operation.setContext({
//       headers: {
//         authorization: token !== null ? token : ''
//         }
//     })
// }

// let call = state.loginReducer.token ? state.loginReducer.token : ''

// const client = new ApoloClient(
//     {
//         uri: `http://15.165.108.170:8081/user/graphql`,
//         request: (operation) =>{
//             console.log('Each Operation' , operation)
//             operation.getContext()
//         }
//     }
// )

const httpLink = createHttpLink({
    uri: 'http://15.165.108.170:8081/user/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const store = configureStore()
    // let state = store.getState()
    // const token = (state)=> state.loginReducer.token;
    // return the headers to the context so httpLink can read them
    console.log('Header Are >>',headers)
    return {
      headers: {
        ...headers,
        // authorization: token ? token : "",
      }
    }
  });

  const client = new ApolloClient(
    {
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    }
)

export { client }