import some from 'lodash/some'
import find from 'lodash/find'
import { Children } from 'react'

/**
 * Determine if child by type exists in children.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {Boolean}
 */
export const someByType = (children, type) => some(Children.toArray(children), { type })

/**
 * Find child by type.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {undefined|Object}
 */
export const findByType = (children, type) => find(Children.toArray(children), { type })

/**
 * Tests if children are nil in React and Preact.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */
export const isNil = (children) =>
  children === null || children === undefined || (Array.isArray(children) && children.length === 0)
