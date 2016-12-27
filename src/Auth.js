import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import { OperatorSignIn } from './Components/OperatorSignIn';


export class Auth extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      touristCardId: ''
    };
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="col-xs-6">
            <h3 className="text-center">Tourist</h3>
            <form className="inner-form center-block" autoComplete='off'>
              <div className="form-group">
                <input
                  type='text'
                  id='cc1'
                  placeholder='Enter your tourist card id'
                  onChange={ () => { alert('Not implemented yet!') } }
                  className="form-control"
                />
              </div>
              {/* use only username for authentication now */}
              <div className="form-group">
                <Link to="/">
                  <input
                    type="button"
                    value="Sign In as a Tourist"
                    className="btn btn-default form-control btn-warning"
                    onClick={ this.signInTourist }
                  ></input>
                </Link>
              </div>
            </form>
          </div>
          <OperatorSignIn/>
        </div>
      </div>
    )
  }
};
