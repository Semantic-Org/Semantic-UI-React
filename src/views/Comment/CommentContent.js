import React from 'react'

import { META, getUnhandledProps } from '../../lib'

const _meta = {
  name: 'CommentContent',
  type: META.TYPES.VIEW,
}

function CommentContent(props) {
  const rest = getUnhandledProps(CommentContent, props)
  return (
    <div {...rest}>
        
    </div> 
  )
}

CommentContent._meta = _meta


export default CommentContent
