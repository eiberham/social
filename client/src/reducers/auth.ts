import { Types } from '../actions/auth';

const INITIAL_STATE = {
    auth: {}
};

const auth = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case Types.USER_LOGIN_REQUEST:
            return { ...state};
        case Types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                auth: action.payload.token
            }
    }
}

export default auth;