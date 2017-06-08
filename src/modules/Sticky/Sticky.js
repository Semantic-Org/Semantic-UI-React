import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { META } from '../../lib'

class Sticky extends Component {
  static _meta = {
    name: 'Sticky',
    type: META.TYPES.MODULE,
  }

  static propTypes = {
    as: PropTypes.function,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    return <div {...this.props}>{this.props.children}</div>
  }
}

export default Sticky
