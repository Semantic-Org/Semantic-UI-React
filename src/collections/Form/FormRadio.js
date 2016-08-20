import React, { PropTypes } from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import FormField from './FormField'
import { Radio } from '../../addons'

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
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** A FormField control prop */
  control: FormField.propTypes.control,
}

FormRadio.defaultProps = {
  as: FormField,
  control: Radio,
}

export default FormRadio
