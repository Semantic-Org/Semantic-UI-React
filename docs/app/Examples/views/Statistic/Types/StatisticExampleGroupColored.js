import React from 'react'
import { Statistic } from 'semantic-ui-react'

const items = [
  { label: 'Faves', value: '22' },
  { label: 'Views', value: '31,200' },
  { label: 'Members', value: '22' },
]

const StatisticExampleGroupColored = () => (
  <Statistic.Group items={items} color='blue' />
)

export default StatisticExampleGroupColored
