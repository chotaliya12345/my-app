import { rootReducers } from "./action"
import { thunk } from "redux-thunk";
import { createStore, applyMiddleware } from "redux";



export const configureStore = () => {
    const store = createStore(rootReducers, applyMiddleware(thunk));

    return store
}