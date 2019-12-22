import { takeLatest, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/register';
import { Types } from '../constants';
import { IAction } from '../actions/auth';
import api from '../api';


function* userSignUp(action: IAction){
    try {
        yield call(api.post, '/register', action.payload);
        yield put(actions.userSignUpSuccess());
    } catch(error) {
        const { response: {data: {message}} } = error;
        yield put(actions.userSignUpError({message}));
    }
}

export function* watchUserSignUpRequest() {
    yield takeEvery(Types.USER_SIGNUP_REQUEST, userSignUp);
}

const registerSagas = [
    fork(watchUserSignUpRequest),
];

export default registerSagas;