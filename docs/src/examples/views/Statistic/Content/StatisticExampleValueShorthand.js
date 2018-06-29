import React from 'react'
import { Statistic } from 'semantic-ui-react'

const StatisticExampleValueShorthand = () => (
  <Statistic.Group>
    <Statistic label='Saves' value='22' />
    <Statistic label='Signups' value='Three Thousand' text />
    <Statistic label='Flights' value='5' />
    <Statistic label='Team Members' value='42' />
  </Statistic.Group>
)

export default StatisticExampleValueShorthand
