import { CHANGE_INTERNALLY_TOURIST_INFO } from '../constants/ActionTypes';


export function changeInternallyTouristInfo( touristInfo, fieldName, fieldValue ) {
  var objWithNewProp = {};
  objWithNewProp[ fieldName ] = fieldValue;
  let newTouristInfo = Object.assign( touristInfo, objWithNewProp );
  return {
    type: CHANGE_INTERNALLY_TOURIST_INFO,
    newTouristInfo: newTouristInfo
  };
};
