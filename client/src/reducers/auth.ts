import { Types, IAction } from '../actions/auth';

const INITIAL_STATE = {
    auth: {}
};

const auth = (state = INITIAL_STATE, action: IAction) => {
    switch(action.type){
        case Types.USER_LOGIN_REQUEST:
            console.log("pasa por acaaaa");
            return { ...state};
        case Types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                auth: action.payload.token
            }
        default:
            return state;
    }
}

export default auth;