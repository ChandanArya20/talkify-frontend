import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./Auth/reducer";

const userReducers=combineReducers({userReducer});

export const store=createStore(userReducers, applyMiddleware(thunk) );