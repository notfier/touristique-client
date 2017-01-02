import * as types from '../constants/ActionTypes';


const rootReducer = function( state={}, action ) {
  switch( action.type ) {
    case types.FIND_TOURIST:
      return Object.assign({}, state, {
        touristCardData: action.touristCardData
      });
    case types.SET_INITIAL_DEPARTMENTS:
      return Object.assign({}, state, {
        departments: action.departments
      });
    default:
      return state;
  }
}

export default rootReducer;
