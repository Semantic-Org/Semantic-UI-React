import React from 'react'

import Dropdown from '../../modules/Dropdown'

/**
 * A Select is sugar for <Dropdown selection />.
 * @see Dropdown
 * @see Form
 */
function Select(props) {
  return <Dropdown {...props} selection />
}

Select.Divider = Dropdown.Divider
Select.Header = Dropdown.Header
Select.Item = Dropdown.Item
Select.Menu = Dropdown.Menu

export default Select
