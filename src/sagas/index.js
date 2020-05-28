import { all } from 'redux-saga/effects'
import loginSaga from './loginSaga'
import signUpSaga from './signUpSaga'
import mfaSaga from './mfaSaga'
import forgotPasswordSaga from './forgotPasswordSaga'

function* rootSaga(){
    yield all(
        [
            loginSaga() , 
            signUpSaga() ,
            mfaSaga(),
            forgotPasswordSaga()
        ]
    )
}

export default rootSaga 