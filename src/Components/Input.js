import React, { Component } from 'react';


export class TextInput extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      value: this.props.value
    };
    this.changeValue = this.changeValue.bind( this );
  }

  changeValue( e ) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return(
      <div className='form-group'>
        <label
          className='col-md-2 control-label'
          htmlFor={`tourist-${ this.props.id }`}
        >{ this.props.label }</label>
        <div className='col-md-8'>
          <input
            id={`tourist-${ this.props.id }`}
            type='text'
            onChange={ this.changeValue }
            className='form-control'
            value={ this.state.value }
          />
        </div>
      </div>
    )
  }

};

TextInput.PropTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string
};
