import { IAction } from '../actions/auth';
import { Types } from '../constants';

const INITIAL_STATE = {
    token: null,
    authenticated: false,
    error: null
};

const auth = (state = INITIAL_STATE, action: IAction) => {
    switch(action.type){
        case Types.USER_LOGIN_REQUEST:
            return { ...state};
        case Types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                //auth: { 
                    token: action.payload.token,
                    authenticated: true
                //}
            }
        case Types.USER_LOGIN_ERROR:
            console.log("llama al reducer error");
            const { code, message } = action.payload.error;
            return {
                ...state,
                error: code === 401 
                ? 'User or Password Incorrect' 
                : message
            }
        case Types.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                //auth: { 
                    token: action.payload.token,
                    authenticated: false
                //}
            }
        default:
            return state;
    }
}

export default auth;