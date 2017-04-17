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
 * A comment can contain content.
 */
function CommentContent(props) {
  const { className, children } = props
  const classes = cx(className, 'content')
  const rest = getUnhandledProps(CommentContent, props)
  const ElementType = getElementType(CommentContent, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CommentContent._meta = {
  name: 'CommentContent',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default CommentContent
