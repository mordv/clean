import React from 'react';
import { Redirect, Route, Router, Switch } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import { HomePage } from '@/pages/HomePage';
import { Page } from '@/pages/Page';

export const AppRoutes: React.FC = () => (
  <Router hook={useHashLocation as any}>
    <Switch>
      <Route path="/:id">{(a) => <Page pageId={a.id} />}</Route>
      <Route path="/nested" nest>
        <Route path="/router">
          <HomePage />
        </Route>
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
      <Route>
        <Redirect to={'/'} />
      </Route>
    </Switch>
  </Router>
);
