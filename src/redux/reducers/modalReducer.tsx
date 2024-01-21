import { TModalActions, TModalRootState } from "../../types/types";
import {
  HIDE_MODAL,
  SHOW_MODAL,
} from "../actions/actionTypes/modalActionTypes";

const initialState: Partial<TModalRootState> = {
  modalVisible: false,
  modalContentKey: "",
};

const modalReducer = (state = initialState, action: TModalActions) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalVisible: action.payload.modalVisible,
        modalContentKey: action.payload.modalContentKey,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modalVisible: action.payload.modalVisible,
      };

    default:
      return state;
  }
};

export default modalReducer;
