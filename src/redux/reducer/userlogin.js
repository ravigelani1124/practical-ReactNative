import { USER_LOGIN } from "../types";

const initialState = {
    userLogin: false,
};

export const userLoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN: return {
            state,
            userLogin: action.payload
        };
        default:
            return state;
    }
}

