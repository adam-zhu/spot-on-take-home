import React from 'react';

import { TodosProvider } from './contexts/todosContext';
import { ThemeProvider } from './contexts/themeContext';
import { UserProvider } from './contexts/userContext';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <TodosProvider>
          <Header />
          <Main />
          <Footer />
        </TodosProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
