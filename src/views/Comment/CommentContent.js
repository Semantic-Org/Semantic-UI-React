import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function CommentGroup(props) {
  const { className, children } = props
  const classes = cx('content', className)
  const rest = getUnhandledProps(CommentGroup, props)
  const ElementType = getElementType(CommentGroup, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CommentGroup._meta = {
  name: 'CommentContent',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the CommentContent. */
  children: PropTypes.node,

  /** Classes to add to the CommentContent className. */
  className: PropTypes.string,
}

export default CommentGroup
