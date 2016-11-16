import React from 'react'
import { Statistic } from 'semantic-ui-react'

const StatisticExampleLabels = () => (
  <div>
    <Statistic>
      <Statistic.Value>2,204</Statistic.Value>
      <Statistic.Label>Views</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value value='2,204' />
      <Statistic.Label label='Views' />
    </Statistic>

    <Statistic value='2,204' label='Views' />
  </div>
)

export default StatisticExampleLabels
