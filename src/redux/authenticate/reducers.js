import { SIGNUP, SIGNIN, MFA , FORGOT_PASSWORD , NEAREST_SALOON} from './constants';


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
}


const mfaReducer = (state=mfaInitialState , action) =>{
    switch (action.type) {
       
        case MFA.SUCCESS:
            console.log('MFA SUCCESSS >>>>>')
            return{
                ...state,
                isAuthenticate: true,
                data: action.payLoad,

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


export {
    signUpReducer,
    loginReducer,
    mfaReducer,
    forgotPasswordReducer,
    nearestSaloonReducer,
}
