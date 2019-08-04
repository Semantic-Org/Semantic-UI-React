import _ from 'lodash'
import React from 'react'
import { Grid } from 'semantic-ui-react'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const GridExampleColoredColumn = () => (
  <Grid columns={5} padded>
    {colors.map((color) => (
      <Grid.Column color={color} key={color}>
        {_.capitalize(color)}
      </Grid.Column>
    ))}
  </Grid>
)

export default GridExampleColoredColumn
