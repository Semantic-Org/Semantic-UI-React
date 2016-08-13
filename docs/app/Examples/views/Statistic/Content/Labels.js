import React from 'react'
import { Statistic } from 'stardust'

const { Label, Value } = Statistic

const Labels = () => (
  <div>
    <Statistic>
      <Value>2,204</Value>
      <Label>Views</Label>
    </Statistic>

    <Statistic>
      <Value value='2,204' />
      <Label label='Views' />
    </Statistic>

    <Statistic value='2,204' label='Views' />
  </div>
)

export default Labels
