import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import MainSystem from './pages/MainSystem';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/signIn" exact component={SignIn} />
      <Route path="/signUp" exact component={SignUp} />

      <Route path="/product/detail" exact component={ProductDetail} />
      <Route path="/product" exact component={MainSystem} />
      <Route path="/product/create" exact component={Product} />
      <Route path="/product/update" exact component={Product} />
    </Switch>
  );
}

/*
  #0e0125
  #260c39
  #2f167f
*/
