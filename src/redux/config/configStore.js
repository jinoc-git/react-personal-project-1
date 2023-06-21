import { createStore } from "redux";
import { combineReducers } from "redux";
import changeStateHandler from "../modules/submit";

// 모든 state들을 묶음
const rootReducer = combineReducers({
  changeStateHandler,
  
});
const store = createStore(rootReducer);

export default store;