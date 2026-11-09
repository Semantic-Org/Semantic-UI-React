import cx from 'clsx'
import * as React from 'react'
import {
  createShorthandFactory,
  getComponentType,
  getUnhandledProps,
} from './lib'

/**
 * A search item sub-component for Dropdown component.
 */
const DropdownSearchInput = React.forwardRef((props, ref) => {
  const {
    autoComplete = 'off',
    className,
    onChange,
    tabIndex,
    type = 'text',
    value,
  } = props

  const handleChange = (e) => {
    const newValue = e.target.value
    onChange?.(e, { ...props, value: newValue })
  }

  const classes = cx('search', className)

  const ElementType = getComponentType(props, { defaultAs: 'input' })
  const rest = getUnhandledProps(DropdownSearchInput, props)

  return (
    <ElementType
      aria-autocomplete="list"
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
DropdownSearchInput.create = createShorthandFactory(
  DropdownSearchInput,
  (type) => {
    return { type }
  }
)

export default DropdownSearchInput
