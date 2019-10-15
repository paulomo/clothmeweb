import { put, call } from 'redux-saga/effects';
import { signinUserService } from '../../../services/authentication/authenticationService';


export function* signinSaga(payload) {
  try {
    const response = yield call(signinUserService, payload);
    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}

