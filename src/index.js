import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Checkout from './components/Checkout'
import './css/index.css';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='checkout' component={Checkout}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
