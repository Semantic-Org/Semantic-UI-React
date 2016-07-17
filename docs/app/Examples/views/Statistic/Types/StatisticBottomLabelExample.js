import React from 'react'
import { Statistic } from 'stardust'

const StatisticBottomLabelExample = () => (
  <div>
    <Statistic>
      <Statistic.Value>5,550</Statistic.Value>
      <Statistic.Label>Downloads</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value content='5,550' />
      <Statistic.Label content='Downloads' />
    </Statistic>

    <Statistic value='5,500' label='Downloads' />
  </div>
)

export default StatisticBottomLabelExample
