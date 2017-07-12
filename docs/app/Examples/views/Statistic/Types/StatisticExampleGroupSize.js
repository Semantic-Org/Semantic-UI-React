import React from 'react'
import { Statistic } from 'semantic-ui-react'

const items = [
  { label: 'Faves', value: '22' },
  { label: 'Views', value: '31,200' },
  { label: 'Members', value: '22' },
]

const StatisticExampleGroupSize = () => (
  <div>
    <Statistic.Group items={items} size='mini' />
    <Statistic.Group items={items} size='small' />
    <Statistic.Group items={items} size='large' />
  </div>
)

export default StatisticExampleGroupSize
