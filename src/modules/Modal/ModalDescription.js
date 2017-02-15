import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A modal can have a header.
 */
function ModalDescription(props) {
  const { children, className } = props
  const classes = cx('description', className)
  const rest = getUnhandledProps(ModalDescription, props)
  const ElementType = getElementType(ModalDescription, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

ModalDescription._meta = {
  name: 'ModalDescription',
  type: META.TYPES.MODULE,
  parent: 'Modal',
}

ModalDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default ModalDescription
