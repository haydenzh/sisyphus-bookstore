import ShopActionTypes from './shop.types';

const INIT_STATE = {
  isLoading:false,
  categories:{},
  errorMessage:''
};

const shopReducer = (state = INIT_STATE,action) => {
  switch(action.type){
    case ShopActionTypes.DATA_FETCH_START:
      return {
        ...state,
        isLoading:true
      };
    case ShopActionTypes.DATA_FETCH_SUCCESS:
      return {
        ...state,
        isLoading:false,
        categories:action.payload,
        errorMessage:''
      };
    case ShopActionTypes.DATA_FETCH_FAILURE:
      return {
        ...state,
        isLoading:false,
        categories:{},
        errorMessage:action.payload
      };
    default:
      return state;
  }
}

export default shopReducer;