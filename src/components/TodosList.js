import React, { useState } from 'react';

import { byUrgencyDesc, byUrgencyAsc } from '../utils';

import { useTodos } from '../contexts/todosContext';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodosList = () => {
  const {
    todos,
    add: addTodo,
    remove: removeTodo,
    toggleIsComplete,
    toggleIsUrgent,
  } = useTodos();
  const [todosSort, setTodosSort] = useState(undefined); // [undefined, "asc", "desc"]

  const sortTodosByUrgency = () => {
    switch (todosSort) {
      case undefined:
        return setTodosSort('desc');
      case 'desc':
        return setTodosSort('asc');
      default:
        return setTodosSort(undefined);
    }
  };
  const getSortedTodos = () => {
    switch (todosSort) {
      case 'desc':
        return [...todos].sort(byUrgencyDesc);
      case 'asc':
        return [...todos].sort(byUrgencyAsc);
      default:
        return todos;
    }
  };

  return (
    <div className='todo-list'>
      <h1 className='title'>Create a Todo with React Hooks</h1>
      {todos ? (
        <>
          <button onClick={sortTodosByUrgency}>Sort by urgency</button>
          {getSortedTodos().map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleIsComplete={toggleIsComplete}
              toggleIsUrgent={toggleIsUrgent}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </>
      ) : (
        <progress />
      )}
    </div>
  );
};

export default TodosList;
