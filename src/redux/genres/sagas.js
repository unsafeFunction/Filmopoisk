import { all, takeEvery, put, call } from "redux-saga/effects";
import { loadGenres } from "./api";
import actions from "./actions";

export function* callLoadGenres({ payload }) {
  try {
    const response = yield call(loadGenres);

    yield put({
      type: actions.LOAD_GENRES_SUCCESS,
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    return error;
  }
}
export default function* rootSaga() {
  yield all([takeEvery(actions.LOAD_GENRES_REQUEST, callLoadGenres)]);
}
