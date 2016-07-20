import React from 'react'
import { Icon, Image, Statistic } from 'stardust'

// TODO: Update <Image> usage after <Image> will be updated to v1 API

const iconValue = (
  <div>
    <Icon name='plane' /> 5
  </div>
)
const imageValue = (
  <div>
    <Image src='http://semantic-ui.com/images/avatar/small/joe.jpg' className='circular inline' />
    42
  </div>
)
const textValue = <div>Three<br />Thousand</div>

const items = [
  { label: 'Saves', value: 22 },
  { label: 'Signups', text: true, value: textValue },
  { label: 'Flights', value: iconValue },
  { label: 'Team Members', value: imageValue },
]

const StatisticValuePropsExample = () => (
  <div>
    <Statistic.Group>
      <Statistic label='Saves' value='22' />
      <Statistic Label='Signups' value={textValue} text />
      <Statistic Label='Flights' value={iconValue} />
      <Statistic Label='Team Members' value={imageValue} />
    </Statistic.Group>

    <Statistic.Group items={items} />
  </div>
)

export default StatisticValuePropsExample
