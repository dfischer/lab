'use strict';

var React = require('react');
window.React = React;

var M = require('./m');
window.M = M;


var MyComponent = require('./components/mycomponent.jsx');

React.render(<MyComponent />, document.getElementById('content'));
