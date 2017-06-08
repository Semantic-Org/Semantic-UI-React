import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { META } from '../../lib'

class Sticky extends Component {
  static _meta = {
    name: 'Sticky',
    type: META.TYPES.MODULE,
  }

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default Sticky
