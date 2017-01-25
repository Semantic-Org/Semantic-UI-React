import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib/index'
import Radio from '../../addons/Radio/index'

import FormField from './FormField'

/**
 * Sugar for <Form.Field control={Radio} />
 * @see Form
 * @see Radio
 */
function FormRadio(props) {
  const { control } = props
  const rest = getUnhandledProps(FormRadio, props)
  const ElementType = getElementType(FormRadio, props)

  return <ElementType {...rest} control={control} />
}

FormRadio._meta = {
  name: 'FormRadio',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
}

FormRadio.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A FormField control prop */
  control: FormField.propTypes.control,
}

FormRadio.defaultProps = {
  as: FormField,
  control: Radio,
}

export default FormRadio
