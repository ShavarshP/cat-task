import { combineReducers } from "redux";
import { cate_API } from "./cat_API";

export const rootReducer = combineReducers({
  cat: cate_API,
});
