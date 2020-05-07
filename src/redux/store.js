import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();

let middlewares = [saga];

if (process.env.NODE_ENV === "development") {
  middlewares = [...middlewares, logger];
}

const store = createStore(
  rootReducer(),
  composeWithDevTools(applyMiddleware(...middlewares))
);

saga.run(rootSaga);

export default store;
