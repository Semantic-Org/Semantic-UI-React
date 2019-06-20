import some from 'lodash/some'
import invoke from 'lodash/invoke'
import inRange from 'lodash/inRange'
import isNil from 'lodash/isNil'
import first from 'lodash/first'

/**
 * Determines if a click's coordinates are within the bounds of a node.
 *
 * @see https://github.com/Semantic-Org/Semantic-UI-React/pull/2384
 *
 * @param {object} node - A DOM node.
 * @param {object} e - A SyntheticEvent or DOM Event.
 * @returns {boolean}
 */
const doesNodeContainClick = (node, e) => {
  if (some([e, node], isNil)) return false

  // if there is an e.target and it is in the document, use a simple node.contains() check
  if (e.target) {
    invoke(e.target, 'setAttribute', 'data-suir-click-target', true)

    if (document.querySelector('[data-suir-click-target=true]')) {
      invoke(e.target, 'removeAttribute', 'data-suir-click-target')
      return node.contains(e.target)
    }
  }

  // Below logic handles cases where the e.target is no longer in the document.
  // The result of the click likely has removed the e.target node.
  // Instead of node.contains(), we'll identify the click by X/Y position.

  // return early if the event properties aren't available
  // prevent measuring the node and repainting if we don't need to
  const { clientX, clientY } = e
  if (some([clientX, clientY], isNil)) return false

  // false if the node is not visible
  const clientRects = node.getClientRects()
  // Heads Up!
  // getClientRects returns a DOMRectList, not an array nor a plain object
  // We explicitly avoid isEmpty and check .length to cover all possible shapes
  if (!node.offsetWidth || !node.offsetHeight || !clientRects || !clientRects.length) return false

  // false if the node doesn't have a valid bounding rect
  const { top, bottom, left, right } = first(clientRects)
  if (some([top, bottom, left, right], isNil)) return false

  // we add a small decimal to the upper bound just to make it inclusive
  // don't add an whole pixel (1) as the event/node values may be decimal sensitive
  return inRange(clientY, top, bottom + 0.001) && inRange(clientX, left, right + 0.001)
}

export default doesNodeContainClick
