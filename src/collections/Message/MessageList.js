import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import MessageItem from './MessageItem'

/**
 * A message can contain a list of items.
 */
function MessageList(props) {
  const { children, className, items } = props
  const classes = cx('list', className)
  const rest = getUnhandledProps(MessageList, props)
  const ElementType = getElementType(MessageList, props)

  return (
    <ElementType {...rest} className={classes}>
      {_.isNil(children) ? _.map(items, MessageItem.create) : children}
    </ElementType>
  )
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

  /** Shorthand Message.Items. */
  items: customPropTypes.collectionShorthand,
}

MessageList.defaultProps = {
  as: 'ul',
}

MessageList.create = createShorthandFactory(MessageList, val => ({ items: val }))

export default MessageList
