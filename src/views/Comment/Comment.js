import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import CommentActions from './CommentActions'
import CommentAuthor from './CommentAuthor'
import CommentAvatar from './CommentAvatar'
import CommentContent from './CommentContent'
import CommentDate from './CommentDate'
import CommentGroup from './CommentGroup'
import CommentMetadata from './CommentMetadata'
import CommentReply from './CommentReply'
import CommentText from './CommentText'

/**
 * A comment displays user feedback to site content
 * */
function Comment(props) {
  const { className, children } = props
  const classes = cx('comment', className)
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

  /** Primary content of the Comment. */
  children: PropTypes.node,

  /** Classes to add to the Comment className. */
  className: PropTypes.string,
}

Comment.Author = CommentAuthor
Comment.Actions = CommentActions
Comment.Avatar = CommentAvatar
Comment.Content = CommentContent
Comment.Date = CommentDate
Comment.Group = CommentGroup
Comment.Metadata = CommentMetadata
Comment.Reply = CommentReply
Comment.Text = CommentText

export default Comment
