import React, { useState } from 'react';

import { useUser } from '../contexts/userContext';

function TodoForm({ addTodo }) {
  const { currentUser } = useUser();
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className='add'>
      <input
        type='text'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=' Enter your task'
        disabled={!currentUser.isAdmin}
      />
      <button disabled={!value || !currentUser.isAdmin}>Submit</button>
    </form>
  );
}

export default TodoForm;
