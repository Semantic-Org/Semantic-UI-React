import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A comment can contain an list of actions a user may perform related to this comment.
 */
function CommentActions(props) {
  const { className, children } = props
  const classes = cx('actions', className)
  const rest = getUnhandledProps(CommentActions, props)
  const ElementType = getElementType(CommentActions, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CommentActions._meta = {
  name: 'CommentActions',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentActions.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default CommentActions
