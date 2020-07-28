import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class ComponentPropDefaultValue extends PureComponent {
  render() {
    const { value } = this.props
    return _.isNil(value) ? null : <code>{value}</code>
  }
}

ComponentPropDefaultValue.propTypes = {
  value: PropTypes.node,
}
