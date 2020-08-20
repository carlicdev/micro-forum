import './assets/main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ForumContextProvider from './context/posts-context';
import SessionContextProvider from './context/session-context';

ReactDOM.render(
  <SessionContextProvider>
    <ForumContextProvider>
      <Router>
        <App />
      </Router>
    </ForumContextProvider>
  </SessionContextProvider>,
  document.getElementById('root')
);

