import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


// components


export class Auth extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      touristCardId: '',
    };
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Barca DepSystem</h2>
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
                    onClick={ () => { alert('Not implemented yet!') } }
                  ></input>
                </Link>
              </div>
            </form>
          </div>
          <div className="col-xs-6">
            <h3 className="text-center">Operator</h3>
            <form className="inner-form center-block" autoComplete='off'>
              <div className="form-group">
                <input
                  type='text'
                  id='cc2'
                  placeholder='Enter your username(AKA email)'
                  onChange={ () => { alert('Not implemented yet!') } }
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type='password'
                  id='cc3'
                  placeholder='Enter your operator password'
                  onChange={ () => { alert('Not implemented yet!') } }
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <Link to="/">
                  <input
                    id="sign-in"
                    type="button"
                    value="Sign In as an Operator"
                    className="btn btn-default form-control btn-warning"
                    onClick={ () => { alert('Not implemented yet!') } }
                  ></input>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};
