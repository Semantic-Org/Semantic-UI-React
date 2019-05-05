import React from 'react'
import PropTypes from 'prop-types'

const NoSSR = (props) => {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? props.children : props.fallback
}

NoSSR.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * The fallback content to display.
   */
  fallback: PropTypes.node,
}

NoSSR.defaultProps = {
  defer: false,
  fallback: null,
}

export default NoSSR
