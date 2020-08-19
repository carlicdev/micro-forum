import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Category from './components/Category';
import ThreadDetails from './components/ThreadDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Category} />
        <Route path='/:slug' component={ThreadDetails} />
      </Switch>
    </div>
  );
}

export default App;
