import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function MessageHeader(props) {
  const { children, className, content } = props
  const classes = cx('header', className)
  const rest = getUnhandledProps(MessageHeader, props)
  const ElementType = getElementType(MessageHeader, props)

  return <ElementType {...rest} className={classes}>{_.isNil(children) ? content : children}</ElementType>
}

MessageHeader._meta = {
  name: 'MessageHeader',
  parent: 'Message',
  type: META.TYPES.COLLECTION,
}

MessageHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Shorthand for primary content. */
  content: customPropTypes.itemShorthand,

  /** Additional classes. */
  className: PropTypes.string,
}

MessageHeader.create = createShorthandFactory(MessageHeader, val => ({ content: val }))

export default MessageHeader
