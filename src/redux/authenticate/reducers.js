import { SIGNUP, SIGNIN, MFA , FORGOT_PASSWORD} from './constants';


/******************************** SignUp Reducer ***********************************/

const signUpInitialState={
    credentials: [],
    isRequestSent: false,
    error: null,
    isSignUp:false
} 

const signUpReducer = (state = signUpInitialState , action) =>{
    switch (action.type) {
        case SIGNUP.REQUEST:
            return{
                ...state,
                credentials: [...action.payLoad],
                isRequestSent: true,
                error: null,
                isSignUp:false
            }
        case SIGNUP.SUCCESS :
            return{
                ...state,
                credentials: state.credentials,
                isRequestSent: false,
                error: null,
                isSignUp: true
            }
        case SIGNUP.FAILURE :
            return{
                ...state,
                credentials: state.credentials,
                isRequestSent: false,
                error: action.error,
                isSignUp:false
            }
        default: return state;
    }
}

/******************************** Login Reducer ***********************************/

const loginInitialState={
    credentials: [],
    isRequestSent: false,
    error: null,
    isLogin: false
}

const loginReducer = (state= loginInitialState , action)=>{
    switch (action.type) {
        case SIGNIN.REQUEST:
            console.log('Payload is >>',action.payLoad)
            return{
                ...state,
                credentials: [action.payLoad],
                isRequestSent: true,
                error: null,
                isLogin: false
            }
        case SIGNIN.SUCCESS:
            return{
                ...state,
                credentials: state.credentials,
                isRequestSent: false,
                error: null,
                isLogin: true
            }
        case SIGNIN.FAILURE:
            return{
                ...state,
                credentials: state.credentials ,
                isRequestSent: false,
                error: action.error,
                isLogin: false,
            }
        default: return state;
    }
}

/******************************** MFA Reducer ***********************************/

const mfaInitialState={
    credentials: [],
    isRequestSent: false,
    error: null,
    data:[],
    isAuthenticate: false
}


const mfaReducer = (state=mfaInitialState , action) =>{
    switch (action.type) {
        case MFA.REQUEST:
            return{
                ...state,
                credentials: [action.payLoad],
                isRequestSent: true,
                error: null,
                data:[],
                isAuthenticate: false
            }
        case MFA.SUCCESS:
            console.log('MFA SUCCESSS >>>>>')
            return{
                ...state,
                credentials: state.credentials,
                isRequestSent: false,
                error:null,
                data: [...action.payLoad],
                isAuthenticate: true
            }
        case MFA.FAILURE:
            return{
                ...state,
                credentials: state.credentials,
                isRequestSent: false,
                error: action.error,
                data:[],
                isAuthenticate: false
            }
    
        default: return state;
    }
}

/********************************* FORGOT PASSWORD *************************************/

const forgotPasswordInitialState = {
    credentials: [],
    isRequestSent: false,
    error: null,
    isForgotPasswordRequestSuccess : false
}

const forgotPasswordReducer = (state= forgotPasswordInitialState , action) =>{
    switch (action.type) {
        case FORGOT_PASSWORD.REQUEST:
            return{
                ...state,
                credentials: [action.payLoad],
                isRequestSent: true,
                error: null,
                isForgotPasswordRequestSuccess : false
            }
        case FORGOT_PASSWORD.SUCCESS:
            return{
                ...state,
                credentials: state.credentials,
                isRequestSent: false,
                error: null,
                isForgotPasswordRequestSuccess : true
            }
        case FORGOT_PASSWORD.FAILURE:
            return{
                ...state,
                credentials: state.credentials,
                isRequestSent: false,
                error: action.error,
                isForgotPasswordRequestSuccess : false
            }
        default: return state
    }
}

export {
    signUpReducer,
    loginReducer,
    mfaReducer,
    forgotPasswordReducer,
}
