import React from 'react'
import { Statistic } from 'semantic-ui-react'

const StatisticExampleGroup = () => (
  <div>
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>22</Statistic.Value>
        <Statistic.Label>Faves</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>31,200</Statistic.Value>
        <Statistic.Label>Views</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>22</Statistic.Value>
        <Statistic.Label>Members</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </div>
)

export default StatisticExampleGroup
