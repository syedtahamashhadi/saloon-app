import {take , takeEvery , put , call , select } from 'redux-saga/effects'
import { SIGNIN } from '../redux/authenticate/constants'
import { loginSuccess , loginFailure } from '../redux/authenticate/actions'


/************************ API Call *************************/

const postAPI = async(loginCredentials) =>{
    /** Here the api call logic goes */
    console.log('Post Login......' , loginCredentials)
    const reqBody = { query: `mutation abc {
        loginUser(email: "hassaan@yopmail.com", 
      password: "123456789", deviceId: "1233")
        {
         _id
          email
          jwtToken {
            token
            createdAt
          }
          password
        }  
      }`}
    
      const apiCall = await fetch(`http://15.165.108.170:8081/user/graphql`,{
          method: 'POST' ,
          body: JSON.stringify(reqBody)
      })

      const response = apiCall

      console.log('MY Response is >>' , response.status)
}


/********************** Login Watcher ***************/

function* watchLoginRequest(){
    yield takeEvery(SIGNIN.REQUEST , handleLoginRequest)
}


/*********************** Login Worker *************************/

const getLoginCredentials = state => state.loginReducer.credentials   //geting login credentials from state

function* handleLoginRequest(){
    try {
        const credentials = yield select(getLoginCredentials)
        yield call(postAPI,credentials)
        yield put(loginSuccess())
    } catch (error) {
        yield put(loginFailure(error.toString()))
    }
}

export default watchLoginRequest