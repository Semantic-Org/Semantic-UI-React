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

// src
var srcContext = require.context('../src', true, /\.js$/);
srcContext.keys().forEach(srcContext);
