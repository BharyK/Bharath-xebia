import * as constants from '../constants/Auth';

export const setAuthStatus = ({payload}) => ({
    payload,
    type: constants.SET_AUTH_STATUS,
})
