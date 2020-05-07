import { all } from "redux-saga/effects";
import films from "./films/sagas";
import users from "./users/sagas";
import genres from "./genres/sagas";

export default function* rootSaga() {
  yield all([films(), users(), genres()]);
}
