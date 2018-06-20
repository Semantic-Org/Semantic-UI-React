import PropTypes from 'prop-types'
import React, { Component } from 'react'

import KnobsField from './KnobsField'
import KnobsLabel from './KnobsLabel'
import KnobsValue from './KnobsValue'
import KnobsControl from './KnobsControl'

class KnobsBoolean extends Component<any, any> {
  static propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
  }

  handleChange = ({ target: { checked } }) => {
    const { name, onChange } = this.props

    onChange({ [name]: checked })
  }

  render() {
    const { name, value } = this.props
    const booleanValue = !!value

    return (
      <KnobsField>
        <KnobsControl>
          <input type="checkbox" defaultChecked={booleanValue} onChange={this.handleChange} />
        </KnobsControl>
        <KnobsLabel>{name}</KnobsLabel>
        <KnobsValue>{value}</KnobsValue>
      </KnobsField>
    )
  }
}

export default KnobsBoolean
