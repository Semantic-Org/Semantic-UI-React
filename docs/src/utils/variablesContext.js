/**
 * Get the Webpack Context for all src component variables.
 */
const variablesContext = require.context('src/components/', true, /\w+Variables\.js$/)

export default variablesContext
