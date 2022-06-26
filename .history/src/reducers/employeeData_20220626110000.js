import * as constants from '../constants/employeeData';

const initialState = {
    employeeList: "Bhaath"
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case constants.EMPLOYEE_LIST_REQUEST_SUCCESS: {
            return {
                ...state,
                employeeList: actions.payload.data,
            };
        }

        default: {
            return state;
        }

    }
};

export default reducer;