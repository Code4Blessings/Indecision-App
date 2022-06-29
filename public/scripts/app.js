'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);

var appRoot = document.getElementById('app');

//ReactDOM.render takes in 2 arguments -- The JSX you want to render and the dom element
ReactDOM.render(template, appRoot);
