import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

import MessageItem from './MessageItem'

function MessageList(props) {
  const { className, children, items } = props
  const rest = getUnhandledProps(MessageList, props)
  const classes = cx('list', className)
  const ElementType = getElementType(MessageList, props)

  const itemsJSX = items && items.map(item => <MessageItem key={item}>{item}</MessageItem>)

  return <ElementType {...rest} className={classes}>{itemsJSX || children}</ElementType>
}

MessageList._meta = {
  name: 'MessageList',
  parent: 'Message',
  type: META.TYPES.COLLECTION,
}

MessageList.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.node,

  /** Strings to use as list items. Mutually exclusive with children. */
  items: PropTypes.arrayOf(PropTypes.string),
}

MessageList.defaultProps = {
  as: 'ul',
}

export default MessageList
