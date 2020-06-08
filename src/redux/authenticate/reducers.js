import { SIGNUP, 
         SIGNIN, 
         MFA ,
         FORGOT_PASSWORD ,
         NEAREST_SALOON ,
         SELECTED_SALOON_BOOKING ,
         SELECTED_STYLIST_BOOKING ,
         SELECTED_SERVICE_BOOKING ,
         SELECTED_DATE_TIME_BOOKING ,
         GUEST_USER ,
        } from './constants';


/******************************** SignUp Reducer ***********************************/

const signUpInitialState={
    // credentials: [],
    // isRequestSent: false,
    // error: null,
    isSignUp:false,
    data: null
} 

const signUpReducer = (state = signUpInitialState , action) =>{
    switch (action.type) {
        // case SIGNUP.REQUEST:
        //     return{
        //         ...state,
        //         credentials: [...action.payLoad],
        //         isRequestSent: true,
        //         error: null,
        //         isSignUp:false
        //     }
        case SIGNUP.SUCCESS :
            return{
                ...state,
                isSignUp: true,
                data: action.payLoad
            }
        // case SIGNUP.FAILURE :
        //     return{
        //         ...state,
        //         credentials: state.credentials,
        //         isRequestSent: false,
        //         error: action.error,
        //         isSignUp:false
        //     }
        default: return state;
    }
}

/******************************** Login Reducer ***********************************/

const loginInitialState={
    isLogin: false,
    data: null,
    token: null
}

const loginReducer = (state= loginInitialState , action)=>{
    switch (action.type) {
      
        case SIGNIN.SUCCESS:
            return{
                ...state,
                isLogin: true,
                data: action.payLoad ,
                token: action.token

            }
        default: return state;
    }
}

/******************************** MFA Reducer ***********************************/

const mfaInitialState={
    isAuthenticate: false,
    data: null,
    token: null
}


const mfaReducer = (state=mfaInitialState , action) =>{
    switch (action.type) {
       
        case MFA.SUCCESS:
            console.log('MFA SUCCESSS >>>>>')
            return{
                ...state,
                isAuthenticate: true,
                data: action.payLoad,
                token: action.token
            }
        
        default: return state;
    }
}

/********************************* FORGOT PASSWORD *************************************/

const forgotPasswordInitialState = {
    isRequestSent: false,
    data: null
}

const forgotPasswordReducer = (state= forgotPasswordInitialState , action) =>{
    switch (action.type) {
      
        case FORGOT_PASSWORD.SUCCESS:
            return{
                ...state,
                isForgotPasswordRequestSuccess : true,
                data: action.payLoad
            }
       
        default: return state
    }
}

/************************** Nearest Saloon **************************/
const nearestSaloonInitialState = {
    data: null
}

const nearestSaloonReducer = (state = nearestSaloonInitialState , action)=>{
    switch (action.type) {
        case NEAREST_SALOON.SUCCESS:
           return{
            ...state,
            data: action.payLoad
           } 
        default: return state ;
    }
}

/*********************************** Selected Saloon For Booking ********************/

const selectedSaloonBookingInitialState ={
    data: null
}

const selectedSaloonBookingReducer = (state = selectedSaloonBookingInitialState , action) =>{
    switch (action.type) {
        case SELECTED_SALOON_BOOKING.SUCCESS:
            console.log('Reducer is Fired >>' , action.payLoad)
            return{
                ...state,
                data: action.payLoad
            }
    
        default: return state ;
    }
}

/****************************** Selected Stylist For Booking *************************************/

const selectedStylistBookingInitialState = {
    data: null
}

const selectedStylistBookingReducer = (state= selectedStylistBookingInitialState , action) =>{
    switch (action.type) {
        case SELECTED_STYLIST_BOOKING.SUCCESS:
            return{
                ...state,
                data: action.payLoad
            }
    
        default: return state ;
    }
}

/****************************** Selected Service For Booking *************************************/

const selectedServiceBookingInitialState = {
    data: null
}

const selectedServiceBookingReducer = (state= selectedStylistBookingInitialState , action) =>{
    switch (action.type) {
        case SELECTED_SERVICE_BOOKING.SUCCESS:
            return{
                ...state,
                data: action.payLoad
            }
    
        default: return state ;
    }
}

/****************************** Selected Service For Booking *************************************/

const selectedDateTimeBookingInitialState = {
    data: null
}

const selectedDateTimeBookingReducer = (state= selectedDateTimeBookingInitialState , action) =>{
    switch (action.type) {
        case SELECTED_DATE_TIME_BOOKING.SUCCESS:
            return{
                ...state,
                data: action.payLoad
            }
    
        default: return state ;
    }
}

/****************************** Guest User *************************************/

const guestUserInitialState = {
    // data: null
    isGuestUser: false
}

const guestUserReducer = (state= guestUserInitialState , action) =>{
    switch (action.type) {
        case GUEST_USER.SUCCESS:
            return{
                ...state,
                data: action.payLoad
            }
    
        default: return state ;
    }
}

export {
    signUpReducer,
    loginReducer,
    mfaReducer,
    forgotPasswordReducer,
    nearestSaloonReducer,
    selectedSaloonBookingReducer,
    selectedStylistBookingReducer,
    selectedServiceBookingReducer ,
    selectedDateTimeBookingReducer ,
    guestUserReducer ,
}