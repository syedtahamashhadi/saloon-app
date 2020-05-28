import {call , select , put , take , takeEvery } from 'redux-saga/effects'
import { FORGOT_PASSWORD } from '../redux/authenticate/constants'
import { forgotPasswordSuccess , forgotPasswordFailure } from '../redux/authenticate/actions'


/********************* API Call ************/

const postAPI = (credentials)=>{
    console.log('Credentials are >>' , credentials)
} 

/******************** Watcher Saga **************/

function* watchForgotPasswordRequest(){
    yield takeEvery(FORGOT_PASSWORD.REQUEST , handleForgotPasswordRequest)
}

/******************* Worker Saga ****************/
const getForgotPasswordCredentials = state => state.forgotPasswordReducer.credentials

function* handleForgotPasswordRequest(){
    try {
        const credentials = yield select(getForgotPasswordCredentials)
        yield call(postAPI , credentials)
        yield put(forgotPasswordSuccess())
    } catch (error) {
        yield put(forgotPasswordFailure(error.toString()))
    }
}

export default watchForgotPasswordRequest;