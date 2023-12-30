import React from 'react'
import {
  StatisticValue,
  StatisticLabel,
  StatisticGroup,
  Icon,
  Image,
  Statistic,
} from 'semantic-ui-react'

const StatisticExampleEvenlyDivided = () => (
  <StatisticGroup widths='four'>
    <Statistic>
      <StatisticValue>22</StatisticValue>
      <StatisticLabel>Saves</StatisticLabel>
    </Statistic>

    <Statistic>
      <StatisticValue text>
        Three
        <br />
        Thousand
      </StatisticValue>
      <StatisticLabel>Signups</StatisticLabel>
    </Statistic>

    <Statistic>
      <StatisticValue>
        <Icon name='plane' />5
      </StatisticValue>
      <StatisticLabel>Flights</StatisticLabel>
    </Statistic>

    <Statistic>
      <StatisticValue>
        <Image src='/images/avatar/small/joe.jpg' className='circular inline' />
        42
      </StatisticValue>
      <StatisticLabel>Team Members</StatisticLabel>
    </Statistic>
  </StatisticGroup>
)

export default StatisticExampleEvenlyDivided
