import {
  addTodoAPI,
  deleteTodoAPI,
  getAllTodosAPI,
  getTodoByIdAPI,
  toggleCompletedTodoAPI,
} from "../../../services/api";
import { AppDispatch, ITodo } from "../../../types/types";
import { todoActions } from "../todoActions";

export const fetchAllTodos = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await getAllTodosAPI();
      const todosData: ITodo[] = response.data;

      dispatch(
        todoActions.fetchAllTodosSuccess({
          todosData,
          message: { key: "fetched", message: "Todo fetched successfully...!" },
        })
      );
      console.info("Todos loaded successfully");
    } catch (error) {
      console.error("Failed to load the data", error);
      dispatch(
        todoActions.fetchAllTodosFailure({
          error,
          message: {
            key: "failedFetch",
            message: "Failed to fetch todos",
          },
        })
      );
    }
  };
};

export const addTodo = (newTodo: Omit<ITodo, "id">) => {
  return async (dispatch: AppDispatch) => {
    try {
      const todo: Omit<ITodo, "id"> = {
        title: newTodo.title,
        description: newTodo.description,
        deadline: newTodo.deadline,
        priority: newTodo.priority,
        completed: false,
      };

      const saveTodo = await addTodoAPI(todo);

      dispatch(
        todoActions.addTodoSuccess({
          todoData: saveTodo.data,
          message: { key: "add", message: "Todo added successfully...!" },
        })
      );

      const todosResponse = await getAllTodosAPI();
      const todosData: ITodo[] = todosResponse.data;
      dispatch(
        todoActions.fetchAllTodosSuccess({
          todosData,
          message: { key: "fetched", message: "Todo fetched successfully...!" },
        })
      );
      console.info("Todos added successfully:");
      return saveTodo.data;
    } catch (error) {
      console.error("Failed to add todo");
      dispatch(
        todoActions.addTodoFailure({
          error,
          message: {
            key: "failedAddTodo",
            message: "Failed to add todo",
          },
        })
      );
    }
  };
};

export const deleteTodo = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const deletedTodo = await deleteTodoAPI(id);
      dispatch(
        todoActions.removeTodoSuccess({
          todoId: id,
          message: {
            key: "delete",
            message: "Todo was deleted successfully...!",
          },
        })
      );
      console.info("Todos deleted successfully:");
      return deletedTodo;
    } catch (error) {
      const errorMessage = "Failed to delete todo.";
      dispatch(
        todoActions.removeTodoFailure({
          error,
          message: {
            key: "failedToDelete",
            message: errorMessage,
          },
        })
      );
    }
  };
};

export const getTodoById = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await getTodoByIdAPI(id);
      dispatch(
        todoActions.getTodoByIdSuccess({
          id,
          message: {
            key: "getTodoById",
            message: "Fetched todo by id successfully...!!!",
          },
        })
      );
      console.info("Fetched todo by id successfully...!!!");
      return response.data;
    } catch (error) {
      console.log(error, "get todo by id");
      if (typeof error === "string") {
        console.error(error, "Failed to get todo by id...!");
        dispatch(
          todoActions.getTodoByIdFailure({
            error,
            message: {
              key: "failedToGetById",
              message: "Failed to get todo by id...!",
            },
          })
        );
      }
    }
  };
};

export const updateCompletedTodo = (todo: ITodo) => {
  return async (dispatch: AppDispatch) => {
    try {
      const completedTodo = await toggleCompletedTodoAPI(todo);

      dispatch(
        todoActions.updateCompletedTodoSuccess({
          todo,
          message: {
            key: "completedSuccessFully",
            message: "Todo completed successfully...!!!",
          },
        })
      );
      console.info("Todo completed successfully...!!!");
      return completedTodo;
    } catch (error) {
      console.error(error, "Failed to complete todo");
      if (typeof error === "string") {
        dispatch(
          todoActions.updateCompletedTodoFailure({
            error,
            message: {
              key: "failedToComplete",
              message: "Failed to complete todo...!",
            },
          })
        );
      }
    }
  };
};

export const updateTodoField = (field: string, value: string) => {
  return (dispatch: AppDispatch) => {
    try {
      dispatch(
        todoActions.updateTodoFieldSuccess({
          field,
          value,
          message: {
            key: "updateField",
            message: "Todo field updated successfully",
          },
        })
      );
    } catch (error) {
      dispatch(
        todoActions.updateTodoFieldFailure({
          error,
          message: {
            key: "updateFieldFailed",
            message: "Failed to update todo field",
          },
        })
      );
    }
  };
};

export const clearSubmitform = () => {
  return (dispatch: AppDispatch) => {
    dispatch(todoActions.clearForm());
  };
};
