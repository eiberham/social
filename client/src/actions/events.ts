import { Types } from '../constants';

import { IAction } from './auth';

export const eventsGetRequest = (): IAction => {
    return {
        type: Types.GET_EVENTS_REQUEST
    }
};

export const eventsGetSuccess = (events, pages): IAction => {
    return {
        type: Types.GET_EVENTS_SUCCESS,
        payload: {
            events, pages
        }
    }
};