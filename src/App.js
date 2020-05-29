import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotronConfig';
import Routes from './ZRotas';

import history from './services/history';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
          </Router>
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
