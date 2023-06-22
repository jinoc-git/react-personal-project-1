import { createStore } from "redux";
import { combineReducers } from "redux";
import todosHandler from "../modules/changeTodosHandler";

// 모든 state들을 묶음
const rootReducer = combineReducers({
  todosHandler,
});
const store = createStore(rootReducer);

export default store;
