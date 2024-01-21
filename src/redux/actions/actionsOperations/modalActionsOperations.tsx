import { AppDispatch } from "../../../types/types";
import { modalActions } from "../modalActions";

export const toggleModalVisibleTrue = (modalContentKey: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(
      modalActions.showModal({
        modalVisible: true,
        modalContentKey: modalContentKey,
      })
    );
  };
};

export const toggleModalVisibleFalse = () => {
  return (dispatch: AppDispatch) => {
    dispatch(modalActions.hideModal({ modalVisible: false }));
  };
};
