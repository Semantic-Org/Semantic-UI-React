import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

const IconLayoutAdjustmentExample = () => (
  <Grid columns='5' doubling>
    <Grid.Column>
      <Icon name='block layout' />
      <p>block layout</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='crop' />
      <p>crop</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='grid layout' />
      <p>grid layout</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='list layout' />
      <p>list layout</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='maximize' />
      <p>maximize</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='resize horizontal' />
      <p>resize horizontal</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='resize vertical' />
      <p>resize vertical</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='zoom' />
      <p>zoom</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='zoom out' />
      <p>zoom out</p>
    </Grid.Column>
  </Grid>
)

export default IconLayoutAdjustmentExample
