import React from 'react'
import { StatisticGroup, Statistic } from 'semantic-ui-react'

const StatisticExampleValueShorthand = () => (
  <StatisticGroup>
    <Statistic label='Saves' value='22' />
    <Statistic label='Signups' value='Three Thousand' text />
    <Statistic label='Flights' value='5' />
    <Statistic label='Team Members' value='42' />
  </StatisticGroup>
)

export default StatisticExampleValueShorthand
