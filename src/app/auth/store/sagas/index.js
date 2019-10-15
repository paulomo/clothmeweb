import { fork } from 'redux-saga/effects';
import watchUserAuthentication from './watchers';

export default function* startForman() {
  yield fork(watchUserAuthentication);
}



// import { all } from "redux-saga/effects";

// // single entry point to start all Sagas at once
// export default function* authSaga() {
//   yield all([
//     // helloSaga(),
//     // watchIncrementAsync()
//   ]);
// }



// Note: Saga have watchers watching for actions dispatched by the user or someothe events
/**
 *– saga-watcher is watching for dispatched actions and spawns a new task on every action.
 *  You can think about it as another implicit layer in Redux ecosystem.
 *  It combines async actions (saga-worker) into the broader business logic and gives you more
 *  flexibility to implement complex solutions.
 *– saga-worker is responsible for handling all logic required by action and terminating them.
 */

/*
import { put, takeEvery, call, all, select } from 'redux-saga/effects';
import axios from 'axios';

function fetchQuakes() {
    return axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
}

export function* handleLoadQuakes() {
    try {
        yield put({type: 'SET_STATUS', status: 'loading'});
        let resp = yield call(fetchQuakes);

        yield put({
            type: 'SET_QUAKES', // new function
            quakes: resp.data.features,
        });
     yield put({type: 'SET_STATUS', status: 'complete'});
   } catch (err) {
       yield put({type: 'SET_STATUS', status: 'error', err});
    }
}


/*
import { takeEvery } from 'redux-saga/effects'

// FETCH_USERS
function* fetchUsers(action) { ... }

// CREATE_USER
function* createUser(action) { ... }

// use them in parallel
export default function* rootSaga() {
  yield takeEvery('FETCH_USERS', fetchUsers)
  yield takeEvery('CREATE_USER', createUser)
}

*/
