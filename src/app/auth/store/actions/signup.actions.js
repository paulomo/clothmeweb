export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_USER_FAILURE = "SIGNUP_FAILURE";
export const SIGNUP_USER_SUCCESS = "REGISTER_SUCCESS";

export function startSignup() {
    console.log("start signup action");
    return {
        type: SIGNUP_REQUEST,
    }
}

export function successSignup(data) {
    console.log("success signup");
    return {
        type: SIGNUP_USER_SUCCESS,
        payload: { ...data }
    }
}

export function failureSignup(error) {
    console.log("failure signup");
    return {
        type: SIGNUP_USER_FAILURE,
        payload: { ...error }
    }
}
