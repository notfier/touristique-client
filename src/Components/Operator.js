import React, { Component } from 'react';

import { TouristCardDataContainer } from '../containers/TouristCardDataContainer';


export class Operator extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      touristCardPk: ''
    };
    this.findTourist = this.findTourist.bind( this );
  }

  componentWillMount() {
    let token = localStorage.getItem( 'token' );
    this.props.getDepartments( token );  // get initial departments
  }

  findTourist( e ) {
    e.preventDefault();
    let token = localStorage.getItem( 'token' );
    this.props.findTourist( token, this.state.touristCardPk );
  }

  render() {
    return(
      <div className='container'>
        { this.props.isTouristCardData ?
          <div className='text-center'>
            <button
              type='button'
              className='btn btn-warning'
              onClick={ this.props.resetTouristCardData }
            >Find another tourist card</button>
          </div>
        :
          <div>
            <form className='form-inline text-center'>
              <div className='form-group'>
                <label htmlFor='tourist-card-id'>Tourist card id</label>
                <input
                  type='text'
                  className='form-control'
                  id='tourist-card-id'
                  placeholder='Enter a tourist card id'
                  onChange={ ( e ) => {
                    this.setState({
                      touristCardPk: e.target.value
                    });
                  } }
                />
              </div>
              <button
                type='submit'
                className='btn btn-danger'
                onClick={ this.findTourist }
              >Find a tourist</button>
            </form>
            <div className='text-center'>
              <p>or</p>
              <button
                type='submit'
                className='btn btn-danger'
                onClick={ ()=>{} }
              >Add a new tourist</button>
            </div>
          </div>
        }
        { this.props.isTouristCardData ?
          <TouristCardDataContainer
          />
        :
          null
        }
      </div>
    )
  }

};

Operator.PropTypes = {
  departments: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ]),
  findTourist: React.PropTypes.func.isRequired,
  getDepartments: React.PropTypes.func.isRequired,
  isTouristCardData: React.PropTypes.bool.isRequired,
  resetTouristCardData: React.PropTypes.func.isRequired
};
