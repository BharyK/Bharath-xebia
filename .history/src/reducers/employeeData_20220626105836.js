import * as constants from '../constants/employeeData';

const initialState = {
    isAuthenticated: "Bharath",
    employeeList: []
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case constants.EMPLOYEE_LIST_REQUEST_SUCCESS: {
            return {
                ...state,
                employeeList: actions.payload.data,
                isAuthenticated: true
            };
        }

        default: {
            return state;
        }

    }
};

export default reducer;