import React from 'react'

import { META, getUnhandledProps } from '../../lib'

const _meta = {
  name: 'Comment',
  type: META.TYPES.VIEW,
  props: {},
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
