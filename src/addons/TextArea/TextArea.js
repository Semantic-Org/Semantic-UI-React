import React from 'react'
import { META } from '../../lib'

/**
 * A simple <textarea> wrapper for use in Form.TextArea.
 * We may add more features to the TextArea in the future.
 * @see Form
 */
function TextArea(props) {
  return <textarea {...props} />
}

TextArea._meta = {
  name: 'TextArea',
  type: META.TYPES.ADDON,
}

export default TextArea
