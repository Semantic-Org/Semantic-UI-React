import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'

function MessageHeader(props) {
  const { className, children } = props
  const rest = getUnhandledProps(MessageHeader, props)
  const classes = cx('header', className)
  const ElementType = getElementType(MessageHeader, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

MessageHeader._meta = {
  name: 'MessageHeader',
  parent: 'Message',
  type: META.TYPES.COLLECTION,
}

MessageHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.node,
}

export default MessageHeader
