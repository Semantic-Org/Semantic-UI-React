import _ from 'lodash'
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
  const { children, className, items } = props
  const classes = cx('list', className)
  const rest = getUnhandledProps(MessageList, props)
  const ElementType = getElementType(MessageList, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  const content = _.map(items, item => <MessageItem key={item}>{item}</MessageItem>)

  return <ElementType {...rest} className={classes}>{content}</ElementType>
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
  className: PropTypes.string,

  /** Strings to use as list items. Mutually exclusive with children. */
  items: PropTypes.arrayOf(PropTypes.string),
}

MessageList.defaultProps = {
  as: 'ul',
}

export default MessageList
