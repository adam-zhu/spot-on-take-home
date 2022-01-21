import React from 'react';

import { useUser } from '../contexts/userContext';

function Todo({ todo, toggleIsComplete, toggleIsUrgent, removeTodo }) {
  const { currentUser } = useUser();
  const onToggleIsUrgent = () => {
    if (currentUser.isAdmin) {
      return toggleIsUrgent(todo.id);
    }

    // alert('user is not admin');
  };
  const onToggleIsComplete = () => {
    if (currentUser.isAdmin) {
      return toggleIsComplete(todo.id);
    }

    // alert('user is not admin');
  };
  const onRemove = () => {
    if (currentUser.isAdmin) {
      return removeTodo(todo.id);
    }

    // alert('user is not admin');
  };

  return (
    <div
      className='todo'
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      <span className='text'>{todo.text}</span>
      <div>
        <button
          onClick={onToggleIsUrgent}
          disabled={!currentUser.isAdmin}
          title={currentUser.isAdmin ? 'toggle urgency' : 'must be admin'}
        >
          {todo.isUrgent ? 'Urgent' : 'Not urgent'}
        </button>
        <button
          onClick={onToggleIsComplete}
          disabled={!currentUser.isAdmin}
          title={currentUser.isAdmin ? 'toggle completion' : 'must be admin'}
        >
          {todo.isCompleted ? 'Not done' : 'Done'}
        </button>
        <button
          onClick={onRemove}
          disabled={!currentUser.isAdmin}
          title={currentUser.isAdmin ? 'remove' : 'must be admin'}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Todo;
