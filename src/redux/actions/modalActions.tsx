import { SHOW_MODAL, HIDE_MODAL } from "./actionTypes/modalActionTypes";

export const modalActions = {
  showModal: (payload: { modalVisible: boolean; modalContentKey: string }) =>
    ({ type: SHOW_MODAL, payload } as const),
  hideModal: (payload: { modalVisible: boolean }) =>
    ({ type: HIDE_MODAL, payload } as const),
};
