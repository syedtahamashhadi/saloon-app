import { combineReducers } from 'redux'
import { loginReducer, signUpReducer , mfaReducer , forgotPasswordReducer } from './authenticate/reducers'


const rootReducer = combineReducers(
    {
        loginReducer: loginReducer,
        signUpReducer: signUpReducer,
        mfaReducer: mfaReducer,
        forgotPasswordReducer: forgotPasswordReducer,
    }
)

export { rootReducer };