import React, { Component } from 'react';

import { TouristCardData } from './TouristCardData';


export class Operator extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      touristCardPk: '',
      touristCardData: null
    };
    this.findTourist = this.findTourist.bind( this );
    this.findAnotherTouristCard = this.findAnotherTouristCard.bind( this );
  }

  findTourist( e ) {
    e.preventDefault();
    let token = localStorage.getItem( 'token' );
    var url =  '/api/tourists/tourist_card_info/';
    let paramedUrl = url.concat(`?tourist_card_pk=${ this.state.touristCardPk }`);
    fetch( paramedUrl, {
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
      jsonedResponse => this.setState({touristCardData: jsonedResponse})
    );
    console.log( 'Tourist data fetched successfully' );
  }

  findAnotherTouristCard() {
    this.setState({
      touristCardData: null
    });
  }

  render() {
    return(
      <div className='container'>
        { this.state.touristCardData ?
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
        { this.state.touristCardData ?
          <TouristCardData
            { ...this.state.touristCardData }
          />
        :
          null
        }
      </div>
    )
  }

};

Operator.PropTypes = {};
