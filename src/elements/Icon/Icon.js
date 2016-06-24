import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'

function Icon(props) {
  const {
    className,
  } = props

  const classes = cx(
    'sd-icon',
    className,
    'icon'
  )

  return (
    <i {...props} className={classes} />
  )
}

Icon._meta = {
  library: META.library.semanticUI,
  name: 'Icon',
  type: META.type.element,
}

Icon.propTypes = {
  /** Class names for custom styling. */
  className: PropTypes.string,
}

export default Icon
