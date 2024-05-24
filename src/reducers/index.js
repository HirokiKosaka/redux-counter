import { combineReducers } from "redux";
import counterReducer from "./Counter";
import isLoginReducer from "./isLogin";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});

export default allReducers;
