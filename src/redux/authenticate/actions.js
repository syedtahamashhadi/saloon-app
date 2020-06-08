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
        payLoad: data
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
    console.log('Login Success is Fired>>')

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
}