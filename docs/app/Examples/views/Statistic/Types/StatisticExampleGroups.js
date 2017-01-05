import React from 'react'
import { Statistic } from 'semantic-ui-react'

const items = [
  { label: 'Faves', value: '22' },
  { label: 'Views', value: '31,200' },
  { label: 'Members', value: '22' },
]

const StatisticExampleGroups = () => (
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
      <Statistic label='Members' value='22' />
    </Statistic.Group>

    <Statistic.Group items={items} />
  </div>
)

export default StatisticExampleGroups
