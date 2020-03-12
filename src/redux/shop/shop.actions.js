import ShopActionTypes from './shop.types';

import { db } from '../../firebase/firebase.utils';

const dataFetchStart = () => ({
  type:ShopActionTypes.DATA_FETCH_START
});

const dataFetchSuccess = categories => {
  return {
    type:ShopActionTypes.DATA_FETCH_SUCCESS,
    payload:categories
  };
}

const dataFetchFailure = error => ({
  type:ShopActionTypes.DATA_FETCH_FAILURE,
  payload:error.message
});

export const dataFectchStartAsync = () => async dispatch => {
    dispatch(dataFetchStart());
    try { 
      const snapshot = await db.collection("categories").get();
      const categories = snapshot.docs.reduce((accumulated,doc) => ({...accumulated,[doc.data().title.toLowerCase()]:doc.data()}),{});
      dispatch(dataFetchSuccess(categories));
    } catch(err){
      dispatch(dataFetchFailure(err.message));
    }
}