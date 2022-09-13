import { combineReducers } from "redux";
import { amountReducer } from "./AmountReducer";
import { commentsReducer } from "./commentsReducer";



export const rootReducer = combineReducers({
    amountReducer,
    commentsReducer
});