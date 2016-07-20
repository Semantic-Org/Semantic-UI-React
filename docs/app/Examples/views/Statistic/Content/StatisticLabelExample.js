import React from 'react'
import { Statistic } from 'stardust'

const { Label, Value } = Statistic

const StatisticLabelExample = () => (
  <div>
    <Statistic>
      <Value>2,204</Value>
      <Label>Views</Label>
    </Statistic>

    <Statistic value='2,204' label='Views' />
  </div>
)

export default StatisticLabelExample
