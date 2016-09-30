import React from 'react'
import { Grid, Icon } from 'stardust'

const IconMessageExample = () => (
  <Grid columns='5' doubling>
    <Grid.Column>
      <Icon name='announcement' />
      <p>announcement</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='birthday' />
      <p>birthday</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='help circle' />
      <p>help circle</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='help' />
      <p>help</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='info circle' />
      <p>info circle</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='info' />
      <p>info</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='warning circle' />
      <p>warning circle</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='warning' />
      <p>warning</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='warning sign' />
      <p>warning sign</p>
    </Grid.Column>
  </Grid>
)

export default IconMessageExample
