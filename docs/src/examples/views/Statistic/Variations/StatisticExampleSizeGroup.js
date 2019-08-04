import _ from 'lodash'
import React, { Component } from 'react'
import { Divider, Statistic } from 'semantic-ui-react'

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

        <Statistic.Group size={size}>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Faves</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>31,200</Statistic.Value>
            <Statistic.Label>Views</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Members</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    )
  }
}
