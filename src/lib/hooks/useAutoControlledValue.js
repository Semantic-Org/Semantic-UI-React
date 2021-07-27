import * as React from 'react'

/**
 * A hook that allows optional user control, implements an interface similar to `React.useState()`.
 * Useful for components which allow uncontrolled and controlled behaviours for users.
 *
 * - defaultState - default state or factory initializer
 * - state - controllable state, undefined state means internal state will be used
 * - initialState - Used to initialize state if all user provided states are undefined
 *
 * @param {{ defaultState?: any, state: any, initialState: any }} options
 *
 * @see https://reactjs.org/docs/uncontrolled-components.html
 * @see https://reactjs.org/docs/hooks-state.html
 */
function useAutoControlledValue(options) {
  const initialState =
    typeof options.defaultState === 'undefined' ? options.initialState : options.defaultState
  const [internalState, setInternalState] = React.useState(initialState)

  const state = typeof options.state === 'undefined' ? internalState : options.state
  const stateRef = React.useRef(state)

  React.useEffect(() => {
    stateRef.current = state
  }, [state])

  // To match the behavior of the setter returned by React.useState, this callback's identity
  // should never change. This means it MUST NOT directly reference variables that can change.
  const setState = React.useCallback((newState) => {
    // React dispatch can use a factory
    // https://reactjs.org/docs/hooks-reference.html#functional-updates
    if (typeof newState === 'function') {
      stateRef.current = newState(stateRef.current)
    } else {
      stateRef.current = newState
    }

    setInternalState(stateRef.current)
  }, [])

  return [state, setState]
}

export default useAutoControlledValue
