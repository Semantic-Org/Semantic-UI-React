import _ from 'lodash'
import { Children } from 'react'

/**
 * Determine if child by type exists in children.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {Boolean}
 */
export const someByType = (children, type) => _.some(Children.toArray(children), { type })

/**
 * Find child by type.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {undefined|Object}
 */
export const findByType = (children, type) => _.find(Children.toArray(children), { type })
