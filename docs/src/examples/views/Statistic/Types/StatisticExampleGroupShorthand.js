import React from 'react'
import { StatisticGroup } from 'semantic-ui-react'

const items = [
  { key: 'faves', label: 'Faves', value: '22' },
  { key: 'views', label: 'Views', value: '31,200' },
  { key: 'members', label: 'Members', value: '22' },
]

const StatisticExampleGroupShorthand = () => <StatisticGroup items={items} />

export default StatisticExampleGroupShorthand
