import React from 'react'

import { META, getUnhandledProps } from '../../lib'

const _meta = {
  name: 'CommentMeta',
  type: META.TYPES.VIEW,
}

function CommentMeta(props) {
  const rest = getUnhandledProps(CommentMeta, props)
  return (
    <div {...rest}>
        
    </div> 
  )
}

CommentMeta._meta = _meta


export default CommentMeta
