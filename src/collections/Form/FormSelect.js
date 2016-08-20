import React, { PropTypes } from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import FormField from './FormField'
import { Select } from '../../addons'

/**
 * Sugar for <Form.Field control={Select} />
 * @see Form
 * @see Select
 */
function FormSelect(props) {
  const { control } = props
  const rest = getUnhandledProps(FormSelect, props)
  const ElementType = getElementType(FormSelect, props)

  return <ElementType {...rest} control={control} />
}

FormSelect._meta = {
  name: 'FormSelect',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
}

FormSelect.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** A FormField control prop */
  control: FormField.propTypes.control,
}

FormSelect.defaultProps = {
  as: FormField,
  control: Select,
}

export default FormSelect
