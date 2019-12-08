import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'

const StatisticExampleEvenlyDivided = () => (
  <Statistic.Group widths='four'>
    <Statistic>
      <Statistic.Value>22</Statistic.Value>
      <Statistic.Label>Saves</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value text>
        Three
        <br />
        Thousand
      </Statistic.Value>
      <Statistic.Label>Signups</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name='plane' />5
      </Statistic.Value>
      <Statistic.Label>Flights</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Image src='/images/avatar/small/joe.jpg' className='circular inline' />
        42
      </Statistic.Value>
      <Statistic.Label>Team Members</Statistic.Label>
    </Statistic>
  </Statistic.Group>
)

export default StatisticExampleEvenlyDivided
