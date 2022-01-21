import React from 'react';

import { useUser } from '../contexts/userContext';

import TodosList from './TodosList';

const Main = () => {
  return (
    <main>
      <MainContent />
    </main>
  );
};

const MainContent = () => {
  const { currentUser, users, setUser } = useUser();

  if (!users) {
    return <progress />;
  }

  if (currentUser) {
    return <TodosList />;
  }

  return (
    <>
      <h1>Choose a user to log in</h1>
      <div className='users'>
        {users.map((user) => (
          <button className='user' onClick={() => setUser(user)}>
            <span>
              User {user.id}
              {user.isAdmin && ' (admin)'}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Main;
