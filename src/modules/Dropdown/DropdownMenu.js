import React, { Component, PropTypes } from 'react'
import META from '../../utils/Meta'

class DropdownMenu extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'DropdownMenu',
    parent: 'Dropdown',
    type: META.type.module,
  }

  render() {
    return <div className='sd-dropdown-menu menu' {...this.props} />
  }
}

export default DropdownMenu
