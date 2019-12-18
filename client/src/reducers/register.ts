import { IAction } from '../actions/auth';
import { Types } from '../constants';

const INITIAL_STATE = {
    registered: false,
    message: null,
    error: null
};

const signup = (state = INITIAL_STATE, action: IAction) => {
    switch(action.type){
        case Types.USER_SIGNUP_REQUEST:
            return { ...state};
        case Types.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                registered: true
            }
        case Types.USER_SIGNUP_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default signup;