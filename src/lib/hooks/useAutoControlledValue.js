import * as React from 'react'

/**
 * Helper hook to handle previous comparison of controlled/uncontrolled. Prints an error when "isControlled" value
 * switches between subsequent renders.
 */
function useIsControlled(controlledValue) {
  const [isControlled] = React.useState(controlledValue !== undefined)

  if (process.env.NODE_ENV !== 'production') {
    // We don't want these warnings in production even though it is against native behaviour
    React.useEffect(() => {
      if (isControlled !== (controlledValue !== undefined)) {
        const error = new Error()

        const controlWarning = isControlled
          ? 'a controlled value to be uncontrolled'
          : 'an uncontrolled value to be controlled'
        const undefinedWarning = isControlled ? 'defined to an undefined' : 'undefined to a defined'

        // eslint-disable-next-line no-console
        console.error(
          [
            // Default react error
            `A component is changing ${controlWarning}'. This is likely caused by the value changing from `,
            `${undefinedWarning} value, which should not happen. Decide between using a controlled or uncontrolled `,
            'input element for the lifetime of the component.',
            'More info: https://reactjs.org/link/controlled-components',
            error.stack,
          ].join(' '),
        )
      }
    }, [isControlled, controlledValue])
  }

  return isControlled
}

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
  const isControlled = useIsControlled(options.state)
  const initialState =
    typeof options.defaultState === 'undefined' ? options.initialState : options.defaultState

  const [internalState, setInternalState] = React.useState(initialState)
  const state = isControlled ? options.state : internalState
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
