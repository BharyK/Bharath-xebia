import { call, put, takeLatest } from 'redux-saga/effects';
import { getRequest } from '../api/APICalls';
import { employeeListRequestSucess } from '../actions/EmployeeData';
import * as constants from '../constants/EmployeeData';

function* employeeList({ payload, meta: { resolve, reject } }) {
    console.log ("Bharath")
    try {
      const res = yield call(getRequest, 'v1/employees', payload);
      yield put(employeeListRequestSucess(res));
      yield call(resolve);
    } catch (error) {
      yield call(reject, error);
    }
  }

export default function* sagas() {
    yield takeLatest (constants.EMPLOYEE_LIST_REQUEST_SUCCESS, employeeList)
}