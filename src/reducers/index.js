import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

const reducers = {
  moviesStore: moviesReducer,

};

const rootReducer = combineReducers(reducers);
export default rootReducer;