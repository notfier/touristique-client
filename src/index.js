var css = require('./styles/main.css');

import React, { Component } from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { App } from './App';
import { Auth } from './Auth';
import { Operator } from './Components/Operator';


class Index extends Component {

  constructor( props ) {
    super( props );
    this.checkAuth = this.checkAuth.bind( this );
  }

  checkAuth( nextState, replace ) {
    console.log( nextState.location.pathname )
    if (
      nextState.location.pathname === '/operator/' ||
      nextState.location.pathname === '/auth/'
    ) {
      return true;
    }
    if ( localStorage.getItem( 'token' ) ) {
      replace({
        pathname:'/operator/',
        state:{
          nextPathname: nextState.location.pathname
        }
      });
    } else {
      replace({
        pathname:'/auth/',
        state:{
          nextPathname: nextState.location.pathname
        }
      });
    }
  }

  render() {
    return(
      <Router history={ browserHistory }>
        <Route path='/' component={ App } onEnter={ this.checkAuth }>
          <Route path='auth' component={ Auth }/>
          <Route path='operator' component={ Operator }/>
        </Route>
      </Router>
    )
  }

}

render(
  <Index/>,
  document.getElementById( 'root' )
);
