import React, { Component } from 'react';


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
  }

  componentWillMount() {
    let token = localStorage.getItem( 'token' );
    fetch( '/api/data/departments/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${ token }`
      },
      credentials: 'same-origin'
    }).then(
      response => response.json()
    ).then(
      jsonedResponse => {
        console.log(jsonedResponse);
        this.setState({
          departments: jsonedResponse
        })
      }
    )
  }

  changeDep( e ) {
    this.setState({
      department: e.target.value
    });
  }

  saveTouristCardInfo() {
    e.preventDefault();
    fetch( '/api/tourists/tourist_card_info/', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${ token }`
      },
      credentials: 'same-origin',
      body: {
        tourist_card_pk: this.props.card_id,
        department: this.state.department,
        tourist: this.state.tourist
      }
    }).then(
      response => response.json()
    ).then(
      jsonedResponse => {
        console.log(jsonedResponse);
      }
    )
  }

  render() {
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
          { Object.keys( this.state.tourist ).map( ( el ) => {
            if ( el !== 'id' && el !== 'date_joined' ) {
              var label = el.split( '_' ).map( el => ''.concat( ' '.concat( el ) ) );
              return(
              <div className='form-group' key={ `tourist-${ el }` }>
                <label
                  className='col-md-2 control-label'
                  htmlFor={`tourist-${ el }`}
                >{ label }</label>
                <div className='col-md-8'>
                  <input
                    id={`tourist-${ el }`}
                    type='text'
                    onChange={ ()=>{} }
                    className='form-control'
                    value={ this.state.tourist[el] }
                  />
                </div>
              </div>
              )
            }
          } ) }
          { this.state.departments ?
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
                  { this.state.departments.map( el => {
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
        </form>
      </div>
    )
  }

};

TouristCardData.PropTypes = {
  card_id: React.PropTypes.string.isRequired,
  created: React.PropTypes.string.isRequired,
  current_department: React.PropTypes.object.isRequired,
  is_active: React.PropTypes.bool.isRequired,
  tourist: React.PropTypes.object.isRequired
};
