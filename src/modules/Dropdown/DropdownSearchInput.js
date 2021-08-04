import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { createShorthandFactory, getElementType, getUnhandledProps } from '../../lib'

/**
 * A search item sub-component for Dropdown component.
 */
const DropdownSearchInput = React.forwardRef(function (props, ref) {
  const { autoComplete, className, tabIndex, type, value } = props

  const handleChange = (e) => {
    const newValue = _.get(e, 'target.value')

    _.invoke(props, 'onChange', e, { ...props, value: newValue })
  }

  const classes = cx('search', className)
  const ElementType = getElementType(DropdownSearchInput, props)
  const rest = getUnhandledProps(DropdownSearchInput, props)

  return (
    <ElementType
      aria-autocomplete='list'
      {...rest}
      autoComplete={autoComplete}
      className={classes}
      onChange={handleChange}
      ref={ref}
      tabIndex={tabIndex}
      type={type}
      value={value}
    />
  )
})

DropdownSearchInput.displayName = 'DropdownSearchInput'
DropdownSearchInput.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** An input can have the auto complete. */
  autoComplete: PropTypes.string,

  /** Additional classes. */
  className: PropTypes.string,

  /** An input can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The HTML input type. */
  type: PropTypes.string,

  /** Stored value. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

DropdownSearchInput.defaultProps = {
  as: 'input',
  autoComplete: 'off',
  type: 'text',
}

DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, (type) => ({ type }))

export default DropdownSearchInput
