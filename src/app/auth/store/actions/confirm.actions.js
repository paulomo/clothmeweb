export const API_CONFIRMSIGNUP = 'API_CONFIRMSIGNUP';
export const CONFIRMSIGNUP_ERROR = "REGISTER_ERROR";
export const CONFIRMSIGNUP_SUCCESS = "REGISTER_SUCCESS";

export function confirmSignup(payload) {
    return {
        type: API_CONFIRMSIGNUP,
        payload
    }
}