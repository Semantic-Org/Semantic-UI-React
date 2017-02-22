import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * Used in some Button types, such as `animated`.
 */
function ButtonOr(props) {
  const { className } = props
  const classes = cx('or', className)
  const rest = getUnhandledProps(ButtonOr, props)
  const ElementType = getElementType(ButtonOr, props)

  return <ElementType {...rest} className={classes} />
}

ButtonOr._meta = {
  name: 'ButtonOr',
  parent: 'Button',
  type: META.TYPES.ELEMENT,
}

ButtonOr.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,
}

export default ButtonOr
