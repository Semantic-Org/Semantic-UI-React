import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function CommentDate(props) {
  const { className, children } = props
  const classes = cx('date', className)
  const rest = getUnhandledProps(CommentDate, props)
  const ElementType = getElementType(CommentDate, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CommentDate._meta = {
  name: 'CommentDate',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentDate.defaultProps = {
  as: 'span',
}

CommentDate.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the CommentDate. */
  children: PropTypes.node,

  /** Classes to add to the CommentDate className. */
  className: PropTypes.string,
}

export default CommentDate
