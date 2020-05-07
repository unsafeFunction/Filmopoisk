import { combineReducers } from "redux";
import films from "./films/reducers";
import users from "./users/reducers";
import userFilms from "./userFilms/reducers";
import genres from "./genres/reducers";

const rootReducer = () =>
  combineReducers({
    films,
    users,
    userFilms,
    genres,
  });

export default rootReducer;
