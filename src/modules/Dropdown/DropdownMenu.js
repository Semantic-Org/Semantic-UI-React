import React, { PropTypes, Component } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

export default class DropdownMenu extends Component {
  render() {
    const { children, className } = this.props
    const classes = cx('menu transition', className, { visible: this.props.opened })
    const rest = getUnhandledProps(DropdownMenu, this.props)
    const ElementType = getElementType(DropdownMenu, this.props)

    return (<ElementType {...rest} className={classes}>
      {children}</ElementType>)
  }
}

DropdownMenu._meta = {
  name: 'DropdownMenu',
  parent: 'Dropdown',
  type: META.TYPES.MODULE,
}

DropdownMenu.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Should be <Dropdown.Item /> components. */
  children: PropTypes.node,

  /** Classes to add to the className. */
  className: PropTypes.string,

  /** Will mark the menu as opened when nested in another menu */
  opened: PropTypes.bool,
}
