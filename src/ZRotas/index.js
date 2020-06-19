import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';
import MainSystem from '../pages/MainSystem';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';
import Acquisitions from '../pages/Acquisitions';
import AcquisitionsEdit from '../pages/AcquisitionsEdit';
import Employee from '../pages/Employee';
import EmployeeEdit from '../pages/EmployeeEdit';
import EmployeeCreate from '../pages/EmployeeCreate';
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';
import PaymentFinish from '../pages/PaymentFinish';
import Stockist from '../pages/Stockist';

import Profile from '../pages/Site/AccountProfile/Profile';
import Orders from '../pages/Site/AccountProfile/Orders';
import OrderDatail from '../pages/Site/AccountProfile/OrderDatail';
import Addresses from '../pages/Site/AccountProfile/Addresses/List';
import AddressesForm from '../pages/Site/AccountProfile/Addresses/Form';
import Cards from '../pages/Site/AccountProfile/Cards/List';
import CardsForm from '../pages/Site/AccountProfile/Cards/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/signIn" exact component={SignIn} />
      <Route path="/signUp" exact component={SignUp} />
      <Route path="/product/:id/detail" exact component={ProductDetail} />
      <Route path="/cart" exact component={Cart} />

      <Route path="/profile" exact isPrivate component={Profile} />
      <Route path="/profile/orders" exact isPrivate component={Orders} />
      <Route path="/profile/addresses" exact isPrivate component={Addresses} />
      <Route
        path="/profile/addresses/form/:id"
        exact
        isPrivate
        component={AddressesForm}
      />
      <Route
        path="/profile/addresses/form"
        exact
        isPrivate
        component={AddressesForm}
      />
      <Route path="/profile/cards" exact isPrivate component={Cards} />
      <Route
        path="/profile/cards/form/:id"
        exact
        isPrivate
        component={CardsForm}
      />
      <Route path="/profile/cards/form" exact isPrivate component={CardsForm} />

      <Route path="/payment" exact component={Payment} isPrivate />
      <Route path="/payment/finish" exact component={PaymentFinish} isPrivate />

      <Route
        path="/orders/:id/detail"
        exact
        component={OrderDatail}
        isPrivate
      />

      {/* Rotas de Funcionario logado e ativo */}

      <Route path="/system" exact component={MainSystem} isProvider />

      <Route path="/product/create" exact component={Product} isProvider />
      <Route path="/product/:id/update" exact component={Product} isProvider />
      <Route path="/acquisitions" exact component={Acquisitions} isProvider />
      <Route
        path="/acquisitions/:id"
        exact
        component={AcquisitionsEdit}
        isProvider
      />

      <Route path="/stockist" exact component={Stockist} isProvider />

      {/* Rotas de Administrador */}

      <Route path="/employee" exact component={Employee} isProvider isAdm />
      <Route
        path="/employee/create"
        exact
        component={EmployeeCreate}
        isProvider
        isAdm
      />
      <Route
        path="/employee/:id/edit"
        exact
        component={EmployeeEdit}
        isProvider
        isAdm
      />
    </Switch>
  );
}
