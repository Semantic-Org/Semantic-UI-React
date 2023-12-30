import React from 'react'
import {
  StatisticValue,
  StatisticLabel,
  StatisticGroup,
  Statistic,
} from 'semantic-ui-react'

const StatisticExampleGroup = () => (
  <div>
    <StatisticGroup>
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

export default StatisticExampleGroup
