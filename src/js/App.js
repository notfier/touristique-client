import React, { Component } from 'react';


export class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      isAuthenticated: false
    };
  }

  componentWillMount() {
    // TODO: refactor localStorage check
    if ( localStorage.getItem( 'token' ) ) {
      this.setState({isAuthenticated: true})
    }
  }
  componentWillReceiveProps() {
    // TODO: refactor localStorage check
    if ( localStorage.getItem( 'token' ) ) {
      this.setState({isAuthenticated: true})
    }
  }

  signOut() {
    localStorage.removeItem('token');
    window.location.replace('/');  // end of session
  }

  render() {
    return(
      <div>
        <div className='container'>
          <h2 className='text-center'>Barca DepSystem</h2>
        </div>
        {this.state.isAuthenticated ?
          <div className='sign-out'>
            <a
              href='javascript:void(0)'
              onClick={ this.signOut }
              role='button'
              className='btn btn-default'
            >Sign Out</a>
          </div>
        :
          null
        }
        <div>{this.props.children}</div>
      </div>
    )
  }
}
