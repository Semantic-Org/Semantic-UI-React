import React from 'react'
import { META } from '../../lib'
import { Checkbox } from '../../modules'

/**
 * A <Radio /> is sugar for <Checkbox type='radio' inputType='radio' />.
 * Useful for exclusive groups of type='slider' or type='toggle'.
 * @see Checkbox
 */
function Radio(props) {
  return <Checkbox type='radio' {...props} inputType='radio' />
}

Radio._meta = {
  name: 'Radio',
  type: META.TYPES.ADDON,
}

export default Radio
