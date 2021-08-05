import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AuthContextProvider from './contexts/authContext';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <ThemeContextProvider>
          <TodoListContextProvider>
            <AuthContextProvider>
              <Navbar></Navbar>
              <TodoList></TodoList>
            </AuthContextProvider>
          </TodoListContextProvider>
        </ThemeContextProvider>

      </div>
    </div>
  );
}

export default App;
