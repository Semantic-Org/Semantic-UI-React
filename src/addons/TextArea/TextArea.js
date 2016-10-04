import React from 'react'
import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A simple <textarea> wrapper for use in Form.TextArea.
 * We may add more features to the TextArea in the future.
 * @see Form
 */
function TextArea(props) {
  const rest = getUnhandledProps(TextArea, props)
  const ElementType = getElementType(TextArea, props)

  return <ElementType {...rest} />
}

TextArea._meta = {
  name: 'TextArea',
  type: META.TYPES.ADDON,
}

TextArea.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,
}

TextArea.defaultProps = {
  as: 'textarea',
}

export default TextArea
