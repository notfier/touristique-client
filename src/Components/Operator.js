import React, { Component } from 'react';

import {
  CreateNewTouristCardContainer
} from '../containers/CreateNewTouristCardContainer';
import { TouristCardDataContainer } from '../containers/TouristCardDataContainer';


export class Operator extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      touristCardPk: '',
      error: ''
    };
    this.findTourist = this.findTourist.bind( this );
  }

  componentWillReceiveProps( newProps ) {
    if ( !this.props.isTouristCardDataChange && !this.props.isTouristCardCreation ) {
      this.setState({touristCardPk: ''});
    }
  }

  componentWillMount() {
    let token = localStorage.getItem( 'token' );
    this.props.getDepartments( token );  // get initial departments
  }

  findTourist( e ) {
    e.preventDefault();
    if ( !this.state.touristCardPk ) {
      this.setState({error: 'Enter a card id in the beginning'});
    } else {
      this.setState({error: ''});
      let token = localStorage.getItem( 'token' );
      this.props.findTourist( token, this.state.touristCardPk );
    }
  }

  render() {
    return(
      <div className='container'>
        { this.props.isTouristCardDataChange || this.props.isTouristCardCreation ?
          <div className='text-center control-buttons'>
            <button
              type='button'
              className='btn btn-warning'
              onClick={ this.props.resetTouristCardData }
            >Find another tourist card</button>
            { !this.props.isTouristCardCreation ?
              <button
                type='button'
                className='btn btn-success'
                onClick={ this.props.turnOnTouristCardCreation }
              >Create a new tourist card</button>
            :
              null
            }
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
              { this.state.error ? 
                <p className='control-label' style={ {color: 'red'} }>
                  { this.state.error }
                </p>
              :
                null
              }
            </form>
            <div className='text-center'>
              <p>or</p>
              <button
                type='submit'
                className='btn btn-success'
                onClick={ () => {
                  this.setState({error: ''});
                  this.props.turnOnTouristCardCreation();
                }}
              >Add a new tourist</button>
            </div>
          </div>
        }
        { this.props.isTouristCardDataChange && !this.props.isTouristCardCreation ?
          <TouristCardDataContainer/>
        :
          null
        }
        { this.props.isTouristCardCreation && !this.props.isTouristCardDataChange ?
          <CreateNewTouristCardContainer/>
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
  isTouristCardDataChange: React.PropTypes.bool.isRequired,
  isTouristCardCreation: React.PropTypes.bool.isRequired,
  resetTouristCardData: React.PropTypes.func.isRequired,
  turnOnTouristCardCreation: React.PropTypes.func.isRequired
};
