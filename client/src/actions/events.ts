import { Types } from '../constants';

import { IAction } from './auth';

export const eventsGetRequest = (page: number): IAction => {
    return {
        type: Types.GET_EVENTS_REQUEST,
        payload: {
            page
        }
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