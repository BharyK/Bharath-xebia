import * as constants from '../constants/Auth';

const initialState = {
    isAuthenticated: false,
    customerInfo: {}
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case constants.SET_AUTH_STATUS: {
            console.log ("Bharrath", actions)
            return {
                ...state,
                isAuthenticated: actions.payload.isAuthenticated,
            };
        }

        default: {
            return state;
        }

    }
};

export default reducer;