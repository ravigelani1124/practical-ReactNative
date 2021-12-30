import { USER_LOGIN } from "../types";

export const userLoginAction = userLogin => ({
    type: USER_LOGIN,
    payload: userLogin
})