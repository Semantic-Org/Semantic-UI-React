import React from 'react'
import {
  StatisticValue,
  StatisticLabel,
  StatisticGroup,
  Statistic,
} from 'semantic-ui-react'

const StatisticExampleHorizontalGroup = () => (
  <StatisticGroup horizontal>
    <Statistic>
      <StatisticValue>2,204</StatisticValue>
      <StatisticLabel>Views</StatisticLabel>
    </Statistic>
    <Statistic>
      <StatisticValue>3,322</StatisticValue>
      <StatisticLabel>Downloads</StatisticLabel>
    </Statistic>
    <Statistic>
      <StatisticValue>22</StatisticValue>
      <StatisticLabel>Tasks</StatisticLabel>
    </Statistic>
  </StatisticGroup>
)

export default StatisticExampleHorizontalGroup
