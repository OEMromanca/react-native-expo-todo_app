import { ITodo } from "../../types/types";
import {
  GET_ALL_TODOS_FAILURE,
  GET_ALL_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILURE,
  GET_TODO_BY_ID_SUCCESS,
  GET_TODO_BY_ID_FAILURE,
  UPDATE_COMPLETED_TODO_SUCCESS,
  UPDATE_COMPLETED_TODO_FAILURE,
  UPDATE_TODO_FIELD_SUCCESS,
  UPDATE_TODO_FIELD_FAILURE,
} from "./actionTypes/todoActionTypes";

export const todoActions = {
  fetchAllTodosSuccess: (payload: {
    todosData: ITodo[];
    message: { key: string; message: string };
  }) => ({ type: GET_ALL_TODOS_SUCCESS, payload } as const),
  fetchAllTodosFailure: (payload: {
    error: unknown;
    message: {
      key: string;
      message: string;
    };
  }) => ({ type: GET_ALL_TODOS_FAILURE, payload } as const),
  addTodoSuccess: (payload: {
    todoData: ITodo;
    message: { key: string; message: string };
  }) => ({ type: ADD_TODO_SUCCESS, payload } as const),
  addTodoFailure: (payload: {
    error: unknown;
    message: {
      key: string;
      message: string;
    };
  }) => ({ type: ADD_TODO_FAILURE, payload } as const),
  removeTodoSuccess: (payload: {
    todoId: string;
    message: { key: string; message: string };
  }) => ({ type: REMOVE_TODO_SUCCESS, payload } as const),
  removeTodoFailure: (payload: {
    error: unknown;
    message: {
      key: string;
      message: string;
    };
  }) => ({ type: REMOVE_TODO_FAILURE, payload } as const),
  getTodoByIdSuccess: (payload: {
    id: string;
    message: { key: string; message: string };
  }) => ({ type: GET_TODO_BY_ID_SUCCESS, payload } as const),
  getTodoByIdFailure: (payload: {
    error: unknown;
    message: {
      key: string;
      message: string;
    };
  }) => ({ type: GET_TODO_BY_ID_FAILURE, payload } as const),
  updateCompletedTodoSuccess: (payload: {
    todo: ITodo;
    message: { key: string; message: string };
  }) => ({ type: UPDATE_COMPLETED_TODO_SUCCESS, payload } as const),

  updateCompletedTodoFailure: (payload: {
    error: unknown;
    message: {
      key: string;
      message: string;
    };
  }) => ({ type: UPDATE_COMPLETED_TODO_FAILURE, payload } as const),

  updateTodoFieldSuccess: (payload: {
    field: string;
    value: string;
    message: { key: string; message: string };
  }) => ({ type: UPDATE_TODO_FIELD_SUCCESS, payload } as const),

  updateTodoFieldFailure: (payload: {
    error: unknown;
    message: { key: string; message: string };
  }) => ({ type: UPDATE_TODO_FIELD_FAILURE, payload } as const),
};
