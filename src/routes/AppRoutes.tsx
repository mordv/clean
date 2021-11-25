import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Page } from '../pages/Page';

const integerConstraint = `(\\d+)`;

export const AppRoutes: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path={`/:pageId${integerConstraint}`}>
        <Page />
      </Route>
      <Route path={`/`}>
        <HomePage />
      </Route>
      <Route>
        <Redirect to={`/`} />
      </Route>
    </Switch>
  </HashRouter>
);
