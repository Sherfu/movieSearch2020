import { combineReducers } from "redux";
//import { loadingBarReducer } from "react-redux-loading-bar";
import moviesReducer from "./moviesReducer";

const reducers = {
  moviesStore: moviesReducer,
 /* 
  loadingBar: loadingBarReducer,
 */
};

const rootReducer = combineReducers(reducers);
export default rootReducer;