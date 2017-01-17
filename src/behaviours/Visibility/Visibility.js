import React, { Component } from 'react'
import { META } from '../../lib'

const _meta = {
  name: 'Visibility',
  type: META.TYPES.BEHAVIOUR,
}

class Visibility extends Component {
  static _meta = _meta;

  render() {
    return <div>{this.props.children}</div>
  }
}

export default Visibility
