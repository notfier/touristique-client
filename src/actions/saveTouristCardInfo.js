import {
  SAVE_TOURIST_CARD_INFO_SUCCESSFULLY, GET_ERROR_DURING_UPDATE
} from '../constants/ActionTypes';


function requestGetErrorDuringSaving( errors ) {
  return {
    type: GET_ERROR_DURING_UPDATE,
    errors: errors
  }
};

function requestSaveTouristCardInfo() {
  return {
    type: SAVE_TOURIST_CARD_INFO_SUCCESSFULLY
  }
};

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
      response => response.json().then( data => ({
        status: response.status,
        data: data
      }))
    ).then(
      response => {
        console.log('JSON', response)
        if ( response.status === 400 ) {
          return dispatch( requestGetErrorDuringSaving( response.data ) );
        } else if ( response.status === 200 ) {
          return dispatch( requestSaveTouristCardInfo() );
        } else {
          alert( 'Oops! There was an error during update. Contact administrator' );
        }
      }
    )
  }
};
