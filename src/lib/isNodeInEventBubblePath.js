import _ from 'lodash'

/**
 * Check if specific node is in the path of specific event.
 * @param {Node} node.
 * @param {Event} event.
 * @returns {Boolean}
 */
const isNodeInEventBubblePath = (node, event) => {
  // Get the event bubbling path
  const path = event.path || (event.composedPath && event.composedPath())
  return _.some(path, p => p === node)
}

export default isNodeInEventBubblePath
