import DeleteTodoModalContent from "../components/modal/DeleteTodoModalContent";
import {
  ITodo,
  TFilterKey,
  TFilterMethod,
  TSnackbarItem,
  TSnackbarKey,
  TUniversalMap,
} from "../types/types";

//TODO learn how to handle this in TS
export const COMPONENT_MAP = {
  keyA: DeleteTodoModalContent,
};

export const FILTER_MAP: TUniversalMap<TFilterKey, TFilterMethod> = {
  All: () => true,
  Active: (todo: ITodo) => !todo.completed,
  Completed: (todo: ITodo) => todo.completed,
};

export const FILTER_NAMES = Object.keys(FILTER_MAP) as TFilterKey[];

export const FILTER_SNACKBAR_MAP: TUniversalMap<TSnackbarKey, TSnackbarItem> = {
  add: {
    message: "Todo added successfully",
    backGroundColor: "green",
  },
  delete: {
    message: "Todo deleted successfully",
    backGroundColor: "red",
  },
};

export const IconNamesMap = {
  chevronLeft: "left",
  chevronDown: "down",
  three_dots: "ellipsis1",
  plus: "plus",
  close: "close",
  calendar: "calendar",
  check: "check",
} as const;

 
