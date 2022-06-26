import { call, put, takeLatest } from 'redux-saga/effects';
import { getRequest, postRequest, deleteRequest } from '../api/APICalls';
import { employeeListRequestSucess, employeeDeleteRequestSucess,
  addNewEmpployeeRequestSuccess
} from '../actions/EmployeeData';
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
      const res = yield call(deleteRequest, `v1/delete/${payload}`);
      yield put(employeeDeleteRequestSucess(res));
      yield call(resolve);
    } catch (error) {
      yield call(reject, error);
    }
  }

  function* AddNewEmployeeSaga({ payload, meta: { resolve, reject } }) {
    console.log("payload", payload)
    try {
      const res = yield call(postRequest, 'v1/create', payload);
      yield put(addNewEmpployeeRequestSuccess(res));
      yield call(resolve);
    } catch (error) {
      yield call(reject, error);
    }
  }

export default function* sagas() {
    yield takeLatest (constants.EMPLOYEE_LIST_REQUEST, EmployeeListSaga);
    yield takeLatest (constants.EMPLOYEE_LIST_DELETE_REQUEST, EmployeeDeleteListSaga);
    yield takeLatest (constants.ADD_NEW_EMPLOYEE_REQUEST, AddNewEmployeeSaga)
}