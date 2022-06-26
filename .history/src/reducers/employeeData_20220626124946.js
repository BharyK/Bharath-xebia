import * as constants from '../constants/EmployeeData';

const initialState = {
    employeeList: []
}

const reducer = (state = initialState, action) => {
    switch (actions.type) {
        case constants.EMPLOYEE_LIST_REQUEST_SUCCESS: {
            console.log ("validation",action.payload)
            return {
                ...state,
                employeeList: action.payload.data,
            };
        }

        default: {
            return state;
        }

    }
};

export default reducer;