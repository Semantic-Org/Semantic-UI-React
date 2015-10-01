var _ = require('lodash');

// clear the console before rebundling.
/* eslint-disable no-console */
if (_.isFunction(console.clear)) {
  console.clear();
}
/* eslint-enable no-console */

// setup
var setupContext = require.context('./', true, /setup\.js$/);
setupContext.keys().forEach(setupContext);

// utils
var utilsContext = require.context('./utils', true, /-util\.js/);
utilsContext.keys().forEach(utilsContext);

// tests
var testsContext = require.context('./', true, /-test\.js$/);
testsContext.keys().forEach(testsContext);

// components
var componentsContext = require.context('./components', true, /\.js$/);
componentsContext.keys().forEach(componentsContext);
