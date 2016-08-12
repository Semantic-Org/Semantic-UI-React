import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import { META } from '../../lib'

class DropdownMenu extends Component {
  static propTypes = {
    /** Should be <Dropdown.Item /> components. */
    children: PropTypes.node,

    /** Classes to add to the className. */
    className: PropTypes.string,
  }

  static _meta = {
    name: 'DropdownMenu',
    parent: 'Dropdown',
    type: META.TYPES.MODULE,
  }

  render() {
    const { className, ...rest } = this.props
    const classes = cx('menu transition', className)
    return <div {...rest} className={classes} />
  }
}

export default DropdownMenu
