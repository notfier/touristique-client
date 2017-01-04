import { SET_INITIAL_DEPARTMENTS } from '../constants/ActionTypes';


function requestSetInitialDepartments( deps ) {
  return {
    type: SET_INITIAL_DEPARTMENTS,
    departments: deps
  }
}

export function getDepartments( token ) {
  return ( dispatch ) => {
    return fetch( '/api/data/departments/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${ token }`
      },
      credentials: 'same-origin'
    }).then(
      response => response.json()
    ).then(
      jsonedResponse => dispatch( requestSetInitialDepartments( jsonedResponse ) )
    )
  };
}
