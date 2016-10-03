import React from 'react'
import { Statistic } from 'semantic-ui-react'

const BottomLabel = () => (
  <div>
    <Statistic>
      <Statistic.Value>5,550</Statistic.Value>
      <Statistic.Label>Downloads</Statistic.Label>
    </Statistic>

    <Statistic value='5,500' label='Downloads' />
  </div>
)

export default BottomLabel
