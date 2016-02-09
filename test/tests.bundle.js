import _ from 'lodash'

// clear the console before rebundling.
/* eslint-disable no-console */
if (_.isFunction(console.clear)) {
  console.clear()
}
/* eslint-enable no-console */

// setup
const setupContext = require.context('./', true, /setup\.js$/)
setupContext.keys().forEach(setupContext)

// utils
const utilsContext = require.context('./utils', true, /-util\.js/)
utilsContext.keys().forEach(utilsContext)

// tests
const testsContext = require.context('./', true, /-test\.js$/)
testsContext.keys().forEach(testsContext)

// src
const srcContext = require.context('../src', true, /\.js$/)
srcContext.keys().forEach(srcContext)
