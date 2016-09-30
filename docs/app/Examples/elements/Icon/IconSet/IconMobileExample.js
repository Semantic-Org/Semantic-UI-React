import React from 'react'
import { Grid, Icon } from 'stardust'

const IconMobileExample = () => (
  <Grid columns='5' doubling>
    <Grid.Column>
      <Icon name='mobile' />
      <p>mobile</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='tablet' />
      <p>tablet</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='battery empty' />
      <p>battery empty</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='battery full' />
      <p>battery full</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='battery low' />
      <p>battery low</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='battery medium' />
      <p>battery medium</p>
    </Grid.Column>
  </Grid>
)

export default IconMobileExample
