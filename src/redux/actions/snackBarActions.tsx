import { TSnackbarKey } from "../../types/types";
import {
  UPDATE_SNACKBAR_CONTENT,
  SHOW_SNACKBAR_TRUE,
  SHOW_SNACKBAR_FALSE,
} from "./actionTypes/snackBarActionTypes";

export const snackBarActions = {
  updateSnackBarContent: (payload: { key: TSnackbarKey }) =>
    ({ type: UPDATE_SNACKBAR_CONTENT, payload } as const),
  showSnackBarTrue: (payload: { showSnackBar: boolean }) =>
    ({ type: SHOW_SNACKBAR_TRUE, payload } as const),
  showSnackBarFalse: (payload: { showSnackBar: boolean }) =>
    ({ type: SHOW_SNACKBAR_FALSE, payload } as const),
};
