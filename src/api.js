import { TODOS_ENDPOINT, USERS_ENDPOINT, THEME_ENDPOINT } from './constants';
import { get, post, put, remove } from './utils';

export const getTodos = async () => {
  return await get(TODOS_ENDPOINT);
};

export const createTodo = async (todo) => {
  return await post(TODOS_ENDPOINT, todo);
};

export const updateTodo = async (id, fields) => {
  return await put(`${TODOS_ENDPOINT}/${id}`, fields);
};

export const deleteTodo = async (id) => {
  return await remove(`${TODOS_ENDPOINT}/${id}`);
};

export const getUsers = async () => {
  return await get(USERS_ENDPOINT);
};

export const getTheme = async () => {
  return await get(THEME_ENDPOINT);
};
