import React from 'react'
import { Step } from 'stardust'

// eslint-disable-next-line no-alert
const handleClick = () => alert('Clicked!')

const StepLinkExamples = () => (
  <div>
    <Step.Group>
      <Step active href='http://google.com' icon='truck' title='Shipping' description='Choose your shipping options' />
      <Step onClick={handleClick} icon='credit card' title='Shipping' description='Choose your shipping options' />
    </Step.Group>

    <br />

    <Step.Group>
      <Step link icon='truck' title='Shipping' description='Choose your shipping options' />
      <Step link icon='credit card' title='Shipping' description='Choose your shipping options' />
    </Step.Group>
  </div>
)

export default StepLinkExamples
