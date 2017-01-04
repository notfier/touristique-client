import React, { Component } from 'react';

import { TextInput } from './Input';


export class CreateNewTouristCard extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      tourist: {},
      department: this.props.departments[0].id,
    };
    this.changeDep = this.changeDep.bind( this );
    this.createTouristCard = this.createTouristCard.bind( this );
    this.changeValue = this.changeValue.bind( this );
  }

  changeDep( e ) {
    this.setState({
      department: e.target.value
    });
  }

  changeValue( fieldName, fieldValue ) {
    if ( this.props.tourist ) {
      var tourist = this.props.tourist;
    } else {
      var tourist = this.state.tourist;
    }
    // this method change tourist store state for specific tourist field
    this.props.changeInternallyTouristInfo(
      tourist,
      fieldName,
      fieldValue
    );
  }

  createTouristCard( e ) {
    e.preventDefault();
    let data = {
      current_department: this.state.department,
      tourist: this.props.tourist
    };
    let token = localStorage.getItem( 'token' );
    this.props.createTouristCard( token, data );
  }

  render() {
    let errors = this.props.errors;
    let tourist = this.props.tourist;
    return(
      <div className='container tourist-info'>
        <form className='form-horizontal text-center'>
          {/* tourist info */}
          <TextInput
            value={ tourist ? tourist.first_name : '' }
            id={ 'first_name' }
            label={ 'First Name' }
            changeInternallyTouristInfo={ ( name, value ) => {
              return this.changeValue( name, value );
            }}
            error={ errors && errors.tourist ? errors.tourist.first_name : null }
          />
          <TextInput
            value={ tourist ? tourist.middle_name : '' }
            id={ 'middle_name' }
            label={ 'Middle Name' }
            changeInternallyTouristInfo={ ( name, value ) => {
              return this.changeValue( name, value );
            }}
            error={ errors && errors.tourist ? errors.tourist.middle_name : null }
          />
          <TextInput
            value={ tourist ? tourist.last_name : '' }
            id={ 'last_name' }
            label={ 'Last Name' }
            changeInternallyTouristInfo={ ( name, value ) => {
              return this.changeValue( name, value );
            }}
            error={ errors && errors.tourist ? errors.tourist.last_name : null }
          />
          <TextInput
            value={ tourist ? tourist.email : '' }
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
                  value={ this.props.departments[0].id }
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
            onClick={ this.createTouristCard }
          >Create new tourist card</button>
        </form>
      </div>
    )
  }

};

CreateNewTouristCard.PropTypes = {
  errors: React.PropTypes.object,
  changeInternallyTouristInfo: React.PropTypes.func.isRequired,
  created: React.PropTypes.string.isRequired,
  current_department: React.PropTypes.object.isRequired,
  departments: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ]),
  isSavedSuccessfully: React.PropTypes.bool,
  createTouristCard: React.PropTypes.func.isRequired,
  tourist: React.PropTypes.object.isRequired
};
