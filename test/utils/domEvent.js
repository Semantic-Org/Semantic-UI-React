import simulant from 'simulant'

// ----------------------------------------
// Simulate DOM Events on real DOM nodes
// ----------------------------------------

/**
 * Generic method for dispatching an event on a DOM node.
 * @param {String|Object} node A querySelector string or DOM node.
 * @param {String} eventType A DOMString
 * @param {Object} [data] Additional event data.
 * @returns {Object} The event
 */
export const fire = (node, eventType, data = {}) => {
  const DOMNode = typeof node === 'string' ? document.querySelector(node) : node
  const event = simulant(eventType, data)

  return simulant.fire(DOMNode, event)
}

/**
 * Dispatch a 'keydown' event on a DOM node.
 * @param {String|Object} node A querySelector string or DOM node.
 * @param {Object} [data] Additional event data.
 * @returns {Object} The event
 */
export const keyDown = (node, data) => fire(node, 'keydown', data)

/**
 * Dispatch a 'click' event on a DOM node.
 * @param {String|Object} node A querySelector string or DOM node.
 * @param {Object} [data] Additional event data.
 * @returns {Object} The event
 */
export const click = (node, data) => fire(node, 'click', data)

export default {
  fire,
  keyDown,
  click,
}
