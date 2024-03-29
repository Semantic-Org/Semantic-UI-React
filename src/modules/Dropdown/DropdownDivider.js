import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import { getComponentType, getUnhandledProps } from '../../lib'

/**
 * A dropdown menu can contain dividers to separate related content.
 */
const DropdownDivider = React.forwardRef(function (props, ref) {
  const { className } = props

  const classes = cx('divider', className)
  const rest = getUnhandledProps(DropdownDivider, props)
  const ElementType = getComponentType(props)

  return <ElementType {...rest} className={classes} ref={ref} />
})

DropdownDivider.displayName = 'DropdownDivider'
DropdownDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,
}

export default DropdownDivider
