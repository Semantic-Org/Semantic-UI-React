import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function MessageItem(props) {
  const { children } = props
  const rest = getUnhandledProps(MessageItem, props)

  return <li {...rest}>{children}</li>
}

MessageItem._meta = {
  name: 'MessageItem',
  parent: 'Message',
  type: META.type.collection,
}

MessageItem.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
}

export default MessageItem
