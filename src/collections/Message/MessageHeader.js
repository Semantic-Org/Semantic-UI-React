import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getUnhandledProps, META } from '../../lib'

function MessageHeader(props) {
  const { className, children } = props
  const rest = getUnhandledProps(MessageHeader, props)
  const classes = cx('header', className)

  return <div {...rest} className={classes}>{children}</div>
}

MessageHeader._meta = {
  name: 'MessageHeader',
  parent: 'Message',
  type: META.TYPES.COLLECTION,
}

MessageHeader.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.node,
}

export default MessageHeader
