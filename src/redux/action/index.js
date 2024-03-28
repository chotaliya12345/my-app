import  {combineReducers}  from "redux";
import { counterReducer } from "../reducer/counter.reducer";


export const rootReducers = combineReducers({
    counter: counterReducer
})