import React, { Component, PropTypes } from 'react'
import META from '../../utils/Meta'

class DropdownDivider extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'DropdownDivider',
    parent: 'Dropdown',
    type: META.type.module,
  }

  render() {
    return <div className='divider' {...this.props} />
  }
}

export default DropdownDivider
