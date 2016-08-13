import React from 'react'

import { META, getUnhandledProps } from '../../lib'

const _meta = {
  name: 'Comment',
  type: META.TYPES.VIEW,
  props: {},
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
