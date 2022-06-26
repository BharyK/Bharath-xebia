import { call, put, takeLatest } from 'redux-saga/effects';
import { getRequest } from '../api/APICalls';
import { employeeListRequestSucess } from '../actions/employeeData';
import * as constants from '../constants/employeeData';

function* employeeList({ payload, meta: { resolve, reject } }) {
    try {
      const res = yield call(getRequest, 'v1/employees', payload);
      console.log ("res", res)
      yield put(employeeListRequestSucess(res));
      yield call(resolve);
    } catch (error) {
      yield call(reject, error);
    }
  }

export default function* sagas() {
    yield takeLatest (constants.EMPLOYEE_LIST_REQUEST_SUCCESS, employeeList)
}