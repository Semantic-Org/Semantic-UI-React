import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function MessageContent(props) {
  const { children, className } = props
  const classes = cx('content', className)
  const rest = getUnhandledProps(MessageContent, props)
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
  className: PropTypes.string,
}

export default MessageContent
