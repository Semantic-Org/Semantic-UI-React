import React from 'react'
import { Icon, Image, Statistic } from 'stardust'

const { Group, Label, Value } = Statistic

const Values = () => (
  <Group>
    <Statistic>
      <Value>22</Value>
      <Label>Saves</Label>
    </Statistic>

    <Statistic>
      <Value text>
        Three<br />
        Thousand
      </Value>
      <Label>Signups</Label>
    </Statistic>

    <Statistic>
      <Value>
        <Icon name='plane' />
        5
      </Value>
      <Label>Flights</Label>
    </Statistic>

    <Statistic>
      <Value>
        <Image src='http://semantic-ui.com/images/avatar/small/joe.jpg' inline shape='circular' />
        42
      </Value>
      <Label>Team Members</Label>
    </Statistic>
  </Group>
)

export default Values
