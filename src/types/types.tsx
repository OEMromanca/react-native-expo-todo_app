import { StyleProp, TextStyle, ViewStyle } from "react-native";
import store from "../redux/store/store";
import { todoActions } from "../redux/actions/todoActions";
import { modalActions } from "../redux/actions/modalActions";
import { snackBarActions } from "../redux/actions/snackBarActions";
import { IconNamesMap } from "../utils/filterMaps";

export type NavigationButtons = {
  to: string;
  component: React.FC;
};

//ROOTSTATES
export type TModalRootState = {
  modalReducer: {
    modalContentKey: TModalContentKey;
    modalVisible: boolean;
  };
  modalContentKey: string;
  modalVisible: boolean;
};

export type TSnackBarRootState = {
  snackBarReducer: {
    snackBarContentKey: TSnackbarKey;
    showSnackBar: boolean;
  };
  showSnackBar: false;
  snackBarContentKey: string;
};

export type TTodoRootState = {
  todoReducer: {
    todo: ITodo;
    todos: ITodo[];
    error: string | null;
    loading: boolean;
    message: { key: string; message: string };
  };
  todo: {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    priority: string;
    completed: boolean;
  };
  todos: ITodo[];
  error: string;
  loading: boolean;
  message: { key: string; message: string };
};

export type TSnackbarProps = {
  message?: string;
  actionText?: string;
  duration?: number;
  position?: "top" | "bottom";
  containerStyle?: StyleProp<ViewStyle>;
  messageStyle?: StyleProp<TextStyle>;
  textColor?: string;
  snackBarContentKey?: TSnackbarKey;
  toggleSnackBarFalse: () => void;
  isVisible: boolean;
};

export type TCustomModalProps = {
  modalVisible: boolean;
  modalContentKey: TModalContentKey;
};

export type ICustomCheckBoxProps = {
  completed: boolean;
  todo: ITodo;
  updateCompletedTodo: (todo: ITodo) => void;
};
export type ICustomDatePickerState = {
  openStartDatePicker: boolean;
};

export type ICustomDatePickerProps = {
  handleDateChange: (date: string) => void;
  initialValue: Date;
};

export type TAddTodoProps = {
  addTodo: (newTodo: Omit<ITodo, "id">) => void;
  updateTodoField: (field: string, value: string) => void;
  todo: Omit<ITodo, "id">;
  updateSnackBar: (snackBarContentKey: TSnackbarKey) => void;
  clearSubmitForm: () => void;
};

export type TAddTodoState = {
  isToggled?: boolean;
  disabled: boolean;
};

//KEYS
export type TSnackbarKey = "add" | "delete";
export type TModalContentKey = "keyA";
export type TFilterKey = "All" | "Active" | "Completed";

export type TSnackbarItem = {
  message: string;
  backGroundColor: string;
};

export type TodosProps = {
  filter: TFilterKey;
  fetchAllTodos: () => void;
  todos: ITodo[];
};

export type CustomInputProps = {
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  onChangeText: (text: string) => void;
  value: string;
  focus?: any;
  numberOfLines?: number;
  multiline?: boolean;
};

export type CustomButtonProps = {
  onPress: () => void;
  title: string;
  pressableStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
};

export type TDeleteTodoModalContentProps = {
  deleteTodo: (id: string) => void;
  toggleModalVisibleFalse: () => void;
  updateSnackBar: (snackBarContentKey: TSnackbarKey) => void;
  todo: ITodo;
};

export type TFilterMethod = (todo: ITodo) => void;

export type ITodo = {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  priority: string;
  completed: boolean;
};

export type TTodoActions = ReturnType<
  (typeof todoActions)[keyof typeof todoActions]
>;

export type TModalActions = ReturnType<
  (typeof modalActions)[keyof typeof modalActions]
>;

export type TSnackBarActions = ReturnType<
  (typeof snackBarActions)[keyof typeof snackBarActions]
>;

export type ITodoProps = {
  todo: ITodo;
};

export type ITodoStateProps = {
  isExpanded?: boolean;
};

export type AppDispatch = typeof store.dispatch;

export type TUniversalMap<K extends string, T> = Record<K, T> & {
  [key in K]: T;
};

//Icon
export type TIconProps = {
  name: IconName;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
};

export type IconName = keyof typeof IconNamesMap;
