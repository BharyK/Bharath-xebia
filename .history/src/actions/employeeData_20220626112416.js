import * as constants from '../constants/EmployeeData';

export const employeeListRequest = (payload, meta) => ({
    meta,
    payload,
    type: constants.EMPLOYEE_LIST_REQUEST,
})

export const employeeListRequestSucess = () => ({

    type: constants.EMPLOYEE_LIST_REQUEST_SUCCESS,
});