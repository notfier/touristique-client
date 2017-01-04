import React, { Component } from 'react';

import { TextInput } from './Input';


export class TouristCardData extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      tourist: this.props.tourist,
      isActive: this.props.is_active,
      department: this.props.current_department.id,
      departments: null
    };
    this.changeDep = this.changeDep.bind( this );
    this.saveTouristCardInfo = this.saveTouristCardInfo.bind( this );
    this.changeValue = this.changeValue.bind( this );
  }

  componentWillReceiveProps( newProps ) {
    console.log('NEW', newProps);
  }

  changeDep( e ) {
    this.setState({
      department: e.target.value
    });
  }

  changeValue( fieldName, fieldValue ) {
    // this method change tourist store state for specific tourist field
    this.props.changeInternallyTouristInfo(
      this.props.tourist,
      fieldName,
      fieldValue
    );
  }

  saveTouristCardInfo( e ) {
    e.preventDefault();
    let data = {
      tourist_card_pk: this.props.card_id,
      current_department: this.state.department,
      tourist: this.props.tourist
    };
    let token = localStorage.getItem( 'token' );
    this.props.saveTouristCardInfo( token, data );
  }

  render() {
    let errors = this.props.errors;
    console.log('ERRORS', errors)
    return(
      <div className='container tourist-info'>
        <form className='form-horizontal text-center'>
          <div className='form-group'>
            <label htmlFor='card_id' className='col-md-2 control-label'>Card ID</label>
            <div className='col-md-8'>
              <p className='form-control-static'>{ this.props.card_id }</p>
            </div>
          </div>
          {/* tourist info */}
          <TextInput
            value={ this.props.tourist.first_name }
            id={ 'first_name' }
            label={ 'First Name' }
            changeInternallyTouristInfo={ ( name, value ) => {
              return this.changeValue( name, value );
            }}
            error={ errors && errors.tourist ? errors.tourist.first_name : null }
          />
          <TextInput
            value={ this.props.tourist.middle_name }
            id={ 'middle_name' }
            label={ 'Middle Name' }
            changeInternallyTouristInfo={ ( name, value ) => {
              return this.changeValue( name, value );
            }}
            error={ errors && errors.tourist ? errors.tourist.middle_name : null }
          />
          <TextInput
            value={ this.props.tourist.last_name }
            id={ 'last_name' }
            label={ 'Last Name' }
            changeInternallyTouristInfo={ ( name, value ) => {
              return this.changeValue( name, value );
            }}
            error={ errors && errors.tourist ? errors.tourist.last_name : null }
          />
          <TextInput
            value={ this.props.tourist.email }
            id={ 'email' }
            label={ 'Email' }
            changeInternallyTouristInfo={ ( name, value ) => {
              return this.changeValue( name, value );
            }}
            error={ errors && errors.tourist ? errors.tourist.email : null }
          />
          { this.props.departments ?
            <div className='form-group'>
              <label
                className='col-md-2 control-label'
              >Department</label>
              <div className='col-md-8'>
                <select
                  value={ this.state.department.id }
                  onChange={ this.changeDep }
                  className='form-control col-md-8'
                >
                  { this.props.departments.map( el => {
                    return (
                      <option value={ el.id } key={`key-${ el.id }`}>
                        { el.name }{ el.address }
                      </option>
                    )
                  } ) }
                </select>
              </div>
            </div>
          :
            null
          }
          <button
            className='btn btn-danger'
            type='submit'
            onClick={ this.saveTouristCardInfo }
          >Save tourist card info</button>
          { this.props.isSavedSuccessfully ?
            <p style={ {color: '#07c664'} }>Changes were saved successfully!</p>
          :
            null
          }
        </form>
      </div>
    )
  }

};

TouristCardData.PropTypes = {
  errors: React.PropTypes.object,
  card_id: React.PropTypes.string.isRequired,
  changeInternallyTouristInfo: React.PropTypes.func.isRequired,
  created: React.PropTypes.string.isRequired,
  current_department: React.PropTypes.object.isRequired,
  departments: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ]),
  is_active: React.PropTypes.bool.isRequired,
  isSavedSuccessfully: React.PropTypes.bool,
  saveTouristCardInfo: React.PropTypes.func.isRequired,
  tourist: React.PropTypes.object.isRequired
};
