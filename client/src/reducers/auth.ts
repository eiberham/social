import { Types, IAction } from '../actions/auth';

const INITIAL_STATE = {
    auth: {
        token: null,
        authenticated: false
    }
};

const auth = (state = INITIAL_STATE, action: IAction) => {
    switch(action.type){
        case Types.USER_LOGIN_REQUEST:
            return { ...state};
        case Types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                auth: action.payload.token,
                authenticated: true
            }
        case Types.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                auth: action.payload.token,
                authenticated: false
            }
        default:
            return state;
    }
}

export default auth;