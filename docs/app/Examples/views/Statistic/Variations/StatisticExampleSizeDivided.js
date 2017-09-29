import React from 'react'
import { Divider, Statistic } from 'semantic-ui-react'

const StatisticExampleSizeDivided = () => (
  <div>
    <Statistic size='mini'>
      <Statistic.Label>Views</Statistic.Label>
      <Statistic.Value>2,204</Statistic.Value>
    </Statistic>
    <Divider />

    <Statistic size='tiny'>
      <Statistic.Label>Views</Statistic.Label>
      <Statistic.Value>2,204</Statistic.Value>
    </Statistic>
    <Divider />

    <Statistic size='small'>
      <Statistic.Label>Views</Statistic.Label>
      <Statistic.Value>2,204</Statistic.Value>
    </Statistic>
    <Divider />

    <Statistic>
      <Statistic.Label>Views</Statistic.Label>
      <Statistic.Value>2,204</Statistic.Value>
    </Statistic>
    <Divider />

    <Statistic size='large'>
      <Statistic.Label>Views</Statistic.Label>
      <Statistic.Value>2,204</Statistic.Value>
    </Statistic>
    <Divider />

    <Statistic size='huge'>
      <Statistic.Label>Views</Statistic.Label>
      <Statistic.Value>2,204</Statistic.Value>
    </Statistic>
  </div>
)

export default StatisticExampleSizeDivided
