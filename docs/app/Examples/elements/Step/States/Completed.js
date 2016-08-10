import React from 'react'
import { Step } from 'stardust'

const { Group } = Step

const Completed = () => (
  <div>
    <Group>
      <Step completed icon='payment' title='Billing' description='Enter billing information' />
    </Group>

    <br />

    <Group ordered>
      <Step completed title='Billing' description='Enter billing information' />
    </Group>
  </div>
)

export default Completed
