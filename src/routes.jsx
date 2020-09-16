import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;