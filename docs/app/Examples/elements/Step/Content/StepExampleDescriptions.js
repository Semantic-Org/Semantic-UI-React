import React from 'react'
import { Step } from 'semantic-ui-react'

const StepExampleDescriptions = () => (
  <div>
    <Step.Group>
      <Step>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step>
    </Step.Group>

    <br />

    <Step.Group>
      <Step>
        <Step.Title title='Shipping' />
        <Step.Description description='Choose your shipping options' />
      </Step>
    </Step.Group>

    <br />

    <Step.Group>
      <Step title='Shipping' description='Choose your shipping options' />
    </Step.Group>
  </div>
)

export default StepExampleDescriptions
