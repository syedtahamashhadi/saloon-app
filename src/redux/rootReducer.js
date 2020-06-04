import { combineReducers } from 'redux'
import { loginReducer, 
        signUpReducer ,
        mfaReducer ,
        forgotPasswordReducer ,
        nearestSaloonReducer ,
        selectedSaloonBookingReducer,
        selectedStylistBookingReducer ,
        selectedServiceBookingReducer ,
        selectedDateTimeBookingReducer ,
        guestUserReducer ,
    } from './authenticate/reducers'


const rootReducer = combineReducers(
    {
        loginReducer: loginReducer,
        signUpReducer: signUpReducer,
        mfaReducer: mfaReducer,
        forgotPasswordReducer: forgotPasswordReducer,
        nearestSaloonReducer: nearestSaloonReducer,
        selectedSaloonBookingReducer: selectedSaloonBookingReducer,
        selectedStylistBookingReducer: selectedStylistBookingReducer,
        selectedServiceBookingReducer: selectedServiceBookingReducer,
        selectedDateTimeBookingReducer: selectedDateTimeBookingReducer,
        guestUserReducer: guestUserReducer,
    }
)

export { rootReducer };