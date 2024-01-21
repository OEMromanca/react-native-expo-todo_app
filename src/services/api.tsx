import axios from "axios";
import { ITodo } from "../types/types";

const apiURL = "https://6532520fd80bd20280f5552c.mockapi.io/api/todos";

export const getPaginatedTodosAPI = async (page: number, limit: number) => {
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("limit", String(limit));

  return await axios.get(`${apiURL}?${params.toString()}`);
};

export const getPaginatedActiveTodosAPI = async (
  page: number,
  limit: number
) => {
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("limit", String(limit));
  params.append("completed", "false");

  return await axios.get(`${apiURL}?${params.toString()}`);
};

export const getPaginatedCompletedTodosAPI = async (
  page: number,
  limit: number
) => {
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("limit", String(limit));
  params.append("completed", "true");

  return await axios.get(`${apiURL}?${params.toString()}`);
};

export const getAllTodosAPI = async () => {
  return await axios.get(`${apiURL}`);
};

export const addTodoAPI = async (todo: Omit<ITodo, "id">) => {
  return await axios.post(`${apiURL}`, todo);
};

export const updateTodoAPI = async (todo: ITodo) => {
  return await axios.put(`${apiURL}/${todo.id}`, todo);
};

export const getTodoByIdAPI = async (id: string) => {
  return await axios.get(`${apiURL}/${id}`);
};

export const toggleCompletedTodoAPI = async (todo: ITodo) => {
  const todoUpdate: Pick<ITodo, "completed"> = {
    completed: !todo.completed,
  };
  return await axios.put(`${apiURL}/${todo.id}`, todoUpdate);
};

export const deleteTodoAPI = async (id: string) => {
  return await axios.delete(`${apiURL}/${id}`);
};
