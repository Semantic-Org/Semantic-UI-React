import React from 'react'

import { META, getUnhandledProps } from '../../lib'

const _meta = {
  name: 'CommentText',
  type: META.TYPES.VIEW,
}

function CommentText(props) {
  const rest = getUnhandledProps(CommentText, props)
  return (
    <div {...rest}>
        
    </div> 
  )
}

CommentText._meta = _meta

export default CommentText
