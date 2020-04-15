import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./root-reducers";
import rootSage from "./root-sagas";
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSage);

export const persistor = persistStore(store);

export default { store, persistor };
