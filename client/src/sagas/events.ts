import { call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/events';
import { IAction } from '../actions/auth';
import { Types } from '../constants';
import api from '../api';

function* getEvents(action: IAction){
    try {
        const {data} = yield call(api.post, '/events', action.payload);
        console.log("data: ", data);
        yield put(actions.eventsGetSuccess(data.events));
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