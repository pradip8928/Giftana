import { createStore, combineReducers, applyMiddleware } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { adminReducer } from "./Components/reducers/adminReducer";

const reducer = combineReducers({
  admin: adminReducer,
});

let initialState = {};

const middleware = [thunk];

const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
