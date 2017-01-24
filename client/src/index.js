import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'
import SessionList from './components/SessionList';
import NoMatch from './components/NoMatch';
import StatsContainer from './components/StatsContainer';
import { HomePage } from './components/HomePage';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="sessions" component={SessionList}/>
      <Route path="stats" component={StatsContainer}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
