import React, { PropTypes } from 'react'

import { getUnhandledProps, META } from '../../lib'
import Checkbox from '../../modules/Checkbox'

/**
 * A Radio is sugar for <Checkbox radio />.
 * Useful for exclusive groups of sliders or toggles.
 * @see Checkbox
 * @see Form
 */
function Radio(props) {
  const { slider, toggle, type } = props
  const rest = getUnhandledProps(Radio, props)
  // const ElementType = getElementType(Radio, props)
  // radio, slider, toggle are exclusive
  // use an undefined radio if slider or toggle are present
  const radio = !(slider || toggle) || undefined

  return <Checkbox {...rest} type={type} radio={radio} slider={slider} toggle={toggle} />
}

Radio._meta = {
  name: 'Radio',
  type: META.TYPES.ADDON,
  props: {
    type: Checkbox._meta.props.type,
  },
}

Radio.propTypes = {
  /** Format to emphasize the current selection state */
  slider: Checkbox.propTypes.slider,

  /** Format to show an on or off choice */
  toggle: Checkbox.propTypes.toggle,

  /** HTML input type, either checkbox or radio. */
  type: PropTypes.oneOf(Radio._meta.props.type),
}

Radio.defaultProps = {
  type: 'radio',
}

export default Radio
