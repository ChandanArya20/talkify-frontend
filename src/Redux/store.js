import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";

const userReducers=combineReducers({});

export const store=createStore(userReducers, applyMiddleware(thunk) );