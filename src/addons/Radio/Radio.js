import React from 'react'
import META from '../../utils/Meta'
import Checkbox from '../../modules/Checkbox/Checkbox'

/**
 * A <Radio /> is sugar for <Checkbox type='radio' inputType='radio' />.
 * Useful for exclusive groups of type='slider' or type='toggle'.
 * @see Checkbox
 */
function Radio(props) {
  return (
    <Checkbox type='radio' {...props} inputType='radio' />
  )
}

Radio._meta = {
  library: META.library.stardust,
  name: 'Radio',
  type: META.type.addon,
}

export default Radio
