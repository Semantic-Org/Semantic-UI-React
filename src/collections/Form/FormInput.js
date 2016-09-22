import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import FormField from './FormField'
import { Input } from '../../elements'

/**
 * Sugar for <Form.Field control={Input} />
 * @see Form
 * @see Input
 */
function FormInput(props) {
  const { control } = props
  const rest = getUnhandledProps(FormInput, props)
  const ElementType = getElementType(FormInput, props)
  return <ElementType {...rest} control={control} />
}

FormInput._meta = {
  name: 'FormInput',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
}

FormInput.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A FormField control prop */
  control: FormField.propTypes.control,
}

FormInput.defaultProps = {
  as: FormField,
  control: Input,
}

export default FormInput
