import { Types, IAction } from '../actions/auth';

const INITIAL_STATE = {
    auth: {
        token: null
    }
};

const auth = (state = INITIAL_STATE, action: IAction) => {
    switch(action.type){
        case Types.USER_LOGIN_REQUEST:
            return { ...state};
        case Types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                auth: action.payload.token
            }
        case Types.USER_LOGOUT:
            return {
                ...state,
                auth: ''
            }
        default:
            return state;
    }
}

export default auth;