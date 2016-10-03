let _debug
const noop = () => undefined

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  _debug = require('debug')
} else {
  _debug = () => noop
}

/**
 * Create a namespaced debug function.
 * @param {String} namespace Usually a component name.
 * @example
 * import { makeDebugger } from 'src/lib'
 * const debug = makeDebugger('namespace')
 *
 * debug('Some message')
 * @returns {Function}
 */
export const makeDebugger = (namespace) => {
  return _debug(`semanticUIReact:${namespace}`)
}

/**
 * Default debugger, simple log.
 * @example
 * import { debug } from 'src/lib'
 * debug('Some message')
 */
export const debug = makeDebugger('log')
