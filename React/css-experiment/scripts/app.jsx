'use strict';

var React = require('react');
window.React = React;

var M = require('./m');
window.M = M;

var _ = require('lodash');
window._ = _;


var MyComponent = require('./components/mycomponent.jsx');

React.render(<MyComponent />, document.getElementById('content'));
