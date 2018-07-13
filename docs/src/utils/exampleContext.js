/**
 * Get the Webpack Context for all doc site examples.
 */
const exampleContext = require.context('docs/src/examples/', true, /(\w+Example\w*|index)\.js$/)

export default exampleContext
