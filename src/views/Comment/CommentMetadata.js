import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined.
 */
function CommentMetadata(props) {
  const { className, children } = props
  const classes = cx('metadata', className)
  const rest = getUnhandledProps(CommentMetadata, props)
  const ElementType = getElementType(CommentMetadata, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CommentMetadata._meta = {
  name: 'CommentMetadata',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentMetadata.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default CommentMetadata
