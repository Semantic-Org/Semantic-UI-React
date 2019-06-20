import capitalize from 'lodash/capitalize'
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

const GridColoredRowExample = () => (
  <Grid padded>
    {colors.map((color) => (
      <Grid.Row color={color} key={color}>
        <Grid.Column>{capitalize(color)}</Grid.Column>
      </Grid.Row>
    ))}
  </Grid>
)

export default GridColoredRowExample
