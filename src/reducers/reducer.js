import * as types from '../constants/ActionTypes';


const rootReducer = function( state={}, action ) {
  switch( action.type ) {
    case types.CHANGE_INTERNALLY_TOURIST_INFO:
      const touristCardData = Object.assign(
        { tourist: action.newTouristInfo },
        state.touristCardData
      );
      return Object.assign({}, state, {
        touristCardData: touristCardData
      });
    case types.FIND_TOURIST:
      return Object.assign({}, state, {
        touristCardData: action.touristCardData
      });
    case types.RESET_TOURIST_CARD_DATA:
      return Object.assign({}, state, {
        touristCardData: null,
        isSavedSuccessfully: false
      });
    case types.GET_ERROR_DURING_UPDATE:
      return Object.assign({}, state, {
        errors: action.errors,
        isSavedSuccessfully: false
      })
    case types.SAVE_TOURIST_CARD_INFO_SUCCESSFULLY:
      return Object.assign({}, state, {
        errors: null,
        isSavedSuccessfully: true
      })
    case types.SET_INITIAL_DEPARTMENTS:
      return Object.assign({}, state, {
        departments: action.departments
      });
    default:
      return state;
  }
}

export default rootReducer;
