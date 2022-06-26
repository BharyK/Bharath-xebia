import * as constants from '../constants/EmployeeData';

export const employeeListRequest = (meta) => ({
    meta,
    type: constants.EMPLOYEE_LIST_REQUEST,
})

export const employeeListRequestSucess = (meta, payload) => ({
    meta,
    payload,
    type: constants.EMPLOYEE_LIST_REQUEST_SUCCESS,
});