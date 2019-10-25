import { put, call } from 'redux-saga/effects';
import { signinUserService } from '../../../services/authentication/authenticationService';
import * as types from '../actions'


export function* signinSaga(payload) {
  try {
    const response = yield call(signinUserService, payload);
    yield [
      put({ type: types.SIGNIN_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.SIGNIN_USER_FAILURE, error })
  }
}

