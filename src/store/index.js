import { createStore } from 'redux';

import rootReducers from './module/rootReducer';

const store = createStore(rootReducers);

export default store;
