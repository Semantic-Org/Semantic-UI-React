import _ from 'lodash'
import React, { Component } from 'react'
import {
  StatisticValue,
  StatisticLabel,
  StatisticGroup,
  Divider,
  Statistic,
} from 'semantic-ui-react'

const sizes = ['mini', 'tiny', 'small', 'large', 'huge']

export default class StatisticExampleSizeGroup extends Component {
  state = { size: sizes[0] }

  handleSizeChange = (e) => this.setState({ size: e.target.value })

  render() {
    const { size } = this.state

    return (
      <div>
        <select onChange={this.handleSizeChange}>
          {_.map(sizes, (s) => (
            <option key={s} value={s}>
              {_.startCase(s)}
            </option>
          ))}
        </select>

        <Divider hidden />

        <StatisticGroup size={size}>
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
