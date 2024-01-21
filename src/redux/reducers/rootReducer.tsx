import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import modalReducer from "./modalReducer";
import snackBarReducer from "./snackBarReducer";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  modalReducer: modalReducer,
  snackBarReducer: snackBarReducer,
});

export default rootReducer;
