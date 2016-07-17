import React from 'react'
import { Statistic } from 'stardust'

const { Group, Label, Value } = Statistic
const items = [
  { label: 'Faves', value: 22 },
  { label: 'Views', value: '31,200' },
  { label: 'Members', value: 22 },
]

const StatisticGroupExample = () => (
  <div>
    <Group>
      <Statistic>
        <Value>22</Value>
        <Label>Faves</Label>
      </Statistic>
      <Statistic>
        <Value content='31,200' />
        <Label content='Views' />
      </Statistic>
      <Statistic label='Members' value='22' />
    </Group>

    <Group items={items} />
  </div>
)

export default StatisticGroupExample
