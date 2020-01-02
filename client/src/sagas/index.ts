import { all } from 'redux-saga/effects';
import authSagas from './auth';
import registerSagas from './register';
import eventSagas from './events';
import userSagas from './users'

export default function* rootSaga(){
    return yield all([
        ...authSagas,
        ...registerSagas,
        ...eventSagas,
        ...userSagas
    ]);
}