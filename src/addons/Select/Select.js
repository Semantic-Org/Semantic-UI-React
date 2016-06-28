import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import Dropdown from '../../modules/Dropdown/Dropdown'

/**
 * A <Select /> is sugar for <Dropdown selection />.
 * @see Dropdown
 */
function Select(props) {
  return <Dropdown {...props} selection />
}

Select.propTypes = {
  /** Classes to add to the className. */
  className: PropTypes.string,
}

Select._meta = {
  library: META.library.stardust,
  name: 'Select',
  type: META.type.addon,
}

export default Select
