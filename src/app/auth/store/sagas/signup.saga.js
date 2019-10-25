import { put, call } from 'redux-saga/effects';
import { signupUserService } from '../../../services/authentication/authenticationService';
import * as types from '../actions'


export function* signupSaga(payload) {
  try {
    const response = yield call(signupUserService, payload);
    yield put({ type: types.SIGNUP_USER_SUCCESS, response })
  } catch(error) {
    yield put({ type: types.SIGNUP_USER_FAILURE, error });
  }
}

