import { combineReducers } from "redux";
import single from "redux/factories/single";
import filmActions from "redux/films/actions";
import actions from "./actions";

const initialState = {
  items: [],
  error: null,
  isLoading: false,
  total: 0,
  page: 1,
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER_DATA: {
      return {
        ...action.payload,
      };
    }
    case filmActions.CREATE_FILM_RATING_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        [action.payload.user.id]: {
          ...action.payload.user,
          userFilm: action.payload.id,
        },
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
  all: filmsReducer,
  singleUser: single({
    types: [
      actions.GET_USER_REQUEST,
      actions.GET_USER_SUCCESS,
      actions.GET_USER_FAILURE,
    ],
  })((state = initialSingleFilm, action = {}) => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  }),
});
