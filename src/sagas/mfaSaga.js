import { call , take , takeEvery , put , select} from 'redux-saga/effects'
import { MFA } from '../redux/authenticate/constants'
import { mfaSuccess , mfaFailure } from '../redux/authenticate/actions'


/******************* API Call *****************/

const postMFA = async(credential) =>{
    console.log('MFA credentials are >>' , credential)
}

/********************** Watcher Saga ***********/

function* watchMfaRequest(){
    yield takeEvery(MFA.REQUEST , handleMfaRequest)
}

/********************* Worker Saga **************/
const getMfaCredentials = state => state.mfaReducer.credentials

function* handleMfaRequest(){
    try {
        const credentials = yield select(getMfaCredentials)
        yield call(postMFA , credentials)
        !credentials ? yield put(mfaSuccess('Test Data')) : null
    } catch (error) {
        yield put(mfaFailure(error.toString()))
    }
}

export default watchMfaRequest;