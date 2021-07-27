import * as React from 'react'

/**
 * Hook keeping track of a given value from a previous execution of the component the Hook is used in.
 *
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 */
function usePrevious(value) {
  const ref = React.useRef()

  React.useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export default usePrevious
