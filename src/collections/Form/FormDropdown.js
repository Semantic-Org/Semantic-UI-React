import PropTypes from 'prop-types'
import React from 'react'

import { getComponentType, getUnhandledProps } from '../../lib'
import Dropdown from '../../modules/Dropdown'
import FormField from './FormField'

/**
 * Sugar for <Form.Field control={Dropdown} />.
 * @see Dropdown
 * @see Form
 */
const FormDropdown = React.forwardRef(function (props, ref) {
  const { control = Dropdown } = props

  const rest = getUnhandledProps(FormDropdown, props)
  const ElementType = getComponentType(props, { defaultAs: FormField })

  return <ElementType {...rest} control={control} ref={ref} />
})

FormDropdown.displayName = 'FormDropdown'
FormDropdown.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control,
}

export default FormDropdown
