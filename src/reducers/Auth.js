import * as constants from '../constants/Auth';

const initialState = {
    isAuthenticated: "Bharath",
    customerInfo: {}
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case constants.SIGN_IN_SUCCESS: {
            return {
                ...state,
                customerInfo: actions.payload.data,
                isAuthenticated: true
            };
        }

        default: {
            return state;
        }

    }
};

export default reducer;