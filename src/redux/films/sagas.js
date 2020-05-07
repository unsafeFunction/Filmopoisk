import { all, takeEvery, put, call } from "redux-saga/effects";
import { normalize } from "normalizr";
import { singleFilms } from "redux/schemes";
import userActions from "redux/users/actions";
import {
  loadFilms,
  getFilm,
  patchFilmRating,
  createFilmRating,
  loadRecommendations,
} from "./api";
import actions from "./actions";

export function* callLoadFilms({ payload }) {
  try {
    const response = yield call(loadFilms, payload);

    yield put({
      type: actions.LOAD_FILMS_SUCCESS,
      payload: {
        data: response.data.rows,
        total: response.data.count,
      },
    });
  } catch (error) {
    return error;
  }
}

export function* callLoadRecommendations({ payload }) {
  try {
    const response = yield call(loadRecommendations, payload);

    yield put({
      type: actions.LOAD_RECOMMENDATIONS_SUCCESS,
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    return error;
  }
}

export function* callGetFilm({ payload }) {
  try {
    const response = yield call(getFilm, payload.id);

    const normalizeData = normalize(response.data, singleFilms).entities;

    yield put({
      type: actions.GET_FILM_SUCCESS,
      payload: {
        ...normalizeData.film,
      },
    });
    yield put({
      type: actions.SET_USER_FILM,
      payload: {
        ...normalizeData.userFilm,
      },
    });
    yield put({
      type: userActions.SET_USER_DATA,
      payload: {
        ...normalizeData.users,
      },
    });
  } catch (error) {
    return error;
  }
}

export function* callPatchFilmRating({ payload }) {
  try {
    const response = yield call(patchFilmRating, payload);

    yield put({
      type: actions.UPDATE_FILM_RATING_SUCCESS,
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    return error;
  }
}

export function* callCreateFilmRating({ payload }) {
  try {
    const response = yield call(createFilmRating, payload);

    yield put({
      type: actions.CREATE_FILM_RATING_SUCCESS,
      payload: {
        ...response.data,
      },
    });
  } catch (error) {
    return error;
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOAD_FILMS_REQUEST, callLoadFilms),
    takeEvery(actions.GET_FILM_REQUEST, callGetFilm),
    takeEvery(actions.UPDATE_FILM_RATING_REQUEST, callPatchFilmRating),
    takeEvery(actions.CREATE_FILM_RATING_REQUEST, callCreateFilmRating),
    takeEvery(actions.LOAD_RECOMMENDATIONS_REQUEST, callLoadRecommendations),
  ]);
}
