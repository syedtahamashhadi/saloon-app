import ApoloClient from 'apollo-boost'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { configureStore } from '../redux/store'
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { connect } from 'react-redux'

// let test = (state) => state.loginReducer

// console.log('LoginReducer State is >>' , test)


// console.log('My State is ', myState)
// let myState = store.getState()

let myFunc = (state)=>{console.log('Testing >>>>>>>>>>>>>>>>',state.loginReducer.data.loginUser.jwtToken.token)}
const store = configureStore()
let state = store.getState()

console.log('My State >>>>>>>' , state)


const defaultOptions={
  watchQuery: {
    fetchPolicy: 'cache-and-network',         //https://medium.com/@galen.corey/understanding-apollo-fetch-policies-705b5ad71980
  },                                          //https://stackoverflow.com/questions/46246029/how-to-set-fetchpolicy-globally-on-apollo-client-queries?rq=1
  query: {
    fetchPolicy: 'network-only',
  }
}
const httpLink = createHttpLink({
    uri: 'http://15.165.108.170:8081/user/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
   
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
        cache: new InMemoryCache(),
        defaultOptions:defaultOptions
    }
)


// const mapStateToProps = (state) =>{
//   return{
//     mfa : state.mfaReducer
//   }
// }


export { client }