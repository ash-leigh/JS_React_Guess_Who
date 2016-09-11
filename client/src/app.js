var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('../src/components/Main');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var NewGame = require('../src/components/NewGame')

window.onload = function(){
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Main}/>
        <Route path='new-game' component={NewGame}/>
      </Route>
    </Router>,
    document.getElementById('app')
  );
}
