import React, { Component } from 'react'
import { Statistic } from 'stardust'

export default class StatisticTopLabelExample extends Component {
  render() {
    return (
      <Statistic>
        <Statistic.Label>Views</Statistic.Label>
        <Statistic.Value>40,509</Statistic.Value>
      </Statistic>
    )
  }
}
