import React from 'react'
import { Icon, Grid, Step } from 'semantic-ui-react'

const StepExampleFluid = () => (
  <Grid columns={2}>
    <Grid.Column>
      <Step.Group fluid vertical>
        <Step completed>
          <Icon name='truck' />
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Icon name='dollar' />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    </Grid.Column>

    <Grid.Column>
      <p>The steps take up the entire column width</p>
    </Grid.Column>
  </Grid>
)

export default StepExampleFluid
