import { call, put, takeLatest } from 'redux-saga/effects';
import { getRequest, postRequest } from '../api/APICalls';
import { authSuccess } from '../actions/Auth';
import * as constants from '../constants/Auth';

function* authProvider({ payload, meta: { resolve, reject } }) {
    try {
      const res = yield call(postRequest, 'auth/login', payload);
      yield put(authSuccess(res));
      yield call(resolve);
    } catch (error) {
      yield call(reject, error);
    }
  }

export default function* sagas() {
    yield takeLatest (constants.SIGN_IN_REQEUST, authProvider)
}