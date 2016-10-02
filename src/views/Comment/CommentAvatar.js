import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createHTMLImage,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import {} from '../../lib/factories'

function CommentAvatar(props) {
  const { className, src } = props
  const classes = cx('avatar', className)
  const rest = getUnhandledProps(CommentAvatar, props)
  const ElementType = getElementType(CommentAvatar, props)

  return (
    <ElementType {...rest} className={classes}>
      {createHTMLImage(src)}
    </ElementType>
  )
}

CommentAvatar._meta = {
  name: 'CommentAvatar',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentAvatar.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Classes to add to the CommentAvatar className. */
  className: PropTypes.string,

  src: PropTypes.string,
}

export default CommentAvatar
