import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import { App } from './App';
import { Auth } from './Auth';


render(
  (
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Auth }/>
      </Route>
    </Router>
  ),
  document.getElementById( 'root' )
);