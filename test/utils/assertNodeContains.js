/**
 * Assert whether a child selector is or is not present in a parent node.
 *
 * @param {object} parentNode A parent DOM node
 * @param {string} childSelector A DOM selector for the child node
 * @param {boolean} [isPresent=true] Indicating whether to assert is present or is not present
 */
export const assertNodeContains = (parentNode, childSelector, isPresent = true) => {
  const didFind = parentNode.querySelector(childSelector) !== null

  if (didFind !== isPresent) {
    throw new Error(
      `"${childSelector}" ${didFind ? 'should not' : 'should'} have been found in ${parentNode}`,
    )
  }
}

/**
 * Assert whether node is or is not a child of the document.body.
 *
 * @param {string} selector A DOM selector for the parent node
 * @param {boolean} [isPresent=true] Indicating whether to assert is present or is not present
 */
export const assertBodyContains = (selector, isPresent) =>
  assertNodeContains(document.body, selector, isPresent)
