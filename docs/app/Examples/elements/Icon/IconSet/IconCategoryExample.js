import _ from 'lodash'
import React from 'react'
import { Grid, Icon } from 'stardust'

const columns = (icons) => _.map(icons, icon => (
  <Grid.Column key={icon}>
    <Icon name={icon} style={{ fontSize: '2em' }} />
    <div>{_.startCase(icon)}</div>
  </Grid.Column>
))

export default ({ category }) => (
  <Grid className='center aligned doubling five column'>
    {columns(category.icons)}
  </Grid>
)
