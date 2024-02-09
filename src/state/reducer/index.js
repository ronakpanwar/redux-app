import { combineReducers } from "redux"
import amountRedux from "./amountRedux"

const reducers = combineReducers({
    amount : amountRedux
})

export default reducers;