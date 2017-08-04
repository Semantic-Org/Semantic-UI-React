import React from 'react'
import { Statistic } from 'semantic-ui-react'

const items = [
  { key: '22', label: 'Saves', value: '22' },
  { key: 'Three Thousand', label: 'Signups', text: true, value: 'Three Thousand' },
  { key: '5', label: 'Flights', value: '5' },
  { key: '42', label: 'Team Members', value: '42' },
]

const StatisticExampleProps = () => (
  <div>
    <Statistic.Group>
      <Statistic label='Saves' value='22' />
      <Statistic label='Signups' value='Three Thousand' text />
      <Statistic label='Flights' value='5' />
      <Statistic label='Team Members' value='42' />
    </Statistic.Group>

    <Statistic.Group items={items} />
  </div>
)

export default StatisticExampleProps
