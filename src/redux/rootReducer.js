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
        setHeaderReducer
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
        setHeaderReducer: setHeaderReducer

    }
)

export { rootReducer };