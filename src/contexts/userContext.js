import React, { useContext, useEffect, useState } from 'react';

import { getUsers } from '../api';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(undefined);
  const [currentUser, setUser] = useState(undefined);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, users, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
