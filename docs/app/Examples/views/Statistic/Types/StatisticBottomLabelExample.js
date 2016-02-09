import React, { Component } from 'react'
import { Statistic } from 'stardust'

export default class StatisticBottomLabelExample extends Component {
  render() {
    return (
      <Statistic>
        <Statistic.Label>5,550</Statistic.Label>
        <Statistic.Value>Downloads</Statistic.Value>
      </Statistic>
    )
  }
}
