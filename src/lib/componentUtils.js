/**
 * Asserts that the passed Component is a React class component.
 *
 * @param {Function|Component} Component A Component to check
 * @return {Object}
 */
export const isClassComponent = Component =>
  typeof Component === 'function' && Component.prototype && !!Component.prototype.isReactComponent

/**
 * Asserts that the passed Component is a React function component.
 *
 * @param {Function|Component} Component A Component to check
 * @return {Object}
 */
export const isStatelessComponent = Component =>
  typeof Component === 'function' && Component.prototype && !Component.prototype.render

/**
 * Asserts that the passed Component supports the refs API.
 *
 * @param {Function|Component} Component A Component to check
 * @return {Object}
 */
export const supportsRef = Component => typeof Component === 'string' || isClassComponent(Component)
