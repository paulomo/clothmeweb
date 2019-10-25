import { all } from 'redux-saga/effects';
import authRootSaga from '../../auth/store/sagas';

export default function* rootSaga() {
    yield all ([
        authRootSaga(),
    ])
}