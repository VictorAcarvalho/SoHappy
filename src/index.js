/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/index';
import NotFound from './pages/404/index';
import Projects from './pages/projects/index';
<<<<<<< HEAD
import Institution from './pages/institution/index';
=======
>>>>>>> d90a8c5f85b6dbf2da54c7f3b3e4c466fd4568d3

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact="true" component={Home} />
<<<<<<< HEAD
      <Route path="/search" exact="true" component={Projects} />
      <Route path="/projects" exact="true" component={Institution} />
=======
      <Route path="/projects" exact="true" component={Projects} />
>>>>>>> d90a8c5f85b6dbf2da54c7f3b3e4c466fd4568d3
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
