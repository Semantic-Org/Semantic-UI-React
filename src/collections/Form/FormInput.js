import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../lib'
import Input from '../../elements/Input'
import FormField from './FormField'

/**
 * Sugar for <Form.Field control={Input} />.
 * @see Form
 * @see Input
 */
const FormInput = React.forwardRef(function (props, ref) {
  const { control } = props
  const rest = getUnhandledProps(FormInput, props)
  const ElementType = getElementType(FormInput, props)

  return <ElementType {...rest} control={control} ref={ref} />
})

FormInput.displayName = 'FormInput'
FormInput.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control,
}

FormInput.defaultProps = {
  as: FormField,
  control: Input,
}

export default FormInput
