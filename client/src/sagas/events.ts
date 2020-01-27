import { call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/events';
import { IAction } from '../actions/auth';
import { Types } from '../constants';
import api from '../api';

function* getEvents(action: IAction){
    try {
        const { page } = action.payload;
        const {data: {events, pages}} = yield call(api.get, `/events?page=${page}&size=2`, action.payload);
        yield put(actions.eventsGetSuccess(events, pages));
    } catch(e) {
        //yield put(actions.errorResponse(e.message))
    }
}

export function* watchGetEventsRequest() {
    yield takeEvery(Types.GET_EVENTS_REQUEST, getEvents);
}

const eventSagas = [
    fork(watchGetEventsRequest)
];

export default eventSagas;