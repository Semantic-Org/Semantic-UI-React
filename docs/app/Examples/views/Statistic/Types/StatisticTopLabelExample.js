import React from 'react'
import { Statistic } from 'stardust'

const StatisticTopLabelExample = () => (
  <div>
    <Statistic>
      <Statistic.Label>Views</Statistic.Label>
      <Statistic.Value>40,509</Statistic.Value>
    </Statistic>

    <Statistic>
      <Statistic.Label content='Views' />
      <Statistic.Value content='40,509' />
    </Statistic>
  </div>
)

export default StatisticTopLabelExample
