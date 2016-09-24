import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import FormField from './FormField'
import { TextArea } from '../../addons'

/**
 * Sugar for <Form.Field control={TextArea} />
 * @see Form
 * @see TextArea
 */
function FormTextArea(props) {
  const { control } = props
  const rest = getUnhandledProps(FormTextArea, props)
  const ElementType = getElementType(FormTextArea, props)
  return <ElementType {...rest} control={control} />
}

FormTextArea._meta = {
  name: 'FormTextArea',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
}

FormTextArea.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A FormField control prop */
  control: FormField.propTypes.control,
}

FormTextArea.defaultProps = {
  as: FormField,
  control: TextArea,
}

export default FormTextArea
