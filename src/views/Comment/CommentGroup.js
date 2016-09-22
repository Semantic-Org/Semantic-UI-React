import React from 'react'

import { META, getUnhandledProps } from '../../lib'

const _meta = {
  name: 'CommentGroup',
  type: META.TYPES.VIEW,
}

function CommentGroup(props) {
  const rest = getUnhandledProps(CommentGroup, props)
  return (
    <div {...rest}>
        
    </div> 
  )
}

CommentGroup._meta = _meta


export default CommentGroup
