import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import META from '../../utils/Meta'

class DropdownMenu extends Component {
  static propTypes = {
    /** Should be <Dropdown.Item /> components. */
    children: PropTypes.node,

    /** Classes to add to the className. */
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'DropdownMenu',
    parent: 'Dropdown',
    type: META.type.module,
  }

  render() {
    const { className, ...rest } = this.props
    const classes = cx('menu transition', className)
    return <div {...rest} className={classes} />
  }
}

export default DropdownMenu
