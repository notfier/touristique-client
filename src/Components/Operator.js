import React, { Component } from 'react';


export class Operator extends Component {

  constructor( props ) {
    super( props );
    console.log('INIT')
  }

  signOut() {
    localStorage.removeItem('token');
    window.location.replace('/');  // end of session
  }

  render() {
    console.log('RAZ')
    return(
      <div>
        Operator!!!
        <a href='javascript:void(0)' onClick={ this.signOut }>Sign Out</a>
      </div>
    )
  }

};

Operator.PropTypes = {};
