import React, { Component } from 'react';

import { TouristCardData } from './TouristCardData';


export class Operator extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      touristCardPk: ''
    };
    this.findTourist = this.findTourist.bind( this );
    this.findAnotherTouristCard = this.findAnotherTouristCard.bind( this );
  }

  componentWillMount() {
    let token = localStorage.getItem( 'token' );
    this.props.getDepartments( token );
  }

  findTourist( e ) {
    e.preventDefault();
    let token = localStorage.getItem( 'token' );
    this.props.findTourist( token, this.state.touristCardPk );
  }

  findAnotherTouristCard() {
    this.setState({
      touristCardData: null
    });
  }

  render() {
    return(
      <div className='container'>
        { this.props.touristCardData ?
          <div className='text-center'>
            <button
              type='button'
              className='btn btn-warning'
              onClick={ this.findAnotherTouristCard }
            >Find another tourist card</button>
          </div>
        :
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
              className='btn btn-default'
              onClick={ this.findTourist }
            >Find a tourist</button>
          </form>
        }
        { this.props.touristCardData ?
          <TouristCardData
            { ...this.props.touristCardData }
            departments={ this.props.departments }
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
  touristCardData: React.PropTypes.object
};
