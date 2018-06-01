import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class ComponentPropDefaultValue extends PureComponent {
  static propTypes = {
    value: PropTypes.node,
  }

  render() {
    const { value } = this.props
    return _.isNil(value) ? null : <code>{value}</code>
  }
}
