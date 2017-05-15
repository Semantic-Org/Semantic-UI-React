import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import CommentAction from './CommentAction'
import CommentActions from './CommentActions'
import CommentAuthor from './CommentAuthor'
import CommentAvatar from './CommentAvatar'
import CommentContent from './CommentContent'
import CommentGroup from './CommentGroup'
import CommentMetadata from './CommentMetadata'
import CommentText from './CommentText'

/**
 * A comment displays user feedback to site content.
 */
function Comment(props) {
  const { className, children, collapsed } = props

  const classes = cx(
    useKeyOnly(collapsed, 'collapsed'),
    'comment',
    className
  )
  const rest = getUnhandledProps(Comment, props)
  const ElementType = getElementType(Comment, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

Comment._meta = {
  name: 'Comment',
  type: META.TYPES.VIEW,
}

Comment.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Comment can be collapsed, or hidden from view. */
  collapsed: PropTypes.bool,
}

Comment.Author = CommentAuthor
Comment.Action = CommentAction
Comment.Actions = CommentActions
Comment.Avatar = CommentAvatar
Comment.Content = CommentContent
Comment.Group = CommentGroup
Comment.Metadata = CommentMetadata
Comment.Text = CommentText

export default Comment
