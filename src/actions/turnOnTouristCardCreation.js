import { TURN_ON_TOURIST_CARD_CREATION } from '../constants/ActionTypes';


// switch bool value either create a new tourist card or not.
export function turnOnTouristCardCreation() {
  return {
    type: TURN_ON_TOURIST_CARD_CREATION
  }
};
