import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  shop:shopReducer,
  directory:directoryReducer,
  cart:cartReducer,
  user:userReducer
});

export default rootReducer;