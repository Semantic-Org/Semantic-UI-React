import React from 'react'

import META from '../../utils/Meta'
import Dropdown from '../../modules/Dropdown/Dropdown'

/**
 * A <Select /> is sugar for <Dropdown selection />.
 * @see Dropdown
 */
function Select(props) {
  return <Dropdown {...props} selection />
}

Select._meta = {
  name: 'Select',
  type: META.type.addon,
}

export default Select
