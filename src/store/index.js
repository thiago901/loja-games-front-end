import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducers from './module/rootReducer';
import rootSagas from './module/rootSaga';

import persistReducers from './persistReducers';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleware = [sagaMiddleware];

const store = createStore(persistReducers(rootReducers), middleware);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);
export { store, persistor };
