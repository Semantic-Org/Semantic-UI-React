import React from 'react'
import { Statistic } from 'semantic-ui-react'

const StatisticExampleHorizontalGroup = () => (
  <Statistic.Group horizontal>
    <Statistic>
      <Statistic.Value>2,204</Statistic.Value>
      <Statistic.Label>Views</Statistic.Label>
    </Statistic>
    <Statistic>
      <Statistic.Value>3,322</Statistic.Value>
      <Statistic.Label>Downloads</Statistic.Label>
    </Statistic>
    <Statistic>
      <Statistic.Value>22</Statistic.Value>
      <Statistic.Label>Tasks</Statistic.Label>
    </Statistic>
  </Statistic.Group>
)

export default StatisticExampleHorizontalGroup
