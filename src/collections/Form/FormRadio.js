import PropTypes from 'prop-types'
import React from 'react'

import { getComponentType, getUnhandledProps } from '../../lib'
import Radio from '../../addons/Radio'
import FormField from './FormField'

/**
 * Sugar for <Form.Field control={Radio} />.
 * @see Form
 * @see Radio
 */
const FormRadio = React.forwardRef(function (props, ref) {
  const { control = Radio } = props

  const rest = getUnhandledProps(FormRadio, props)
  const ElementType = getComponentType(props, { defaultAs: FormField })

  return <ElementType {...rest} control={control} ref={ref} />
})

FormRadio.displayName = 'FormRadio'
FormRadio.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control,
}

export default FormRadio
