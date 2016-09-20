var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');


var sentryKey = '294dac3d1ba242d69ea6972630685bfb'
var sentryApp = '100101'
var sentryURL = 'https://'
+ sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}
Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }

}).install()

console.log(window.thing.nope)

ReactDOM.render(
  routes, document.getElementById('app')
)
