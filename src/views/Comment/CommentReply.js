import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function CommentReply(props) {
  const { className, children } = props
  const classes = cx('reply', className)
  const rest = getUnhandledProps(CommentReply, props)
  const ElementType = getElementType(CommentReply, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CommentReply._meta = {
  name: 'CommentReply',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentReply.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the CommentReply. */
  children: PropTypes.node,

  /** Classes to add to the CommentReply className. */
  className: PropTypes.string,
}

export default CommentReply
