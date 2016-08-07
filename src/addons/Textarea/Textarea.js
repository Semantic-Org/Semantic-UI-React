import React, { Component, PropTypes } from 'react'
import META from '../../utils/Meta'

export default class Textarea extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
  }

  static _meta = {
    name: 'Textarea',
    type: META.type.addon,
  }

  render() {
    return (
      <textarea {...this.props} />
    )
  }
}
