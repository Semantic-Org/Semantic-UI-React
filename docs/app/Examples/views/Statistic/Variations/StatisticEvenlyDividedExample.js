import React from 'react'
import { Icon, Image, Statistic } from 'stardust'

// TODO: Update <Icon> usage after <Icon> will be updated to v1 API
// TODO: Update <Image> usage after <Image> will be updated to v1 API

const iconValue = (<div><Icon className='plane' /> 5</div>)
const imageValue = (
  <div>
    <Image src='http://semantic-ui.com/images/avatar/small/joe.jpg' className='circular inline' />
    42
  </div>
)
const textValue = (<div>Three<br />Thousand</div>)

const items = [
  { label: 'Saves', value: 22 },
  { label: 'Signups', text: true, value: textValue },
  { label: 'Flights', value: iconValue },
  { label: 'Team Members', value: imageValue },
]

const StatisticEvenlyDividedExample = () => (
  <div>
    <Statistic.Group widths='four' items={items} />
    <Statistic.Group widths={4} items={items} />
  </div>
)

export default StatisticEvenlyDividedExample
