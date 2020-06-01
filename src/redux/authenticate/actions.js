import { SIGNIN , SIGNUP , MFA , FORGOT_PASSWORD , NEAREST_SALOON} from './constants'


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
        payLoad: data
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


export {
    signUpSuccess,
    loginSuccess,
    mfaSuccess,
    forgotPasswordSuccess,
    nearestSaloonSuccess,
}
