import { combineReducers } from "redux"
import { userLoginReducer } from "./userlogin"

const rootReducer = combineReducers({
    userLoginReducer: userLoginReducer
})

export default rootReducer;