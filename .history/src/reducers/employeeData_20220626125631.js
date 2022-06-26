import * as constants from '../constants/EmployeeData';

const initialState = {
    employeeList:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.EMPLOYEE_LIST_REQUEST_SUCCESS: {
            console.log ("validation",action.payload.data)
            return {
                ...state,
                employeeList: action.payload.data
            };
        }

        default: {
            return state;
        }

    }
};

export default reducer;