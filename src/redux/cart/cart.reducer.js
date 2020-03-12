import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';


const INIT_STATE = {
  cartItems: [],
  cartHidden:true
};

const cartReducer = (state = INIT_STATE,action) => {
  switch(action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cartHidden:!state.cartHidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems,action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems,action.payload)
      }
    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems:state.cartItems.filter(item => item.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default cartReducer;
