import { TSnackBarActions, TSnackBarRootState } from "../../types/types";
import {
  SHOW_SNACKBAR_FALSE,
  SHOW_SNACKBAR_TRUE,
  UPDATE_SNACKBAR_CONTENT,
} from "../actions/actionTypes/snackBarActionTypes";

const initialState: Partial<TSnackBarRootState> = {
  showSnackBar: false,
  snackBarContentKey: "",
};

const snackBarReducer = (state = initialState, action: TSnackBarActions) => {
  switch (action.type) {
    case UPDATE_SNACKBAR_CONTENT:
      return {
        ...state,
        snackBarContentKey: action.payload.key,
      };
    case SHOW_SNACKBAR_TRUE:
      return {
        ...state,
        showSnackBar: action.payload.showSnackBar,
      };
    case SHOW_SNACKBAR_FALSE:
      return {
        ...state,
        showSnackBar: action.payload.showSnackBar,
      };

    default:
      return state;
  }
};

export default snackBarReducer;
