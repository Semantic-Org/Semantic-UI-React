import React from 'react'
import {
  StatisticValue,
  StatisticLabel,
  Divider,
  Statistic,
} from 'semantic-ui-react'

const StatisticExampleSizeDivided = () => (
  <div>
    <Statistic size='mini'>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
    <Divider />

    <Statistic size='tiny'>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
    <Divider />

    <Statistic size='small'>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
    <Divider />

    <Statistic>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
    <Divider />

    <Statistic size='large'>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
    <Divider />

    <Statistic size='huge'>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
  </div>
)

export default StatisticExampleSizeDivided
