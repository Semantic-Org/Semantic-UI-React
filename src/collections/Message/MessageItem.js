import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function MessageItem(props) {
  const { children, className } = props
  const classes = cx('content', className)
  const rest = getUnhandledProps(MessageItem, props)
  const ElementType = getElementType(MessageItem, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

MessageItem._meta = {
  name: 'MessageItem',
  parent: 'Message',
  type: META.TYPES.COLLECTION,
}

MessageItem.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

MessageItem.defaultProps = {
  as: 'li',
}

export default MessageItem
