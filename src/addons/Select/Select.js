import React, { PropTypes } from 'react'

import { getUnhandledProps, META } from '../../lib'
import Dropdown from '../../modules/Dropdown'

/**
 * A Select is sugar for <Dropdown selection />.
 * @see Dropdown
 * @see Form
 */
function Select(props) {
  const { selection } = props
  const rest = getUnhandledProps(Select, props)
  return <Dropdown {...rest} selection={selection} />
}

Select._meta = {
  name: 'Select',
  type: META.TYPES.ADDON,
}

Select.propTypes = {
  /** selection value */
  selection: PropTypes.bool,
}

Select.defaultProps = {
  selection: true,
}

export default Select
