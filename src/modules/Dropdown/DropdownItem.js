import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  childrenUtils,
  createShorthand,
  customPropTypes,
  META,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'
import Flag from '../../elements/Flag'
import Icon from '../../elements/Icon'
import Image from '../../elements/Image'
import Label from '../../elements/Label'

/**
 * An item sub-component for Dropdown component
 */
export default class DropdownItem extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Style as the currently chosen item. */
    active: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Additional text with less emphasis. */
    description: customPropTypes.itemShorthand,

    /** A dropdown item can be disabled. */
    disabled: PropTypes.bool,

    /** Shorthand for Flag. */
    flag: customPropTypes.itemShorthand,

    /** Shorthand for Icon. */
    icon: customPropTypes.itemShorthand,

    /** Shorthand for Image. */
    image: customPropTypes.itemShorthand,

    /** Shorthand for Label. */
    label: customPropTypes.itemShorthand,

    /**
     * The item currently selected by keyboard shortcut.
     * This is not the active item.
     */
    selected: PropTypes.bool,

    /** Display text. */
    text: customPropTypes.contentShorthand,

    /** Stored value */
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** Called on click with (event, value, text). */
    onClick: PropTypes.func,
  }

  static _meta = {
    name: 'DropdownItem',
    parent: 'Dropdown',
    type: META.TYPES.MODULE,
  }

  handleClick = (e) => {
    const { onClick, value } = this.props

    if (onClick) onClick(e, value)
  }

  render() {
    const {
      active,
      children,
      className,
      disabled,
      description,
      flag,
      icon,
      image,
      label,
      selected,
      text,
    } = this.props

    const classes = cx(
      useKeyOnly(active, 'active'),
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(selected, 'selected'),
      'item',
      className,
    )
    // add default dropdown icon if item contains another menu
    const iconName = icon || childrenUtils.someByType(children, 'DropdownMenu') && 'dropdown'
    const rest = getUnhandledProps(DropdownItem, this.props)
    const ElementType = getElementType(DropdownItem, this.props)

    if (children) {
      return <ElementType {...rest} className={classes} onClick={this.handleClick}>{children}</ElementType>
    }

    const flagElement = Flag.create(flag)
    const iconElement = Icon.create(iconName)
    const imageElement = Image.create(image)
    const labelElement = Label.create(label)
    const descriptionElement = createShorthand(
      'span',
      val => ({ className: 'description', children: val }),
      description,
    )

    if (descriptionElement) {
      return (
        <ElementType {...rest} className={classes} onClick={this.handleClick}>
          {imageElement}
          {iconElement}
          {flagElement}
          {labelElement}
          {descriptionElement}
          {createShorthand('span', val => ({ className: 'text', children: val }), text)}
        </ElementType>
      )
    }

    return (
      <ElementType {...rest} className={classes} onClick={this.handleClick}>
        {imageElement}
        {iconElement}
        {flagElement}
        {labelElement}
        {text}
      </ElementType>
    )
  }
}
