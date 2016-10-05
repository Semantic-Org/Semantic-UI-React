import React from 'react'

import { META } from '../../lib'
import Dropdown from '../../modules/Dropdown'

/**
 * A Select is sugar for <Dropdown selection />.
 * @see Dropdown
 * @see Form
 */
function Select(props) {
  return <Dropdown {...props} selection />
}

Select._meta = {
  name: 'Select',
  type: META.TYPES.ADDON,
}

export default Select
