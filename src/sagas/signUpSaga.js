import {take , takeEvery , put , call , select } from 'redux-saga/effects'
import { SIGNUP } from '../redux/authenticate/constants'
import { signUpSuccess , signUpFailure } from '../redux/authenticate/actions'


/************************ API Call *************************/

const postSignUp = async(signUpCredentials) =>{
    console.log('Post Login......' , signUpCredentials)
}


/********************** Login Watcher ***************/

function* watchSignUpRequest(){
    yield takeEvery(SIGNUP.REQUEST , handleSignUpRequest)
}

const getSignUpCredentials = state => state.signUpReducer.credentials   //geting login credentials from state

/*********************** Login Worker *************************/
function* handleSignUpRequest(){
    try {
        const credentials = yield select(getSignUpCredentials)
        yield call(postSignUp,credentials)
        yield put(signUpSuccess())
    } catch (error) {
        yield put(signUpFailure(error.toString()))
    }
}

export default watchSignUpRequest ;