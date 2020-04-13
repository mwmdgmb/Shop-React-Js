import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducers from "./root-reducers";

const middlewares = [logger];

export const store = createStore(rootReducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
