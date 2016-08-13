import React, { Component, PropTypes } from 'react'
import { META } from '../../lib'

export default class Textarea extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
  }

  static _meta = {
    name: 'Textarea',
    type: META.TYPES.ADDON,
  }

  render() {
    return (
      <textarea {...this.props} />
    )
  }
}
