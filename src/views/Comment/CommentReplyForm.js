import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getUnhandledProps, META } from '../../lib'
import { Form } from '../../collections'

function CommentReplyForm(props) {
  const { className } = props
  const classes = cx('reply', className)
  const rest = getUnhandledProps(CommentReplyForm, props)

  return <Form {...rest} className={classes} />
}

CommentReplyForm._meta = {
  name: 'CommentReplyFormForm',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentReplyForm.propTypes = {
  /** Classes to add to the CommentReplyForm className. */
  className: PropTypes.string,
}

export default CommentReplyForm
