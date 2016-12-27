import React, { Component } from 'react';
import { browserHistory } from 'react-router';


export class OperatorSignIn extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      username: '',
      password: '',
      error: '',
    };
    this.signInOperator = this.signInOperator.bind( this );
    this.changeUsername = this.changeUsername.bind( this );
    this.changePassword = this.changePassword.bind( this );
  }

  changeUsername( e ) {
    this.setState({
      username: e.target.value
    });
  }

  changePassword( e ) {
    this.setState({
      password: e.target.value
    });
  }

  signInOperator() {
    fetch('/api/auth/api_token_auth/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(
      response => response.json()
    ).then(
      jsonedResponse => {
        if ( jsonedResponse.non_field_errors ) {
          this.setState({
            error: jsonedResponse.non_field_errors[0],
          });
        } else {
          localStorage.setItem('token', jsonedResponse.token)
          this.setState({error: ''});
          browserHistory.push('/operator');
        }
      },
      (e) => {
        console.log(e)
      }
    )
  }

  render() {
    return(
      <div className="col-xs-6">
        <h3 className="text-center">Operator</h3>
        <form className="inner-form center-block" autoComplete='off'>
          <div className="form-group">
            <input
              type='text'
              id='cc2'
              placeholder='Enter your username(AKA email)'
              onChange={ this.changeUsername }
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type='password'
              id='cc3'
              placeholder='Enter your operator password'
              onChange={ this.changePassword }
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              id="sign-in"
              type="button"
              value="Sign In as an Operator"
              className="btn btn-default form-control btn-warning"
              onClick={ this.signInOperator }
            ></input>
          </div>
          {this.state.error ? <div className="error text-center">{ this.state.error }</div> : null}
        </form>
      </div>
    )
  }
}

OperatorSignIn.PropTypes = {};
