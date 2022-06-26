import * as constants from '../constants/employeeData';

export const employeeListRequest = (payload, meta) => ({
    meta,
    payload,
    type: constants.EMPLOYEE_LIST_REQUEST,
})

export const employeeListRequestSucess = (payload, meta) => ({
    meta,
    payload,
    type: constants.EMPLOYEE_LIST_REQUEST_SUCCESS,
});