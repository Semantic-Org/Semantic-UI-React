import React, { PropTypes } from 'react'
import cx from 'classnames'
import { META, getUnhandledProps } from '../../lib'
import CommentActions from './CommentActions'
import CommentAuthor from './CommentAuthor'
import CommentAvatar from './CommentAvatar'
import CommentContent from './CommentContent'
import CommentMeta from './CommentMeta'
import CommentText from './CommentText'

const _meta = {
  name: 'Comment',
  type: META.TYPES.VIEW,
}

function Comment(props) {
  const { className, children } = props
  const rest = getUnhandledProps(Comment, props)
  const classes = cx(
    'comment',
    className
  )
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}

Comment._meta = _meta

Comment.Actions = CommentActions
Comment.Author = CommentAuthor
Comment.Avatar = CommentAvatar
Comment.Content = CommentContent
Comment.Meta = CommentMeta
Comment.Text = CommentText

export default Comment
