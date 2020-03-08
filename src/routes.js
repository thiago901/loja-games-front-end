import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signIn" exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

/*
  #0e0125
  #260c39
  #2f167f
*/
