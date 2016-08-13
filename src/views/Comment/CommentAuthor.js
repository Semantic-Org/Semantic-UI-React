import React from 'react'

import { META, getUnhandledProps } from '../../lib'

const _meta = {
  name: 'CommentAuthor',
  type: META.TYPES.VIEW,
}

function CommentAuthor(props) {
  const rest = getUnhandledProps(CommentAuthor, props)
  return (
    <div {...rest}>
    </div> 
  )
}

CommentAuthor._meta = _meta


export default CommentAuthor
