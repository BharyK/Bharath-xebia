import * as constants from '../constants/EmployeeData';

const initialState = {
    employeeList:[],
    newEmployeeList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.EMPLOYEE_LIST_REQUEST_SUCCESS: {
            console.log ("validation",action.payload.message)
            return {
                ...state,
                employeeList: action.payload.data.data
            };
        }

        case constants.ADD_NEW_EMPLOYEE_REQUEST_SUCCESS: {
            console.log ("validation",action.payload)
            return {
                ...state,
                newEmployeeList: action.payload
            };
        }


        default: {
            return state;
        }

    }
};

export default reducer;