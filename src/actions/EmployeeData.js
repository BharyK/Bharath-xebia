import * as constants from '../constants/EmployeeData';

export const employeeListRequest = (meta) => ({
    meta,
    type: constants.EMPLOYEE_LIST_REQUEST,
})

export const employeeListRequestSucess = ( payload) => ({
    payload,
    type: constants.EMPLOYEE_LIST_REQUEST_SUCCESS,
});

export const employeeDeleteRequest = (payload, meta) => ({
    payload,
    meta,
    type: constants.EMPLOYEE_LIST_DELETE_REQUEST,
})

export const employeeDeleteRequestSucess = ( payload) => ({
    payload,
    type: constants.EMPLOYEE_LIST_DELETE_REQUEST_SUCCESS,
});

export const addNewEmpployeeRequest = (payload, meta) => ({
    payload,
    meta,
    type: constants.ADD_NEW_EMPLOYEE_REQUEST,
})

export const addNewEmpployeeRequestSuccess = ( payload) => ({
    payload,
    type: constants.ADD_NEW_EMPLOYEE_REQUEST_SUCCESS,
});