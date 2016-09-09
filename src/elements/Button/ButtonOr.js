import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'

/**
 * Used in some Button types, such as `animated`
 */
function ButtonOr(props) {
  const { className } = props
  const classes = cx('or', className)
  const rest = getUnhandledProps(ButtonOr, props)
  const ElementType = getElementType(ButtonOr, props)

  return <ElementType className={classes} {...rest} />
}

ButtonOr._meta = {
  name: 'ButtonOr',
  parent: 'Button',
  type: META.TYPES.ELEMENT,
}

ButtonOr.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Additional classes */
  className: PropTypes.string,
}

export default ButtonOr
