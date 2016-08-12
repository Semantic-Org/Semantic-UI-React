import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getUnhandledProps, META } from '../../lib'

function MessageContent(props) {
  const { className, children } = props
  const rest = getUnhandledProps(MessageContent, props)
  const classes = cx('content', className)

  return <div {...rest} className={classes}>{children}</div>
}

MessageContent._meta = {
  name: 'MessageContent',
  parent: 'Message',
  type: META.TYPES.COLLECTION,
}

MessageContent.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.node,
}

export default MessageContent
