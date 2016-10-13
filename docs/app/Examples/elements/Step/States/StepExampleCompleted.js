import React from 'react'
import { Step } from 'semantic-ui-react'

const { Group } = Step

const StepExampleCompleted = () => (
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

export default StepExampleCompleted
