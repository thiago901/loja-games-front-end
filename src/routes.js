import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import MainSystem from './pages/MainSystem';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Acquisitions from './pages/Acquisitions';
import AcquisitionsEdit from './pages/AcquisitionsEdit';
import Employee from './pages/Employee';
import EmployeeEdit from './pages/EmployeeEdit';
import EmployeeCreate from './pages/EmployeeCreate';
import Cart from './pages/Cart';

import { store } from './store';

export default function Routes() {
  const { user } = store.getState();
  const { signed } = store.getState().auth;

  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/signIn" exact component={SignIn} />
      <Route path="/signUp" exact component={SignUp} />

      <Route path="/product/:id/detail" exact component={ProductDetail} />

      <Route path="/cart" exact component={Cart} />

      {signed && user.profile.provider && user.profile.active ? (
        <>
          <Route path="/system" exact component={MainSystem} />

          <Route path="/product/create" exact component={Product} />
          <Route path="/product/:id/update" exact component={Product} />
          <Route path="/acquisitions" exact component={Acquisitions} />
          <Route path="/acquisitions/:id" exact component={AcquisitionsEdit} />

          {user.profile.paperUser.title === 'Administrador' ? (
            <>
              <Route path="/employee" exact component={Employee} />
              <Route path="/employee/create" exact component={EmployeeCreate} />
              <Route path="/employee/:id/edit" exact component={EmployeeEdit} />
            </>
          ) : null}
        </>
      ) : null}
    </Switch>
  );
}
