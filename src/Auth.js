import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

// components


export class Auth extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            usernameValue: '',
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind( this );
        this.onUsernameUpdate = this.onUsernameUpdate.bind( this );
        this.onPasswordUpdate = this.onPasswordUpdate.bind( this );
        this.onEmailUpdate = this.onEmailUpdate.bind( this );
    }

    onUsernameUpdate( val ) {
        this.setState({
            usernameValue: val
        });
    }

    onEmailUpdate( val ) {
        this.setState({
            email: val
        });
    }

    onPasswordUpdate( val ) {
        console.log( 'yess', val );
        this.setState({
            password: val
        });
    }

    handleChange( event ) {
        localStorage.setItem( 'token', JSON.stringify({
            'username': this.state.usernameValue,
            'email': this.state.email,
            'password': this.state.password
        }) );
    }

    render() {
        return (
            <div className="entry">
                <div className="title">
                    <h2>Barca DepSystem</h2>
                </div>
                <div className="form">
                    <form>
                        <div className="inner-form">
                            <input type='text' onChange={ this.onUsernameUpdate }/>
                        </div>
                        {/* use only username for authentication now */}
                        <div className="inner-form">
                            <Link to="/">
                                <input
                                    id="sign-in"
                                    type="button"
                                    value="Sign In"
                                    onClick={ this.handleChange }
                                ></input>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};
