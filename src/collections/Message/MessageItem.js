import React, { PropTypes } from 'react'
import { getUnhandledProps, META } from '../../lib'

function MessageItem(props) {
  const { children } = props
  const rest = getUnhandledProps(MessageItem, props)

  return <li {...rest}>{children}</li>
}

MessageItem._meta = {
  name: 'MessageItem',
  parent: 'Message',
  type: META.TYPES.COLLECTION,
}

MessageItem.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
}

export default MessageItem
