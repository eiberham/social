import { takeLatest, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/signup';
import { Types } from '../constants';
import IAction from '../actions/auth';
import api from '../api';


function* userSignUp(action: actions.IAction){
    try {
        const {data:{token}} = yield call(api.post, '/register', action.payload);
        yield put(actions.userSignUpSuccess({
            token
        }));
    } catch(e) {
        //yield put(actions.errorResponse(e.message))
    }
}

export function* watchUserSignUpRequest() {
    yield takeEvery(Types.USER_LOGIN_REQUEST, userSignUp);
}