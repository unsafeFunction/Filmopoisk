import { combineReducers } from "redux";
import actions from "redux/films/actions";
import single from "redux/factories/single";

const initialState = {};

const userFilmReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER_FILM: {
      return {
        ...action.payload,
      };
    }
    case actions.CREATE_FILM_RATING_SUCCESS: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    default:
      return state;
  }
};

const initialSingleFilm = {
  error: null,
  isLoading: false,
};

export default combineReducers({
  all: userFilmReducers,
  singleUser: single({
    types: [],
  })((state = initialSingleFilm, action = {}) => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  }),
});
