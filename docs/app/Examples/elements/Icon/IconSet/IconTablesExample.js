import React from 'react'
import { Grid, Icon } from 'stardust'

const IconTablesExample = () => (
  <Grid columns='5' doubling>
    <Grid.Column>
      <Icon name='columns' />
      <p>columns</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='sort alphabet ascending' />
      <p>sort alphabet ascending</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='sort alphabet descending' />
      <p>sort alphabet descending</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='sort ascending' />
      <p>sort ascending</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='sort content ascending' />
      <p>sort content ascending</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='sort content descending' />
      <p>sort content descending</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='sort descending' />
      <p>sort descending</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='sort' />
      <p>sort</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='sort numeric ascending' />
      <p>sort numeric ascending</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='sort numeric descending' />
      <p>sort numeric descending</p>
    </Grid.Column>
    <Grid.Column>
      <Icon name='table' />
      <p>table</p>
    </Grid.Column>
  </Grid>
)

export default IconTablesExample
