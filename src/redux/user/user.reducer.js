import UserActionTypes from './user.types';

const INIT_STATE = {
  currentUser:null
};

export default (state=INIT_STATE,action) => {
  switch(action.type){
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser:action.payload
      };
    default:
      return state;
  }
}