import _ from 'lodash'
import React, { Component } from 'react'
import {
  StatisticValue,
  StatisticLabel,
  StatisticGroup,
  Divider,
  Statistic,
} from 'semantic-ui-react'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
]

export default class StatisticExampleColoredGroup extends Component {
  state = { color: colors[0] }

  handleColorChange = (e) => this.setState({ color: e.target.value })

  render() {
    const { color } = this.state

    return (
      <div>
        <select onChange={this.handleColorChange}>
          {_.map(colors, (c) => (
            <option key={c} value={c}>
              {_.startCase(c)}
            </option>
          ))}
        </select>

        <Divider hidden />

        <StatisticGroup color={color}>
          <Statistic>
            <StatisticValue>22</StatisticValue>
            <StatisticLabel>Faves</StatisticLabel>
          </Statistic>
          <Statistic>
            <StatisticValue>31,200</StatisticValue>
            <StatisticLabel>Views</StatisticLabel>
          </Statistic>
          <Statistic>
            <StatisticValue>22</StatisticValue>
            <StatisticLabel>Members</StatisticLabel>
          </Statistic>
        </StatisticGroup>
      </div>
    )
  }
}
