import { SIGNIN , SIGNUP , MFA , FORGOT_PASSWORD} from './constants'


/******************************* SignUp ****************************************/

const signUpRequest = (signUpCredentials) =>{
    return{
        type: SIGNUP.REQUEST,
        payLoad: signUpCredentials
    }
}

const signUpSuccess = () =>{
    return{
        type: SIGNUP.SUCCESS,
    }
}

const signUpFailure = (error) =>{
    return{
        type: SIGNUP.FAILURE,
        error: error
    }
}

/******************************* SignIn ****************************************/

const loginRequest = (loginCredentials) =>{
    console.log('Login Resquest is Fired>>',loginCredentials)
    return{
        type: SIGNIN.REQUEST,
        payLoad: loginCredentials
    }
}

const loginSuccess = () =>{
    console.log('Login Success is Fired>>')

    return{
        type : SIGNIN.SUCCESS,
    }
}

const loginFailure = (error) =>{
    console.log('Login Error is Fired>>',error)

    return{
        type : SIGNIN.FAILURE , 
        error : error
    }
}

/******************************* MFA ****************************************/

const mfaRequest = (mfaCredentials) =>{
    return{
        type: MFA.REQUEST,
        payLoad: mfaCredentials
    }
}

const mfaSuccess = (data) =>{
    return{
        type: MFA.SUCCESS,
        payLoad: data
    }
}

const mfaFailure = (error) =>{
    return{
        type: MFA.FAILURE,
        payLoad: error
    }
}

/******************************* Forgot Password ****************************************/

const forgotPasswordRequest = (forgotPasswordCredentials) =>{
    return{
        type: FORGOT_PASSWORD.REQUEST,
        payLoad: forgotPasswordCredentials
    }
}

const forgotPasswordSuccess = () =>{
    return{
        type: FORGOT_PASSWORD.SUCCESS,
    }
}

const forgotPasswordFailure = (error) =>{
    return{
        type: FORGOT_PASSWORD.FAILURE,
        error: error
    }
}

export {
    signUpRequest,
    signUpSuccess,
    signUpFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
    mfaRequest,
    mfaSuccess,
    mfaFailure,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    forgotPasswordFailure,
}
