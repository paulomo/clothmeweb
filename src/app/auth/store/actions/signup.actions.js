import * as UserActions from "./user.actions";
import * as Actions from "app/store/actions";

export const SIGNUP = 'SIGNUP';
export const REGISTER_ERROR = "REGISTER_ERROR";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export function submitSignup(payload) {
    return {
        type: SIGNUP,
        payload
    }
}

