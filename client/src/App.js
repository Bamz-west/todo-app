import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import ItemsBody from './components/ItemsBody';
import SingleItem from './components/SingleItem';
import CreateTodo from './components/CreateTodo';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/new" component={CreateTodo} />
            <Route path="/:id" component={SingleItem} />
            <Route path="/" exact component={ItemsBody} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
