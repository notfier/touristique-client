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
    }, () => {
      this.props.changeInternallyTouristInfo( this.props.id, this.state.value );
    });
  }

  render() {
    return(
      <div className={ this.props.error ? 'form-group has-error' : 'form-group' }>
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
        { this.props.error ?
          <p className='control-label'>{ this.props.error[0] }</p>
        :
          null
        }
      </div>
    )
  }

};

TextInput.PropTypes = {
  changeInternallyTouristInfo: React.PropTypes.func.isRequired,
  error: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string
};
