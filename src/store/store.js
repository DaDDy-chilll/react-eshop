import { compose, applyMiddleware, createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
};

const middleWares = [logger];
const composedEnchancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnchancers);
