import actions from "./actions";

const initialState = {
  items: [],
  error: null,
  isLoading: false,
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_GENRES_REQUEST: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actions.LOAD_GENRES_SUCCESS: {
      return {
        items: action.payload.data,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

export default genresReducer;
