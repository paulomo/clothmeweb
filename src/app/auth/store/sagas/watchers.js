import { takeLatest } from 'redux-saga/effects';
import { signinSaga } from './signin.saga';
import { signupSaga } from './signup.saga'

import * as types from '../actions';

export default function* watchUserAuthentication() {
  yield takeLatest(types.SIGNUP_REQUEST, signupSaga);
  yield takeLatest(types.SIGNIN_REQUEST, signinSaga);
  // yield takeLatest(types.SIGNOUT_REQUEST, signupSaga);
  // yield takeLatest(types.FORGOTPASSWORD_REQUEST, signinSaga);
  // yield takeLatest(types.RESETPASSWORD_REQUEST, signupSaga);
  // yield takeLatest(types.CONFIRMSIGNUP_REQUEST, signinSaga);
  // yield takeLatest(types.BACKGROUDCHECK_REQUEST, signinSaga);
}