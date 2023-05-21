import { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//! chose thunk or sega
// import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";
import { rootSega } from "./root-sega";

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("currentSate", store.getState());
//   next(action);
//   console.log("next state", store.getState());
// };

const presistConifg = {
  key: "root",
  storage,
  blacklist: ["user"],
  // whitelist: ["cart"],
};

//sega
const segaMiddleware = createSagaMiddleware();

const presistedReducer = persistReducer(presistConifg, rootReducer);

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  // thunk,
  segaMiddleware,
].filter(Boolean);

//? Redux Dev tools

const composedEnchancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

////////
const composedEnchancers = composedEnchancer(applyMiddleware(...middleWares));
export const store = createStore(
  presistedReducer,
  undefined,
  composedEnchancers
);
segaMiddleware.run(rootSega);

export const persistor = persistStore(store);
