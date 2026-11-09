/* eslint-disable react-hooks/static-components */
import cx from 'clsx'
import * as React from 'react'

import {
  childrenUtils,
  createShorthand,
  createShorthandFactory,
  getComponentType,
  getKeyOnly,
} from './lib'
/**
 * An item sub-component for Dropdown component.
 */
function DropdownItem(props) {
  const {
    active,
    children,
    className,
    content,
    disabled,
    description,
    flag,
    icon,
    image,
    label,
    onClick,
    selected,
    text,
    //value,
    ref,
    ...rest
  } = props

  const handleClick = React.useCallback(
    (e) => {
      onClick?.(e, props)
    },
    [onClick, props]
  )

  const classes = cx(
    getKeyOnly(active, 'active'),
    getKeyOnly(disabled, 'disabled'),
    getKeyOnly(selected, 'selected'),
    'item',
    className
  )

  //const rest = getUnhandledProps(DropdownItem, props);
  const ElementType = getComponentType(props)
  const ariaOptions = {
    role: 'option',
    'aria-disabled': disabled,
    'aria-checked': active,
    'aria-selected': selected,
  }

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType
        {...rest}
        {...ariaOptions}
        className={classes}
        onClick={handleClick}
        ref={ref}
      >
        {children}
      </ElementType>
    )
  }

  const flagElement = flag && (
    <i className={`${flag} flag`} aria-hidden="true" />
  )

  const iconElement = icon && (
    <i className={`${icon} icon`} aria-hidden="true" />
  )

  const imageElement =
    image &&
    (() => {
      const raw = typeof image === 'object' ? image : { src: image }
      const alt = typeof image === 'object' ? image.alt || '' : ''
      const imgProps = Object.fromEntries(
        Object.entries(raw).filter(([k]) => k !== 'avatar' && k !== 'alt')
      )
      return <img {...imgProps} alt={alt} className="ui mini avatar image" />
    })()

  const labelElement = createShorthand(
    'div',
    (val) => {
      return { children: val }
    },
    label,
    {
      defaultProps: { className: 'ui label' },
      autoGenerateKey: false,
    }
  )

  const descriptionElement = createShorthand(
    'span',
    (val) => {
      return { children: val }
    },
    description,
    {
      defaultProps: { className: 'description' },
      autoGenerateKey: false,
    }
  )

  const textElement = createShorthand(
    'span',
    (val) => {
      return { children: val }
    },
    childrenUtils.isNil(content) ? text : content,
    { defaultProps: { className: 'text' }, autoGenerateKey: false }
  )

  return (
    <ElementType
      {...rest}
      {...ariaOptions}
      className={classes}
      onClick={handleClick}
      ref={ref}
    >
      {imageElement}
      {iconElement}
      {flagElement}
      {labelElement}
      {descriptionElement}
      {textElement}
    </ElementType>
  )
}

DropdownItem.displayName = 'DropdownItem'
DropdownItem.create = createShorthandFactory(DropdownItem, (opts) => {
  return opts
})

export default DropdownItem
