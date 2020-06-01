import { combineReducers } from 'redux'
import { loginReducer, 
        signUpReducer ,
        mfaReducer ,
        forgotPasswordReducer ,
        nearestSaloonReducer } from './authenticate/reducers'


const rootReducer = combineReducers(
    {
        loginReducer: loginReducer,
        signUpReducer: signUpReducer,
        mfaReducer: mfaReducer,
        forgotPasswordReducer: forgotPasswordReducer,
        nearestSaloonReducer: nearestSaloonReducer,
    }
)

export { rootReducer };