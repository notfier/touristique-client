var css = require('./styles/main.css');

import React, { Component } from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

import { App } from './App';
import { OperatorSignIn } from './components/OperatorSignIn';
import { OperatorContainer } from './containers/OperatorContainer';


class Index extends Component {

  constructor( props ) {
    super( props );
    this.checkAuth = this.checkAuth.bind( this );
    this.store = configureStore();
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
      <Provider store={ this.store }>
        <Router history={ browserHistory }>
          <Route path='/' component={ App } onEnter={ this.checkAuth } lol={1}>
            <Route path='auth' component={ OperatorSignIn }/>
            <Route path='operator' component={ OperatorContainer }/>
          </Route>
        </Router>
      </Provider>
    )
  }

}

render(
  <Index/>,
  document.getElementById( 'root' )
);
