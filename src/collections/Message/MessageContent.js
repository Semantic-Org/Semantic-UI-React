import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function MessageContent(props) {
  const { className, children } = props
  const rest = getUnhandledProps(MessageContent, props)
  const classes = cx('content', className)
  const ElementType = getElementType(MessageContent, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

MessageContent._meta = {
  name: 'MessageContent',
  parent: 'Message',
  type: META.TYPES.COLLECTION,
}

MessageContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.node,
}

export default MessageContent
