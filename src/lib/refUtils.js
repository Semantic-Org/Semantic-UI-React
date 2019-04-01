/**
 * The function that correctly handles passing refs.
 *
 * @param {Function|Object} ref An ref object or function
 * @param {HTMLElement} node A node that should be passed by ref
 */
export const handleRef = (ref, node) => {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof ref === 'string') {
      throw new Error(
        [
          'We do not support refs as string, this is a legacy API and will be likely to be removed in',
          'one of the future releases of React.',
        ].join(' '),
      )
    }
  }

  if (typeof ref === 'function') {
    ref(node)
    return
  }

  if (ref !== null && typeof ref === 'object') {
    // The `current` property is defined as readonly, however it's a valid way because `ref` is a mutable object
    // eslint-disable-next-line no-param-reassign
    ref.current = node
  }
}

export const isRefObject = ref =>
  // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
  // eslint-disable-next-line
  ref !== null && typeof ref === 'object' && ref.hasOwnProperty('current')
