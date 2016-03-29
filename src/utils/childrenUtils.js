import _ from 'lodash'
import { Children } from 'react'

// ----------------------------------------
// Lodash methods for children
// ----------------------------------------
/**
 * _.some for props.children.
 * @param {Object} children The children prop of a component.
 * @param {Array|Function|Object|string} iteratee The function invoked per iteration.
 * @returns {Boolean}
 */
export const someChild = (children, iteratee) => _.some(Children.toArray(children), iteratee)

/**
 * _.find for props.children.
 * @param {Object} children The children prop of a component.
 * @param {Array|Function|Object|string} iteratee The function invoked per iteration.
 * @returns {*|ReactElement}
 */
export const findChild = (children, iteratee) => _.find(Children.toArray(children), iteratee)

// ----------------------------------------
// By Type
// ----------------------------------------
/**
 * Determine if child by type exists in children.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {Boolean}
 */
export const someChildType = (children, type) => someChild(children, { type })

/**
 * Find child by type.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {*|ReactElement}
 */
export const findChildType = (children, type) => findChild(children, { type })
