import copyToClipboard from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import React from 'react'

export const useCopyToClipboard = (value, timeout = 3000) => {
  const [active, setActive] = React.useState(false)
  const onCopy = React.useCallback(() => {
    copyToClipboard(typeof value === 'function' ? value() : value)
    setActive(true)

    const timeoutId = setTimeout(() => setActive(false), timeout)

    return () => clearTimeout(timeoutId)
  }, [timeout, value])

  return [active, onCopy]
}

export const CopyToClipboard = (props) => {
  const { children, timeout, value } = props
  const [active, onCopy] = useCopyToClipboard(value, timeout)

  return children(active, onCopy)
}

CopyToClipboard.propTypes = {
  children: PropTypes.func.isRequired,
  timeout: PropTypes.number,
  value: PropTypes.string.isRequired,
}

CopyToClipboard.defaultProps = {
  timeout: 3000,
}

export default CopyToClipboard
