import React from 'react'
import { StatisticValue, StatisticLabel, Statistic } from 'semantic-ui-react'

const StatisticExampleSize = () => (
  <div>
    <Statistic size='mini'>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
    <Statistic size='tiny'>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
    <Statistic size='small'>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
    <Statistic>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
    <Statistic size='large'>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
    <Statistic size='huge'>
      <StatisticLabel>Views</StatisticLabel>
      <StatisticValue>2,204</StatisticValue>
    </Statistic>
  </div>
)

export default StatisticExampleSize
