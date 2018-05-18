/**
 * Get the Webpack Context for all doc site examples.
 */
const exampleContext = require.context('docs/app/Examples/', true, /(\w+Example\w*|index)\.js$/)

export default exampleContext
