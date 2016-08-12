import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getUnhandledProps, META } from '../../lib'

import MessageItem from './MessageItem'

function MessageList(props) {
  const { className, children, items } = props
  const rest = getUnhandledProps(MessageList, props)
  const classes = cx('list', className)

  const itemsJSX = items && items.map(item => <MessageItem key={item}>{item}</MessageItem>)

  return <ul {...rest} className={classes}>{itemsJSX || children}</ul>
}

MessageList._meta = {
  name: 'MessageList',
  parent: 'Message',
  type: META.TYPES.COLLECTION,
}

MessageList.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.node,

  /** Strings to use as list items. Mutually exclusive with children. */
  items: PropTypes.arrayOf(PropTypes.string),
}

export default MessageList
