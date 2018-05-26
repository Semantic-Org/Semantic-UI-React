/* eslint import/prefer-default-export: 0 */
/* This file will contain more functions in the future */

/**
 * Asserts that the passed Component is a React class component.
 *
 * @param {Function|Component} Component A Component to check
 * @return {Object}
 */
export const isClassComponent = Component =>
  typeof Component === 'function' && Component.prototype && !!Component.prototype.isReactComponent
