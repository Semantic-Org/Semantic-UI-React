import React, { PropTypes } from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import FormField from './FormField'
import { Dropdown } from '../../modules'

/**
 * Sugar for <Form.Field control={Dropdown} />
 * @see Dropdown
 * @see Form
 */
function FormDropdown(props) {
  const { control } = props
  const rest = getUnhandledProps(FormDropdown, props)
  const ElementType = getElementType(FormDropdown, props)
  return <ElementType {...rest} control={control} />
}

FormDropdown._meta = {
  name: 'FormDropdown',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
}

FormDropdown.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** A FormField control prop */
  control: FormField.propTypes.control,
}

FormDropdown.defaultProps = {
  as: FormField,
  control: Dropdown,
}

export default FormDropdown
