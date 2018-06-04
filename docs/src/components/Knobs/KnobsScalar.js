import PropTypes from 'prop-types'
import React, { Component } from 'react'

import KnobsField from './KnobsField'
import KnobsLabel from './KnobsLabel'
import KnobsValue from './KnobsValue'

class KnobsScalar extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }

  componentWillMount() {
    const { value } = this.props
    const hasDecimal = /\.\d/.test(value)
    this.parseValue = val => (hasDecimal ? parseFloat(val) : parseInt(val, 10))

    this.defaultValue = this.parseValue(value)
    this.defaultUnit = `${value}`.replace(this.defaultValue, '')

    this.makeUnitValue = val => `${val}${this.defaultUnit}`
  }

  handleChange = ({ target: { value } }) => {
    const { name, onChange } = this.props

    onChange({ [name]: this.makeUnitValue(value) })
  }

  render() {
    const { name, value } = this.props

    return (
      <KnobsField>
        <KnobsLabel>{name}</KnobsLabel>
        <KnobsValue>{value}</KnobsValue>
        <br />
        <input
          type='range'
          min='0'
          max={this.defaultValue * 3}
          step='1'
          value={this.parseValue(value)}
          onChange={this.handleChange}
        />
      </KnobsField>
    )
  }
}

export default KnobsScalar
