import { setUserData } from "./user.actions";
import * as Actions from "app/store/actions";

export const SIGNIN = "SIGNIN";
export const SIGNIN_ERROR = "LOGIN_ERROR";
export const SIGNIN_SUCCESS = "LOGIN_SUCCESS";

export function submitSignin(payload) {
    return {
        type: SIGNIN,
        payload
    }
}
