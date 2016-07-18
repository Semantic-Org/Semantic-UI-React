import React from 'react'
import { Statistic } from 'stardust'

const items = [
  { label: 'Views', value: '2,204' },
  { label: 'Downloads', value: '3,322' },
  { label: 'Tasks', value: 22 },
]

const StatisticGroupHorizontalExample = () => <Statistic.Group horizontal items={items} />

export default StatisticGroupHorizontalExample
