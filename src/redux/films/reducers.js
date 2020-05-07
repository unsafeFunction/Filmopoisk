import { combineReducers } from "redux";
import single from "redux/factories/single";
import { normalize } from "normalizr";
import { films } from "redux/schemes";
import actions from "./actions";

const initialState = {
  items: [],
  recommendations: [],
  error: null,
  isLoading: false,
  total: 0,
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_FILMS_REQUEST: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actions.LOAD_FILMS_SUCCESS: {
      return {
        ...state,
        items: normalize(action.payload.data, [films]).entities,
        total: action.payload.total,
        isLoading: true,
      };
    }
    case actions.LOAD_RECOMMENDATIONS_SUCCESS: {
      return {
        ...state,
        recommendations: action.payload.data,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

const initialSingleFilm = {
  error: null,
  isLoading: false,
  searchString: "",
  page: 1,
};

export default combineReducers({
  all: filmsReducer,
  singleFilm: single({
    types: [actions.GET_FILM_REQUEST, actions.GET_FILM_FAILURE],
  })((state = initialSingleFilm, action = {}) => {
    switch (action.type) {
      case actions.GET_FILM_SUCCESS: {
        return {
          ...state,
          isLoading: true,
          ...action.payload,
        };
      }
      case actions.SET_FILM_DATA: {
        const { name, value } = action.payload;

        return {
          [name]: value,
        };
      }
      case actions.CREATE_FILM_RATING_SUCCESS: {
        return {
          ...state,
          isLoading: true,
          [action.payload.filmId]: {
            ...state[action.payload.filmId],
            users: [
              ...state[action.payload.filmId].users,
              action.payload.user.id,
            ],
          },
        };
      }
      case actions.SET_FILM_QUERY_DATA: {
        return {
          ...state,
          searchString: action.payload.value,
        };
      }
      default: {
        return state;
      }
    }
  }),
});
