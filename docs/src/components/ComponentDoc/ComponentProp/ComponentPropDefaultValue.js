import isNil from 'lodash/isNil'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class ComponentPropDefaultValue extends PureComponent {
  static propTypes = {
    value: PropTypes.node,
  }

  render() {
    const { value } = this.props
    return isNil(value) ? null : <code>{value}</code>
  }
}
