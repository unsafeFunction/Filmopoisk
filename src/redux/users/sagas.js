import { all, takeEvery, put, call } from "redux-saga/effects";
import { getUser } from "./api";

import actions from "./actions";

export function* callGetUser({ payload }) {
  try {
    const response = yield call(getUser, payload.id);
    yield put({
      type: actions.GET_USER_SUCCESS,
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_USER_REQUEST, callGetUser)]);
}
