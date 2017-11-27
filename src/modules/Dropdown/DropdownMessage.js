import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A message sub-component for Dropdown component.
 */
function DropdownMessage(props) {
  const { className, noResultsMessage, type, value } = props

  const classes = cx('message', className)

  let message = ''
  if (type === 'noResultsMessage') {
    message = noResultsMessage
  } else {
    message = `Max ${value} selection${value > 1 ? 's' : ''}`
  }

  const rest = getUnhandledProps(DropdownMessage, props)
  const ElementType = getElementType(DropdownMessage, props)

  return (
    <ElementType {...rest} className={classes}>{message}</ElementType>
  )
}

DropdownMessage._meta = {
  name: 'DropdownMessage',
  parent: 'Dropdown',
  type: META.TYPES.MODULE,
}

DropdownMessage.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** Message to display when there are no results. */
  noResultsMessage: PropTypes.string,

  /** The message type. */
  type: PropTypes.oneOf('maxSelections', 'noResultsMessage'),

  /** The maxSelections value. */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

export default DropdownMessage
