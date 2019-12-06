import { call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/events';
import { IAction } from '../actions/auth';
import { Types } from '../constants';
import api from '../api';

function* getEvents(action: IAction){
    try {
        const {data: {events}} = yield call(api.get, '/events', action.payload);
        yield put(actions.eventsGetSuccess(events));
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