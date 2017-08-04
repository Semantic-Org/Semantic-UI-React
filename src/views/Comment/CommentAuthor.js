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
 * A comment can contain an author.
 */
function CommentAuthor(props) {
  const { className, children } = props
  const classes = cx('author', className)
  const rest = getUnhandledProps(CommentAuthor, props)
  const ElementType = getElementType(CommentAuthor, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CommentAuthor._meta = {
  name: 'CommentAuthor',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentAuthor.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default CommentAuthor
