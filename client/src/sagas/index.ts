import { all } from 'redux-saga/effects';
import authSagas from './auth';
import registerSagas from './register'

export default function* rootSaga(){
    return yield all([
        ...authSagas,
        ...registerSagas
    ]);
}