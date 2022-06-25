import * as constants from '../constants/Auth';

export const authProviderRequest = (payload, meta) => ({
    meta,
    payload,
    type: constants.SIGN_IN_REQEUST,
})

export const authSuccess = (payload, meta) => ({
    meta,
    payload,
    type: constants.SIGN_IN_SUCCESS,
});