import { AppDispatch, TSnackbarKey } from "../../../types/types";
import { snackBarActions } from "../snackBarActions";

export const updateSnackBar = (key: TSnackbarKey) => {
  return (dispatch: AppDispatch) => {
    dispatch(snackBarActions.updateSnackBarContent({ key }));
    dispatch(snackBarActions.showSnackBarTrue({ showSnackBar: true }));
  };
};

export const toggleSnackBarFalse = () => {
  return (dispatch: AppDispatch) => {
    dispatch(snackBarActions.showSnackBarFalse({ showSnackBar: false }));
  };
};
