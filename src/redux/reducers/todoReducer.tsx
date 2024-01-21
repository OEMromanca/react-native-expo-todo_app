import { TTodoActions, TTodoRootState } from "../../types/types";
import {
  ADD_TODO_FAILURE,
  ADD_TODO_SUCCESS,
  GET_ALL_TODOS_FAILURE,
  GET_ALL_TODOS_SUCCESS,
  GET_TODO_BY_ID_SUCCESS,
  REMOVE_TODO_FAILURE,
  REMOVE_TODO_SUCCESS,
  UPDATE_COMPLETED_TODO_SUCCESS,
  UPDATE_TODO_FIELD_FAILURE,
  UPDATE_TODO_FIELD_SUCCESS,
} from "../actions/actionTypes/todoActionTypes";

const initialState: Partial<TTodoRootState> = {
  todo: {
    id: "",
    title: "",
    description: "",
    deadline: new Date(),
    priority: "",
    completed: false,
  },
  todos: [],
  error: "",
  loading: true,
  message: { key: "", message: "" },
};

const todoReducer = (state = initialState, action: TTodoActions) => {
  switch (action.type) {
    case GET_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload.todosData,
        loading: false,
        message: action.payload.message,
      };
    case GET_ALL_TODOS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: true,
        message: action.payload.message,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos ? [...state.todos, action.payload.todoData] : [],
        loading: false,
        error: null,
        message: action.payload.message,
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        message: action.payload.message,
      };
    case UPDATE_TODO_FIELD_SUCCESS:
      return {
        ...state,
        todo: {
          ...state.todo,
          [action.payload.field]: action.payload.value,
        },
        message: action.payload.message,
      };
    case UPDATE_TODO_FIELD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
      };
    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        todos:
          state.todos &&
          state.todos.filter((todo) => todo.id !== action.payload.todoId),
        loading: false,
        error: null,
        message: action.payload.message,
      };
    case REMOVE_TODO_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        message: action.payload.message,
      };
    case GET_TODO_BY_ID_SUCCESS:
      const updatedTodo =
        state.todos &&
        state.todos.find((todo) => todo.id === action.payload.id);
      return {
        ...state,
        todo: { ...state.todo, ...updatedTodo },
        message: action.payload.message,
      };

    case UPDATE_COMPLETED_TODO_SUCCESS:
      return {
        ...state,
        todos:
          state.todos &&
          state.todos.map((todo) =>
            todo.id === action.payload.todo.id
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        loading: false,
        message: action.payload.message,
      };

    default:
      return state;
  }
};

export default todoReducer;
