import React from 'react';

import { useTheme } from '../contexts/themeContext';
import { useUser } from '../contexts/userContext';

const Header = () => {
  const { headerText, logoHref } = useTheme();
  const { currentUser, users, setUser } = useUser();

  return (
    <header>
      <img className='logo' src={logoHref} />
      <div className='text'>{headerText}</div>
      <div className='user'>
        {currentUser && (
          <div>
            <span>User {currentUser.id}</span>
            <button onClick={() => setUser(undefined)}>Log out</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
