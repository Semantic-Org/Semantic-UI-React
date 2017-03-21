import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import Select from '../../addons/Select'
import FormField from './FormField'

/**
 * Sugar for <Form.Field control={Select} />.
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
  as: customPropTypes.as,

  /** A FormField control prop. */
  control: FormField.propTypes.control,
}

FormSelect.defaultProps = {
  as: FormField,
  control: Select,
}

export default FormSelect
