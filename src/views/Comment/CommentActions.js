import React from 'react'

import { META, getUnhandledProps } from '../../lib'

const _meta = {
  name: 'CommentActions',
  type: META.TYPES.VIEW,
}

function CommentActions(props) {
  const rest = getUnhandledProps(CommentActions, props)
  return (
    <div {...rest}>
        
    </div> 
  )
}

CommentActions._meta = _meta


export default CommentActions
