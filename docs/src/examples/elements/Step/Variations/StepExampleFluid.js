import React from 'react'
import {
  StepTitle,
  StepGroup,
  StepDescription,
  StepContent,
  GridColumn,
  Icon,
  Grid,
  Step,
} from 'semantic-ui-react'

const StepExampleFluid = () => (
  <Grid columns={2}>
    <GridColumn>
      <StepGroup fluid vertical>
        <Step completed>
          <Icon name='truck' />
          <StepContent>
            <StepTitle>Shipping</StepTitle>
            <StepDescription>Choose your shipping options</StepDescription>
          </StepContent>
        </Step>

        <Step active>
          <Icon name='dollar' />
          <StepContent>
            <StepTitle>Billing</StepTitle>
            <StepDescription>Enter billing information</StepDescription>
          </StepContent>
        </Step>
      </StepGroup>
    </GridColumn>

    <GridColumn>
      <p>The steps take up the entire column width</p>
    </GridColumn>
  </Grid>
)

export default StepExampleFluid
