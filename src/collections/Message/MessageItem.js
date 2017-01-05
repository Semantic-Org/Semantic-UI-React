import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function MessageItem(props) {
  const { children, className, content } = props
  const classes = cx('content', className)
  const rest = getUnhandledProps(MessageItem, props)
  const ElementType = getElementType(MessageItem, props)

  return <ElementType {...rest} className={classes}>{content || children}</ElementType>
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

  /** Shorthand for primary content. */
  content: customPropTypes.itemShorthand,

  /** Additional classes. */
  className: PropTypes.string,
}

MessageItem.defaultProps = {
  as: 'li',
}

MessageItem.create = createShorthandFactory(MessageItem, content => ({ content }), true)

export default MessageItem
