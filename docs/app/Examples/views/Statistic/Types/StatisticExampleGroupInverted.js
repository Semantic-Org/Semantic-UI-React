import React from 'react'
import { Segment, Statistic } from 'semantic-ui-react'

const items = [
  { label: 'Faves', value: '22' },
  { label: 'Views', value: '31,200' },
  { label: 'Members', value: '22' },
  { label: 'Downloads', value: '3,200' },
  { label: 'Likes', value: '10,000' },
]

const StatisticExampleGroupInverted = () => (
  <Segment inverted>
    <Statistic.Group items={items} inverted color='green' />
  </Segment>
)

export default StatisticExampleGroupInverted
