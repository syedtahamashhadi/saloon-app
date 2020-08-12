import { SIGNIN , 
    SIGNUP , 
    MFA , 
    FORGOT_PASSWORD , 
    NEAREST_SALOON ,
    SELECTED_SALOON_BOOKING ,
    SELECTED_STYLIST_BOOKING ,
    SELECTED_SERVICE_BOOKING ,
    SELECTED_DATE_TIME_BOOKING ,
    GUEST_USER ,
    SET_TAB_HEADER,
    SET_USER_DETAIL,
    SET_FAV_SALOON,
    SET_IS_LOGIN ,
    SET_FILTER_VIEW ,
    USER_PAYMENT_CARDS ,
    SET_PROMO_CODE_COPIED ,
} from './constants'


/******************************* SignUp ****************************************/

// const signUpRequest = (signUpCredentials) =>{
//     return{
//         type: SIGNUP.REQUEST,
//         payLoad: signUpCredentials
//     }
// }

const signUpSuccess = (data) =>{
    return{
        type: SIGNUP.SUCCESS,
        payLoad: data,
    }
}

// const signUpFailure = (error) =>{
//     return{
//         type: SIGNUP.FAILURE,
//         error: error
//     }
// }

/******************************* SignIn ****************************************/

// const loginRequest = (loginCredentials) =>{
//     console.log('Login Resquest is Fired>>',loginCredentials)
//     return{
//         type: SIGNIN.REQUEST,
//         payLoad: loginCredentials
//     }
// }

const loginSuccess = (data) =>{
    console.log('Login Success is Fired>>' , data)

    return{
        type : SIGNIN.SUCCESS,
        payLoad: data,
        token: data.loginUser.jwtToken.token  
    }
}

// const loginFailure = (error) =>{
//     console.log('Login Error is Fired>>',error)

//     return{
//         type : SIGNIN.FAILURE , 
//         error : error
//     }
// }


/******************************* JWT_TOKEN ******************/


/******************************* MFA ****************************************/

// const mfaRequest = (mfaCredentials) =>{
//     return{
//         type: MFA.REQUEST,
//         payLoad: mfaCredentials
//     }
// }

const mfaSuccess = (data) =>{
    return{
        type: MFA.SUCCESS,
        payLoad: data , 
        token : data.verifyCode.jwtToken.token
    }
}

// const mfaFailure = (error) =>{
//     return{
//         type: MFA.FAILURE,
//         payLoad: error
//     }
// }

/******************************* Forgot Password ****************************************/

// const forgotPasswordRequest = (forgotPasswordCredentials) =>{
//     return{
//         type: FORGOT_PASSWORD.REQUEST,
//         payLoad: forgotPasswordCredentials
//     }
// }

const forgotPasswordSuccess = (data) =>{
    return{
        type: FORGOT_PASSWORD.SUCCESS,
        payLoad: data

    }
}

// const forgotPasswordFailure = (error) =>{
//     return{
//         type: FORGOT_PASSWORD.FAILURE,
//         error: error
//     }
// }

/********************************** Nearest Saloon ********************/

const nearestSaloonSuccess = (data) =>{
    return{
        type: NEAREST_SALOON.SUCCESS ,
        payLoad: data
    }
}

/****************************** Selected Saloon For Booking *************************************/

const selectedSaloonBookingSuccess = (data) =>{
    console.log('Booking is Fired >>', data)
    return{
        type: SELECTED_SALOON_BOOKING.SUCCESS ,
        payLoad: data
    }
}

/****************************** Selected Stylist For Booking *************************************/

const selectedStylistBookingSuccess = (data) =>{
    return{
        type: SELECTED_STYLIST_BOOKING.SUCCESS ,
        payLoad: data
    }
}

/****************************** Selected Service For Booking *************************************/

const selectedServiceBookingSuccess = (data) =>{
    return{
        type: SELECTED_SERVICE_BOOKING.SUCCESS ,
        payLoad: data
    }
}

/****************************** Selected DateTime For Booking *************************************/

const selectedDateTimeSuccess = (data) =>{
    return{
        type: SELECTED_DATE_TIME_BOOKING.SUCCESS,
        payLoad: data
    }
}

/****************************** Guest User *************************************/

const guestUserSuccess = (data) =>{
    return{
        type: GUEST_USER.SUCCESS ,
        payLoad: data
    }
}

/**************************** Tab Header ************************/
const setTabHeaderSuccess = (data) =>{
    return{
        type: SET_TAB_HEADER.SUCCESS,
        payLoad: data
    }
}

/************************** Set USer Detail *******************/
const setUserDetailSuccess = (data) =>{
    return{
        type: SET_USER_DETAIL.SUCCESS,
        payLoad: data
    }
}

/*************************** Set Fav Saloon *******************/

const setFavSaloonSuccess = (data) =>{
    return{
        type: SET_FAV_SALOON.SUCCESS ,
        payLoad: data
    }
}

const setIsLogin = (data) =>{
    console.log('Set is Login Action is Fired >>>>' , data)
    return{
        type: SET_IS_LOGIN.SUCCESS ,
        payLoad: data
    }
}

const setIsFilterView = (data) =>{
    console.log('Set is Filter View Action is Fired >>>>' , data)
    return{
        type: SET_FILTER_VIEW.SUCCESS ,
        payLoad: data
    }
}

/***************************** User Payment Cards ******************/

const userPaymentCardSuccess = (data) =>{
    return{
        type: USER_PAYMENT_CARDS.SUCCESS ,
        payLoad: data
    }
}

/************************** Set Promo Code Copied  *********************/

const setPromoCodeCopied = (data) =>{
    return{
        type: SET_PROMO_CODE_COPIED.SUCCESS,
        payLoad: data
    }
}

export {
    signUpSuccess,
    loginSuccess,
    mfaSuccess,
    forgotPasswordSuccess,
    nearestSaloonSuccess,
    selectedSaloonBookingSuccess,
    selectedStylistBookingSuccess,
    selectedServiceBookingSuccess,
    selectedDateTimeSuccess,
    guestUserSuccess ,
    setTabHeaderSuccess ,
    setUserDetailSuccess ,
    setFavSaloonSuccess ,
    setIsLogin ,
    setIsFilterView ,
    userPaymentCardSuccess ,
    setPromoCodeCopied ,
}
