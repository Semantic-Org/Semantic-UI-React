import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function MessageHeader(props) {
  const { className, children } = props
  const rest = getUnhandledProps(MessageHeader, props)
  const classes = cx('header', className)

  return <div {...rest} className={classes}>{children}</div>
}

MessageHeader._meta = {
  name: 'MessageHeader',
  parent: 'Message',
  type: META.type.collection,
}

MessageHeader.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.node,
}

export default MessageHeader
