/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/index';
import NotFound from './pages/404/index';
import Projects from './pages/projects/index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact="true" component={Home} />
      <Route path="/projects" exact="true" component={Projects} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
