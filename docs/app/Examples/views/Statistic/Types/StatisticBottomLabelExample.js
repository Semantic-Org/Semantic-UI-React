import React, { Component } from 'react'
import { Statistic } from 'stardust'

export default class StatisticBottomLabelExample extends Component {
  render() {
    return (
      <Statistic>
        <Statistic.Value>5,550</Statistic.Value>
        <Statistic.Label>Downloads</Statistic.Label>
      </Statistic>
    )
  }
}
