import React from 'react'
import { Statistic } from 'semantic-ui-react'

const items = [
  { label: 'Views', value: '2,204' },
  { label: 'Downloads', value: '3,322' },
  { label: 'Tasks', value: '22' },
]

const StatisticExampleHorizontalGroup = () => <Statistic.Group horizontal items={items} />

export default StatisticExampleHorizontalGroup
