import * as React from 'react'

/**
 * Returns a callback that causes force render of a component.
 */
export default function useForceUpdate() {
  return React.useReducer((x) => x + 1, 0)[1]
}
