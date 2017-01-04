import { SAVE_TOURIST_CARD_INFO } from '../constants/ActionTypes';

function requestSaveTouristCardInfo() {};

export function saveTouristCardInfo( token, data ) {
  return ( dispatch ) => {
    return fetch( '/api/tourists/tourist_card_info/', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${ token }`
      },
      credentials: 'same-origin',
      body: JSON.stringify( data )
    }).then(
      response => response.json()
    ).then(
      jsonedResponse => {
        console.log(jsonedResponse);
      }
    )
  }
};
