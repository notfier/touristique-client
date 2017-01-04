import { GET_ERROR_DURING_UPDATE } from '../constants/ActionTypes';


export function requestGetErrorDuringSaving( errors ) {
  return {
    type: GET_ERROR_DURING_UPDATE,
    errors: errors
  }
};
