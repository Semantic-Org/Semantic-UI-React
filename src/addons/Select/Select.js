import React, { PropTypes } from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import { Dropdown } from '../../modules'

/**
 * A <Select /> is sugar for <Dropdown selection />.
 * @see Dropdown
 */
function Select(props) {
  const ElementType = getElementType(Select, props)
  const rest = getUnhandledProps(Select, props)
  return <ElementType {...rest} selection />
}

Select._meta = {
  name: 'Select',
  type: META.TYPES.ADDON,
}

Select.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
}

Select.defaultProps = {
  as: Dropdown,
}

export default Select
