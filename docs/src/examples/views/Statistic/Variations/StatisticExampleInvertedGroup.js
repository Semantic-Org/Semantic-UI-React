import React from 'react'
import {
  StatisticValue,
  StatisticLabel,
  StatisticGroup,
  Segment,
  Statistic,
} from 'semantic-ui-react'

const StatisticExampleInvertedGroup = () => (
  <Segment inverted>
    <StatisticGroup inverted>
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
  </Segment>
)

export default StatisticExampleInvertedGroup
