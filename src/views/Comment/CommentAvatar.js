import React from 'react'

import { META, getUnhandledProps } from '../../lib'

const _meta = {
  name: 'CommentAvatar',
  type: META.TYPES.VIEW,
}

function CommentAvatar(props) {
  const rest = getUnhandledProps(CommentAvatar, props)
  return (
    <div {...rest}>
        
    </div> 
  )
}

CommentAvatar._meta = _meta


export default CommentAvatar
