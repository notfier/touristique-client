import { CREATE_TOURIST_CARD } from '../constants/ActionTypes';
import { requestGetErrorDuringSaving } from './getErrorDuringSaving';


function requestCreateTouristCard() {
  return {
    type: CREATE_TOURIST_CARD
  }
};

export function createTouristCard( token, data ) {
  return dispatch => {
    return fetch( '/api/tourists/tourist_card_info/', {
      method: 'POST',
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
        if ( response.status === 400 ) {
          return dispatch( requestGetErrorDuringSaving( response.data ) );
        } else if ( response.status === 201 ) {
          let text = `Tourist card of ${ response.data.tourist.first_name } `+
                     `${ response.data.tourist.last_name } with id `+
                     `${ response.data.card_id } was created successfully!`;
          alert( text );
          return dispatch( requestCreateTouristCard() );
        } else {
          alert( 'Oops! There was an error during update. Contact administrator' );
        }
      }
    )
  }
};
