import { IAction } from '../actions/auth';
import { Types } from '../constants';
import { number } from 'prop-types';

const INITIAL_STATE = {
    events: [],
    message: null,
    error: null,
    pages: 0
};

const events = (state = INITIAL_STATE, action: IAction) => {
    switch(action.type){
        case Types.GET_EVENTS_REQUEST:
            return { ...state};
        case Types.GET_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload.events,
                pages: action.payload.pages
            }
        default:
            return state;
    }
}

export default events;