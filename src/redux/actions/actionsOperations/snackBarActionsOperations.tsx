import { FILTER_SNACKBAR_MAP } from "../../../utils/filterMaps";
import { AppDispatch, TSnackbarKey } from "../../../types/types";
import { snackBarActions } from "../snackBarActions";

export const updateSnackBar = (key: TSnackbarKey) => {
  return (dispatch: AppDispatch) => {
    if (!FILTER_SNACKBAR_MAP[key]) {
      console.warn(`Invalid key: ${key} updateSnackBar actions`);
      return;
    } else {
      dispatch(snackBarActions.updateSnackBarContent({ key }));
      dispatch(snackBarActions.showSnackBarTrue({ showSnackBar: true }));
    }
  };
};

export const toggleSnackBarFalse = () => {
  return (dispatch: AppDispatch) => {
    dispatch(snackBarActions.showSnackBarFalse({ showSnackBar: false }));
  };
};
