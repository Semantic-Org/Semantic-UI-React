import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function CommentText(props) {
  const { className, children } = props
  const classes = cx('text', className)
  const rest = getUnhandledProps(CommentText, props)
  const ElementType = getElementType(CommentText, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CommentText._meta = {
  name: 'CommentText',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentText.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default CommentText
