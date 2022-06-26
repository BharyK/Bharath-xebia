import * as constants from '../constants/EmployeeData';

const initialState = {
    employeeList: []
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case constants.EMPLOYEE_LIST_REQUEST_SUCCESS: {
            console.log ("validation",actions.payload)
            return {
                ...state,
                employeeList: actions.payload,
            };
        }

        default: {
            return state;
        }

    }
};

export default reducer;