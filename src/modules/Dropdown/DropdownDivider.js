import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../lib'

/**
 * A dropdown menu can contain dividers to separate related content.
 */
function DropdownDivider(props) {
  const { className } = props
  const classes = cx('divider', className)
  const rest = getUnhandledProps(DropdownDivider, props)
  const ElementType = getElementType(DropdownDivider, props)

  return <ElementType {...rest} className={classes} />
}

DropdownDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,
}

export default DropdownDivider
