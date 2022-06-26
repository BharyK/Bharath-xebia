import { call, put, takeLatest } from 'redux-saga/effects';
import { getRequest } from '../api/APICalls';
import { employeeListRequestSucess, employeeDeleteRequestSucess } from '../actions/EmployeeData';
import * as constants from '../constants/EmployeeData';

function* EmployeeListSaga({ payload, meta: { resolve, reject } }) {
    try {
      const res = yield call(getRequest, 'v1/employees', payload);
      yield put(employeeListRequestSucess(res));
      yield call(resolve);
    } catch (error) {
      yield call(reject, error);
    }
  }

  function* EmployeeDeleteListSaga({ payload, meta: { resolve, reject } }) {
    try {
      const res = yield call(getRequest, 'v1/employees', payload);
      yield put(employeeDeleteRequestSucess(res));
      yield call(resolve);
    } catch (error) {
      yield call(reject, error);
    }
  }

export default function* sagas() {
    yield takeLatest (constants.EMPLOYEE_LIST_REQUEST, EmployeeListSaga);
    yield takeLatest (constants.EMPLOYEE_LIST_DELETE_REQUEST, EmployeeDeleteListSaga);
}