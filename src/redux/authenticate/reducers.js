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
         SET_TAB_HEADER ,
         SET_USER_DETAIL,
         SET_FAV_SALOON ,
         SET_IS_LOGIN ,
         SET_FILTER_VIEW ,
         USER_PAYMENT_CARDS ,
         SET_PROMO_CODE_COPIED ,
         USER_BOOKINGS_LIST ,
         SET_CANCEL_APPOINTMENT_FLAG ,
         TOS_PP,
         FAQ
        } from './constants';
import { Switch } from 'react-native-gesture-handler';


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
                data: action.payLoad,
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
            console.log('Login Success Reducer>>>>' , action.payLoad)

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
    isGuestUser: false ,
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

/******************************** Set Tab Header  **************************/

const headerInitialState = {
    data : null
}

const setHeaderReducer = (state = headerInitialState , action) =>{
    switch (action.type) {
        case SET_TAB_HEADER.SUCCESS:
            return{
                ...state ,
                data: action.payLoad
            }
    
        default: return state ;
    }
}

/*************************** Set User Detail **********************/

const userDetailInitialState = {
    data: null
}

const setuserDetailReducer = (state = userDetailInitialState , action) =>{
    switch (action.type) {
        case SET_USER_DETAIL.SUCCESS:
            return{
                ...state ,
                data: action.payLoad
            }
    
        default: return state ;
    }
}

/********************************* Set Fav Saloon  ***************************/

const favSaloonInitialState = {
    data : null
}

const setFavSaloonReducer = (state = favSaloonInitialState , action) =>{
    switch(action.type){
        case SET_FAV_SALOON.SUCCESS:
            return{
                ...state,
                data: action.payLoad
            }
        default : return state
    }
}

/******************************* Set Is Login ****************************/

const isLoginInitialState = {
    data : null
}

const setIsLoginReducer = (state = isLoginInitialState , action) =>{
    switch(action.type){
        case SET_IS_LOGIN.SUCCESS:
            return{
                ...state,
                data: action.payLoad
            }
        default : return state
    }
}

/******************************* Set Filter View ****************************/

const isFilterViewInitialState = {
    data : false
}

const setIsFilterViewReducer = (state = isFilterViewInitialState, action) =>{
    switch(action.type){
        case SET_FILTER_VIEW.SUCCESS:
            return{
                ...state,
                data: action.payLoad
            }
        default : return state
    }
}

/***************************** User Payment Cards ******************/

const userPaymentCardInitialState ={
    data : null
}

const userPaymentCardReducer =(state = userPaymentCardInitialState , action) =>{
    switch (action.type) {
        case USER_PAYMENT_CARDS.SUCCESS:
            return{
                ...state,
                data: action.payLoad
            }
            
        default: return state;
    }
}


/************************** Set Promo Code Copied  *********************/

const setPromoCodeCopiedInitialState ={
    data : null
}


const setPromoCodeCopiedReducer = (state= setPromoCodeCopiedInitialState , action) =>{
    switch (action.type) {
        case SET_PROMO_CODE_COPIED.SUCCESS:
            return{
                ...state,
                data: action.payLoad
            }
        default: return state;
    }
}

/************************** User Booking List  *********************/

const userBookingSuccessInitialState ={
    data : null
}


const userBookingSuccessReducer = (state= userBookingSuccessInitialState , action) =>{
    switch (action.type) {
        case USER_BOOKINGS_LIST.SUCCESS:
            console.log('Booking List Reducer is Fired >>>' , action.payLoad)
            return{
                ...state,
                data: action.payLoad
            }
        default: return state;
    }
}

/************************** Set Cancel Appointment Flag  *********************/

const setCancelAppointmentFlagInitialState ={
    isAppointmentCancel : false
}


const setCancelAppointmentFlagReducer = (state= setCancelAppointmentFlagInitialState , action) =>{
    switch (action.type) {
        case SET_CANCEL_APPOINTMENT_FLAG.SUCCESS:
            return{
                ...state,
                isAppointmentCancel: action.payLoad
            }
        default: return state;
    }
}

/************************** Tos & Pp Success  *********************/

const tosPpInitialState ={
    data : null
}


const tosPpSuccessReducer = (state= tosPpInitialState , action) =>{
    switch (action.type) {
        case TOS_PP.SUCCESS:
            return{
                ...state,
                data: action.payLoad
            }
        default: return state;
    }
}



/***************************** Faq ****************************/

const faqInitialState = {
    data: null
}

const faqSuccessReducer = (state = faqInitialState , action) =>{
    switch (action.type) {
        case FAQ.SUCCEES:
            return{
                ...state ,
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
    setHeaderReducer ,
    setuserDetailReducer ,
    setFavSaloonReducer ,
    setIsLoginReducer ,
    setIsFilterViewReducer ,
    userPaymentCardReducer ,
    setPromoCodeCopiedReducer ,
    userBookingSuccessReducer ,
    setCancelAppointmentFlagReducer ,
    tosPpSuccessReducer , 
    faqSuccessReducer ,
}
