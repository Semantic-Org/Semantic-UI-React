import React from 'react'

import { META, getUnhandledProps } from '../../lib'

const _meta = {
  name: 'Comment',
  type: META.TYPES.VIEW,
  props: {},
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
