import { FIND_TOURIST } from '../constants/ActionTypes';


function requestFindTourist( touristCardData ) {
  return {
    type: FIND_TOURIST,
    touristCardData: touristCardData
  }
};

export function findTourist( token, touristCardPk ) {
  return ( dispatch ) => {
    var url =  '/api/tourists/tourist_card_info/';
    let paramedUrl = url.concat(`?tourist_card_pk=${ touristCardPk }`);
    return fetch( paramedUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${ token }`
      },
      credentials: 'same-origin'
    } ).then(
      response => response.json()
    ).then(
      jsonedResponse => dispatch( requestFindTourist( jsonedResponse ) )
    );
  }
};
