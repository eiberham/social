import { IAction } from '../actions/auth';
import { Types } from '../constants';

const INITIAL_STATE = {
    events: [],
    message: null,
    error: null
};

const events = (state = INITIAL_STATE, action: IAction) => {
    switch(action.type){
        case Types.GET_EVENTS_REQUEST:
            return { ...state};
        case Types.GET_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload.events
            }
        default:
            return state;
    }
}

export default events;