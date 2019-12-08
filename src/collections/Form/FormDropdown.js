import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../lib'
import Dropdown from '../../modules/Dropdown'
import FormField from './FormField'

/**
 * Sugar for <Form.Field control={Dropdown} />.
 * @see Dropdown
 * @see Form
 */
function FormDropdown(props) {
  const { control } = props
  const rest = getUnhandledProps(FormDropdown, props)
  const ElementType = getElementType(FormDropdown, props)

  return <ElementType {...rest} control={control} />
}

FormDropdown.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control,
}

FormDropdown.defaultProps = {
  as: FormField,
  control: Dropdown,
}

export default FormDropdown
