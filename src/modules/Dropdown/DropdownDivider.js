import React, { Component, PropTypes } from 'react'

import { META } from '../../lib'

class DropdownDivider extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static _meta = {
    name: 'DropdownDivider',
    parent: 'Dropdown',
    type: META.TYPES.MODULE,
  }

  render() {
    return <div className='divider' {...this.props} />
  }
}

export default DropdownDivider
