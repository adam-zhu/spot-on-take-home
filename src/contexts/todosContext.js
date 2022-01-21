import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { getTodos, createTodo, updateTodo, deleteTodo } from '../api';

const TodosContext = React.createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(undefined);

  const add = async (text) => {
    const newTodo = { id: uuidv4(), text, isCompleted: false, isUrgent: false };

    await createTodo(newTodo);

    const updatedTodos = await getTodos();

    setTodos(updatedTodos);
  };

  const remove = async (id) => {
    await deleteTodo(id);

    const updatedTodos = await getTodos();

    setTodos(updatedTodos);
  };

  const toggleIsComplete = async (id) => {
    const todo = todos.find((todo) => todo.id === id);

    await updateTodo(id, { ...todo, isCompleted: !todo.isCompleted });

    const updatedTodos = await getTodos();

    setTodos(updatedTodos);
  };

  const toggleIsUrgent = async (id) => {
    const todo = todos.find((todo) => todo.id === id);

    await updateTodo(id, { ...todo, isUrgent: !todo.isUrgent });

    const updatedTodos = await getTodos();

    setTodos(updatedTodos);
  };

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <TodosContext.Provider
      value={{ todos, add, remove, toggleIsComplete, toggleIsUrgent }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);

  if (context === undefined) {
    throw new Error('useTodo must be used within a TodosProvider');
  }

  return context;
};
