import React from 'react'
import { Grid, Step } from 'stardust'

// TODO: Update usage of <Grid> after update to v1 API

const StepOrderedExample = () => (
  <Grid className='two column'>
    <Grid.Column>
      <Step.Group fluid vertical>
        <Step completed icon='truck' title='Shipping' description='Choose your shipping options' />
        <Step active icon='dollar' title='Billing' description='Enter billing information' />
      </Step.Group>
    </Grid.Column>

    <Grid.Column>
      <p>The steps take up the entire column width</p>
    </Grid.Column>
  </Grid>
)

export default StepOrderedExample
