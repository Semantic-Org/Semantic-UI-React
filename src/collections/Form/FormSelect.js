import PropTypes from 'prop-types'
import * as React from 'react'

import { getComponentType, getUnhandledProps } from '../../lib'
import Select from '../../addons/Select'
import Dropdown from '../../modules/Dropdown'
import FormField from './FormField'

/**
 * Sugar for <Form.Field control={Select} />.
 * @see Form
 * @see Select
 */
const FormSelect = React.forwardRef(function (props, ref) {
  const { control = Select, options } = props

  const rest = getUnhandledProps(FormSelect, props)
  const ElementType = getComponentType(props, { defaultAs: FormField })

  return <ElementType {...rest} control={control} options={options} ref={ref} />
})

FormSelect.displayName = 'FormSelect'
FormSelect.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control,

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: PropTypes.arrayOf(PropTypes.shape(Dropdown.Item.propTypes)).isRequired,
}

export default FormSelect
