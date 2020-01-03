import { IAction } from '../actions/users';
import { Types } from '../constants';

const INITIAL_STATE = {
    message: null,
    error: null
};

const users = (state = INITIAL_STATE, action: IAction) => {
    switch(action.type){
        case Types.USER_CHANGE_PASSWORD_REQUEST:
            return { ...state};
        case Types.USER_CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
            }
        case Types.USER_CHANGE_PASSWORD_ERROR:
            return {
                ...state,
                error: action.payload.message
            }
        default:
            return state;
    }
}

export default users;