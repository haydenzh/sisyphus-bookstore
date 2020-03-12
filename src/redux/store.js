import { createStore,applyMiddleware } from 'redux';

import rootReducer from '../redux/rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key:'root',
  storage,
  whitelist:['cart']
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

let middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
}

const store = createStore(persistedReducer,applyMiddleware(...middlewares));
const persistor = persistStore(store);
export { store,persistor };