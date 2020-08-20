import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Category from './components/Category';
import ThreadDetails from './components/ThreadDetails';
import Navbar from './components/Navigation/Navbar';
import SigninForm from './components/Users/SigninForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/forum' component={Category} />
        <Route path='/forum/:slug' component={ThreadDetails} />
        <Route path='/signin' component={SigninForm} />
      </Switch>
    </div>
  );
}

export default App;
