import React, { PropTypes } from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import { Checkbox } from '../../modules'

/**
 * A Radio is sugar for <Checkbox type='radio' inputType='radio' />.
 * Useful for exclusive groups of sliders or toggles.
 * @see Checkbox
 * @see Form
 */
function Radio(props) {
  const { inputType, type } = props
  const rest = getUnhandledProps(Radio, props)
  const ElementType = getElementType(Radio, props)
  return <ElementType {...rest} type={type} inputType={inputType} />
}

Radio._meta = {
  name: 'Radio',
  type: META.TYPES.ADDON,
}

Radio.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** HTML input type, either checkbox or radio. */
  inputType: Checkbox.propTypes.inputType,

  /**
   * Display as a checkbox, radio, slider, or toggle.
   * The input type is `checkbox` for both slider and toggle types.
   * You can set `inputType` separately to mix and match appearance and behavior.
   */
  type: Checkbox.propTypes.type,
}

Radio.defaultProps = {
  as: Checkbox,
  inputType: 'radio',
  type: 'radio',
}

export default Radio
