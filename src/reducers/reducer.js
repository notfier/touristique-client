import * as types from '../constants/ActionTypes';

const initialState = {
  isTouristCardCreation: false,
  isTouristCardDataChange: false
};

const rootReducer = function( state=initialState, action ) {
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
        touristCardData: action.touristCardData,
        isTouristCardDataChange: true,
        isTouristCardCreation: false,
        errors: null
      });
    case types.TURN_ON_TOURIST_CARD_CREATION:
      return Object.assign({}, state, {
        touristCardData: null,
        isTouristCardCreation: true,
        errors: null,
      })
    case types.RESET_TOURIST_CARD_DATA:
      return Object.assign({}, state, {
        touristCardData: null,
        isSavedSuccessfully: false,
        isTouristCardCreation: false,
        isTouristCardDataChange: false
      });
    case types.CREATE_TOURIST_CARD:
      return Object.assign({}, state, {
        isTouristCardCreation: false,
        isTouristCardDataChange: false,
        touristCardData: null
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
