import React from 'react'

import { META, getUnhandledProps } from '../../lib'

const _meta = {
  name: 'Comment',
  type: META.TYPES.VIEW,
  props: {},
}

function CommentAction(props) {
  const rest = getUnhandledProps(CommentAction, props)
  return (
    <div {...rest}>
        
    </div> 
  )
}

CommentAction._meta = _meta


export default CommentAction
