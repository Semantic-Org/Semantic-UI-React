import React, { PropTypes } from 'react'
import { getElementType, getUnhandledProps, META } from '../../lib'

function MessageItem(props) {
  const { children } = props
  const rest = getUnhandledProps(MessageItem, props)
  const ElementType = getElementType(MessageItem, props)

  return <ElementType {...rest}>{children}</ElementType>
}

MessageItem._meta = {
  name: 'MessageItem',
  parent: 'Message',
  type: META.TYPES.COLLECTION,
}

MessageItem.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content. */
  children: PropTypes.node,
}

MessageItem.defaultProps = {
  as: 'li',
}

export default MessageItem
